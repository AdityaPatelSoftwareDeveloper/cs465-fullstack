const mongoose = require("mongoose");
const Trip = require("../models/travlr"); // Register model
const Model = mongoose.model("trips");

// GET: /trips - lists all the trips
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsList = async (reg, res) => {
  const q = await Model.find({}).exec(); // No filter, return all records

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
  const q = await Model.find({ code: req.params.tripCode }).exec(); // Return signle record

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

module.exports = {
  tripsList,
  tripsFindbyCode,
};
