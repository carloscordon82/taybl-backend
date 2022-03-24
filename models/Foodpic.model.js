const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const foodpicSchema = new Schema(
  {
    picUrl: String,
    description: String,
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const Foodpic = model("Foodpic", foodpicSchema);

module.exports = Foodpic;
