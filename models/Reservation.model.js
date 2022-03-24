const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const reservationSchema = new Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      default: null,
    },
    restaurant: {
      type: String,
    },
    time: String,
    date: String,
    party: String,
    primoSeating: String,
    paymentId: String,
  },
  {
    timestamps: true,
  }
);

const Reservation = model("Reservation", reservationSchema);

module.exports = Reservation;
