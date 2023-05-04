const express = require("express");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", (req, res) => {
  res.send(
    '<form action="/admin/add-product" method="POST"><input type="text" name="title" /><button type="submit">Add</button></form>'
  );
});

// /admin/add-product => POST
router.post("/add-product", (req, res) => {
  console.log(`Request Body: `, req.body);
  res.redirect("/");
});

module.exports = router;
