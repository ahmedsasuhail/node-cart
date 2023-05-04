const express = require("express");

const router = express.Router();

// / => GET
router.get("/", (req, res) => {
  res.send("<h1>HomePage - NodeCart</h1>");
});

module.exports = router;
