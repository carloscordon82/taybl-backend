var express = require("express");
var router = express.Router();
const Restaurant = require("../models/Restaurant.model");
const newRestaurants = require("../restaurants.json");
var axios = require("axios").default;

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
      var options = {
        method: "POST",
        url: `https://worldwide-restaurants.p.rapidapi.com/photos?language=en_US&limit=30&location_id=${restaurant.location_id}&currency=USD`,
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          "x-rapidapi-key": process.env.RAPID,
          "x-rapidapi-host": "worldwide-restaurants.p.rapidapi.com",

          useQueryString: "true",
        },
      };

      axios
        .request(options)
        .then(function (photos) {
          console.log("SUCCESS", photos.data.results.data);
          let copyCuisines = [...restaurant.cuisine];
          let cuisines = [];
          copyCuisines.reduce((a, b) => cuisines.push(b.name), "");
          cuisines = cuisines.join(" - ");
          restaurant.cuisines = cuisines;

          res.json({
            success: true,
            restaurant: restaurant,
            photos: photos.data.results.data,
          });
          return;
        })
        .catch(function (error) {
          console.error(error);
        });

      // axios
      //   .post(
      //     "https://worldwide-restaurants.p.rapidapi.com/photos",
      //     options.data,
      //     options
      //   )
      //   .then((photos) => {
      //     let copyCuisines = [...restaurant.cuisine];
      //     let cuisines = [];
      //     copyCuisines.reduce((a, b) => cuisines.push(b.name), "");
      //     cuisines = cuisines.join(" - ");
      //     restaurant.cuisines = cuisines;
      //     console.log("PHOTOS", photos.data);

      //     res.json({
      //       success: true,
      //       restaurant: restaurant,
      //       photos: photos.data,
      //     });
      //     return;
      //   });
    }
  });

  // res.json({
  //   success: false,
  // });
});

module.exports = router;
