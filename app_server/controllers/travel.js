// var fs = require("fs");
// var trips = JSON.parse(fs.readFileSync("./data/trips.json", "utf8"));

// // Get travel view
// const travel = (req, res) => {
//   res.render("travel", { title: "Travlr Getaway", trips });
// };

const tripsEndpoint = "http://localhost:3000/api/trips";
const options = {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
};

/* GET travel view */
const travel = async function (reg, res, next) {
  // console. 1og( 'TRAVEL CONTROLLER BEGIN");
  await fetch(tripsEndpoint, options)
    .then((res) => res.json())
    .then((json) => {
      // console. log(json);
      let message = null;
      if (!(json instanceof Array)) {
        message = "API lookup error";
        json = [];
      } else {
        if (!json.length) {
          message = "No trips exist in our database";
        }
      }
      res.render("travel", { title: "Travir Getaways", trips: json, message });
    })
    .catch((err) => res.status(500).send(err.message));
  // console. log('TRAVEL CONTROLLER AFTER RENDER');
};

module.exports = {
  travel,
};
