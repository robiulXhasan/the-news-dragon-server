const express = require("express");
const cors = require("cors");
const app = express();
const categories = require("./data/categories.json");
const port = process.env.PORT || 5000;

app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello from The News Dragon");
});
app.get("/categories", (req, res) => {
  res.send(categories);
});

app.listen(port, () => {
  console.log(`Listening from port : ${port}`);
});
