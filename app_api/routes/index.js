const express = require("express"); // Express app
const router = express.Router(); // Router logic

//This is where we import the controllers we will route
const tripsController = require("../controllers/trips");
const authController = require("../controllers/aunthentication");
const jwt = require("express-jwt");

const auth = jwt({
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"],
  userProperty: "payload",
});

// define route for our trips endpoint
router
  .route("/trips")
  .get(tripsController.tripsList)
  .post(auth, tripsController.tripsAddTrip); // GET Method routes tripList

// Get Method routes tripsFindByCode - require parameter
router
  .route("/trips/:tripCode")
  .get(tripsController.tripsFindbyCode)
  .put(auth, tripsController.tripsUpdateTrip);

router.route("/login").post(authController.login);

router.route("/register").post(authController.register);

module.exports = router;
