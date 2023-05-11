const express = require("express");

const adminData = require("./admin");

const router = express.Router();

// / => GET
router.get("/", (req, res) => {
  res.render("shop", {
    pageTitle: "Shop",
    products: adminData.products,
    path: "/",
  });
});

module.exports = router;
