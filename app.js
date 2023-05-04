const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// /admin routes
app.use("/admin", adminRouter);
// / routes
app.use(shopRouter);

// any route - 404
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server started at port: ${port}`);
});
