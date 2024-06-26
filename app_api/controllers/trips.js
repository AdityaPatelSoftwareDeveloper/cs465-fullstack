const mongoose = require("mongoose");
const Trip = require("../models/travlr"); // Register model
const User = require("../models/user"); // Register model
const tripModel = mongoose.model("trips");
const userModel = mongoose.model("users");

// GET: /trips - lists all the trips
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsList = async (reg, res) => {
  const q = await tripModel.find({}).exec(); // No filter, return all records

  // Uncomment the following line to show results of querey
  // on the console
  // console.1og(g);

  if (!q) {
    // Database returned no data
    return res.status(404).json(err);
  } else {
    // Return resulting trip list
    return res.status(200).json(q);
  }
};

// GET: /trips:tripCode - lists a single trip
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsFindbyCode = async (req, res) => {
  const q = await tripModel.find({ code: req.params.tripCode }).exec(); // Return signle record

  // Uncomment the following line to show results of querey
  // on the console
  // console.1og(g);

  if (!q) {
    // Database returned no data
    return res.status(404).json(err);
  } else {
    // Return resulting trip list
    return res.status(200).json(q);
  }
};

// const tripsAddTrip = async (req, res) => {
//   const newTrip = new Trip({
//     code: req.body.code,
//     name: req.body.name,
//     length: req.body.length,
//     start: req.body.start,
//     resort: req.body.resort,
//     perPerson: req.body.perPerson,
//     image: req.body.image,
//     description: req.body.description,
//   });

//   const q = await newTrip.save();

//   if (!q) {
//     // Database returned no data
//     return res.status(404).json(err);
//   } else {
//     // Return resulting trip list
//     return res.status(200).json(q);
//   }
// };

// const tripsUpdateTrip = async (req, res) => {
//   // Uncomment for debugging

//   console.log(req.params);
//   console.log(req.body);

//   const q = await Model.findOneAndUpdate(
//     { code: req.params.tripCode },
//     {
//       code: req.body.code,
//       name: req.body.name,
//       length: req.body.length,
//       start: req.body.start,
//       resort: req.body.resort,
//       perPerson: req.body.perPerson,
//       image: req.body.image,
//       description: req.body.description,
//     }
//   ).exec();

//   if (!q) {
//     // Database returned no data
//     return res.status(400).json(err);
//   } else {
//     // Return resulting updated trip
//     return res.status(201).json(q);
//   }

//   // Uncomment the following line to show results of operation
//   // on the console
//   // console.log(q);
// };

const getUser = (req, res, callback) => {
  console.log("in #getUser");
  //console.log(req.payload.email);

  if (req.auth && req.auth.email) {
    // if (req.payload && req.payload.email) {
    User.findOne({ email: req.auth.email }).exec((err, user) => {
      if (!user) {
        return res.status(404).json({ message: "Email not found" });
      } else if (err) {
        console.log(err);
        return res.status(404).json(err);
      }
      callback(
        req,
        res.json({ message: "User found" }),
        console.log("callback"),
        console.log(req.auth)
      );
    });
  } else {
    return res.status(404).json({ message: "User was not found" });
    console.log(req.payload);
  }
};

const tripsAddTrip = async (req, res) => {
  getUser(req, res, (req, res) => {
    Trip.create(
      {
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.perPerson,
        image: req.body.image,
        description: req.body.description,
      },
      (err, trip) => {
        if (err) {
          return res
            .status(400) // bad request, invalid content
            .json(err);
        } else {
          return;
        }
      }
    );
  });
};

const tripsUpdateTrip = async (req, res) => {
  getUser(req, res, (req, res) => {
    Trip.findOneAndUpdate(
      { code: req.params.tripCode },
      {
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.perPerson,
        image: req.body.image,
        description: req.body.description,
      },
      { new: true }
    )

      .then((trip) => {
        if (!trip) {
          return res.status(404).send({
            message: "Trip not found with code " + req.params.tripCode,
          });
        }
        return res;
      })
      .catch((err) => {
        if (err.kind === "ObjectId") {
          return res.status(404).send({
            message: "Trip not found with code " + req.params.tripCode,
          });
        }
        return res
          .status(500) // server error
          .json(err);
      });
    console.log("completed updateTrip");
  });
};

module.exports = {
  tripsList,
  tripsFindbyCode,
  tripsAddTrip,
  tripsUpdateTrip,
  getUser,
};
