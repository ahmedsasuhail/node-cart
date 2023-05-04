const express = require("express");
const bodyParser = require("body-parser");

const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// /admin routes
app.use("/admin", adminRouter);
// / routes
app.use(shopRouter);

app.use((req, res) => {
  res.status(404).send("<h1>Page Not Found!</h1>");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server started at port: ${port}`);
});
