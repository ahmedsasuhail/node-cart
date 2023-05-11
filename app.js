const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const adminData = require("./routes/admin");
const shopRouter = require("./routes/shop");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", "views");

// /admin routes
app.use("/admin", adminData.router);
// / routes
app.use(shopRouter);

// any route - 404
app.use((req, res) => {
  res.status(404).render("404", { pageTitle: "Page Not Found", path: null });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server started at port: ${port}`);
});
