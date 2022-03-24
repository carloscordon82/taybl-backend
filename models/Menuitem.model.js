const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const menuitemSchema = new Schema(
  {
    name: String,
    category: String,
    description: String,
    price: String,
    pics: {
      type: mongoose.Types.ObjectId,
      ref: "Foodpic",
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const Menuitem = model("Menuitem", menuitemSchema);

module.exports = Menuitem;
