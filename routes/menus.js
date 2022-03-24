var express = require("express");
var router = express.Router();
const Menu = require("../models/Menu.model");
const Menuitem = require("../models/Menuitem.model");

const fileUploader = require("../config/cloudinary.config");

router.get("/:menuId", function (req, res, next) {
  Menu.findById(req.params.menuId)
    .populate("items")
    .then((menuData) => {
      res.json({ success: true, menu: menuData });
    })
    .catch((err) => {
      res.json({
        success: false,
        message: err,
      });
    });
});

router.post("/upload-image", fileUploader.single("imageUrl"), (req, res) => {
  res.json({ success: true, menu: req.file.path });
});

router.post("/addItem/:menuId", (req, res) => {
  Menuitem.create(req.body).then((itemData) => {
    Menu.updateOne(
      { _id: req.params.menuId },
      {
        $push: {
          items: [itemData._id],
        },
      }
    )
      .then(() => {
        res.json({
          success: true,
          item: itemData,
        });
      })
      .catch((err) => {
        next(err);
      });
  });
});

module.exports = router;
