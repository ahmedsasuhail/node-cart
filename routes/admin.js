const path = require("path");

const express = require("express");

const { rootDir } = require("../utils/path");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", (req, res) => {
  //   res.sendFile(path.join(__dirname, "..", "views", "add-product.html"));
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

// /admin/add-product => POST
router.post("/add-product", (req, res) => {
  console.log(`Request Body: `, req.body);
  res.redirect("/");
});

module.exports = router;
