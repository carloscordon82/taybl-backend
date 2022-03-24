const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const menuSchema = new Schema(
  {
    items: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Menuitem",
        default: null,
      },
    ],
    restaurant: {
      type: mongoose.Types.ObjectId,
      ref: "Restaurant",
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const Menu = model("Menu", menuSchema);

module.exports = Menu;
