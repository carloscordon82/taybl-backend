var express = require("express");
var router = express.Router();
const User = require("../models/User.model");
const Reservation = require("../models/Reservation.model");
const isLoggedIn = require("../middleware/isLoggedIn");
const restaurants = require("../restaurants.json");

router.get("/", isLoggedIn, function (req, res, next) {
  User.findById(req.user._id)
    .populate("reservations")
    .then((userData) => {
      let finalResults = [];
      userData.reservations.forEach((reservation, i) => {
        restaurants.results.restaurants.forEach((each) => {
          if (each.location_id === reservation.restaurant) {
            finalResults.push({
              user: userData,
              info: each,
              reservation: userData.reservations[i],
            });

            console.log("Changing", finalResults);
            userData.reservations[i].restaurant = each.name;
          }
        });
      });
      res.json({ success: true, results: finalResults });
    })
    .catch((err) => {
      res.json({
        success: false,
        message: err,
      });
    });
});

module.exports = router;
