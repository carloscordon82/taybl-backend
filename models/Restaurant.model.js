const { Schema, model } = require("mongoose");

const restaurantSchema = new Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    address: {
      type: String,
    },
    cords: {
      lat: { type: Number },
      lng: { type: Number },
    },
    priceRange: {
      type: Number,
    },
    cuisines: [
      {
        type: String,
      },
    ],
    style: {
      type: String,
    },
    dressCode: {
      type: String,
    },
    paymentOptions: [
      {
        type: String,
      },
    ],
    images: [
      {
        type: String,
      },
    ],
    headerImage: {
      type: String,
    },
    rating: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Restaurant = model("Restaurant", restaurantSchema);

module.exports = Restaurant;
