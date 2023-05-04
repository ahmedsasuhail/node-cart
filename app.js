const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use((req, res, next) => {
  console.log("Through Middleware #1");
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/add-product", (req, res) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title" /><button type="submit">Add</button></form>'
  );
});

app.post("/product", (req, res) => {
  console.log(`Request Body: `, req.body);
  res.redirect("/");
});

app.use("/", (req, res) => {
  res.send("<h1>Home</h1>");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server started at port: ${port}`);
});
