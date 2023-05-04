const path = require("path");

const express = require("express");

const { rootDir } = require("../utils/path");

const router = express.Router();

// / => GET
router.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "..", "views", "shop.html"));
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
