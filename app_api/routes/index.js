const express = require("express"); // Express app
const router = express.Router(); // Router logic

//This is where we import the controllers we will route
const tripsController = require("../controllers/trips");

// define route for our trips endpoint
router.route("/trips").get(tripsController.tripsList).post(tripsAddTrip); // GET Method routes tripList

// Get Method routes tripsFindByCode - require parameter
router
  .route("/trips/:tripCode")
  .get(tripsController.tripsFindbyCode)
  .put(tripsController.tripsUpdateTrip);

module.exports = router;
