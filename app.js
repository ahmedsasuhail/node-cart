const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("Through Middleware #1");
  next();
});

app.use('/', (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server started at port: ${port}`);
});
