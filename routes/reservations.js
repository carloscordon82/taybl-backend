var express = require("express");
var router = express.Router();
const Reservation = require("../models/Reservation.model");
const User = require("../models/User.model");
const isLoggedIn = require("../middleware/isLoggedIn");

router.get("/:reservationId", isLoggedIn, function (req, res, next) {
  Reservation.findOne({
    _id: req.params.reservationId,
    user: req.user._id,
  })
    .then((reservationData) => {
      if (reservationData) {
        res.json({
          success: true,
          reservation: reservationData,
        });
      } else {
        res.json({
          success: false,
          message: "Reservation not found",
        });
      }
    })
    .catch((err) => {
      res.json({
        success: false,
        message: err,
      });
    });
});

router.post("/", isLoggedIn, function (req, res, next) {
  console.log("Making res", req.body);
  const { time, date, party, primoSeating, paymentId } = req.body;
  const restaurant = req.body.restaurantId;
  const user = req.user._id;

  Reservation.create({
    user,
    restaurant,
    time,
    date,
    party,
    primoSeating,
    paymentId,
  })
    .then((reservationData) => {
      User.updateOne(
        { username: req.user.username },
        {
          $push: {
            reservations: [reservationData._id],
          },
        }
      )
        .then(() => {
          res.json({
            success: true,
            reservation: reservationData,
          });
        })
        .catch((err) => {
          next(err);
        });
    })
    .catch((err) => {
      res.json(err.message);
    });
});

router.put("/:reservationId", isLoggedIn, function (req, res, next) {
  const { restaurant, time, date, party, primoSeating, paymentId } = req.body;

  const user = req.user._id;

  Reservation.findByIdAndUpdate(
    req.params.reservationId,
    {
      user,
      restaurant,
      time,
      date,
      party,
      primoSeating,
      paymentId,
    },
    { new: true }
  )
    .then((reservationData) => {
      res.json({
        success: true,
        reservation: reservationData,
      });
    })
    .catch((err) => {
      res.json(err.message);
    });
});

router.delete("/:reservationId", isLoggedIn, function (req, res, next) {
  Reservation.findByIdAndDelete(req.params.reservationId)
    .then((reservationData) => {
      User.updateOne(
        { username: req.user.username },
        {
          $pullAll: {
            reservations: [req.params.reservationId],
          },
        },
        { new: true }
      )
        .then((userData) => {
          res.json({
            success: true,
            reservation: reservationData,
            user: userData,
          });
        })
        .catch((err) => {
          res.json(err.message);
        });
    })
    .catch((err) => {
      res.json({
        success: false,
        message: err,
      });
    });
});

module.exports = router;
