var express = require("express");
var router = express.Router();
const Restaurant = require("../models/Restaurant.model");
const newRestaurants = require("../restaurants.json");

router.get("/", function (req, res, next) {
  Restaurant.find()
    .then((restaurantsData) => {
      // res.json({ success: true, restaurants: restaurantsData });
      res.json({
        success: true,
        restaurants: newRestaurants.results.restaurants,
      });
    })
    .catch((err) => {
      res.json({
        success: false,
        message: err,
      });
    });
});

// router.get("/:restaurantId", function (req, res, next) {
//   Restaurant.findById(req.params.restaurantId)
//     .then((restaurantData) => {
//       res.json({ success: true, restaurant: restaurantData });
//     })
//     .catch((err) => {
//       res.json({
//         success: false,
//         message: err,
//       });
//     });
// });

router.get("/:restaurantId", function (req, res, next) {
  newRestaurants.results.restaurants.forEach((restaurant) => {
    if (req.params.restaurantId === restaurant.location_id) {
      let copyCuisines = [...restaurant.cuisine];
      let cuisines = [];
      copyCuisines.reduce((a, b) => cuisines.push(b.name), "");
      cuisines = cuisines.join(" - ");
      restaurant.cuisines = cuisines;
      console.log(restaurant.cuisines);

      res.json({ success: true, restaurant: restaurant });
      return;
    }
  });

  // res.json({
  //   success: false,
  // });
});

module.exports = router;
