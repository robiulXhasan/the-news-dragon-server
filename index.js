const express = require("express");
const cors = require("cors");
const app = express();
const categories = require("./data/categories.json");
const news = require("./data/news.json");
const port = process.env.PORT || 5000;

app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello from The News Dragon");
});
// all category load
app.get("/categories", (req, res) => {
  res.send(categories);
});
// all news load
app.get("/news", (req, res) => {
  res.send(news);
});
// specific news load using id
app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const specificNews = news.find((n) => n._id === id);
  res.send(specificNews);
});
// categorized news load
app.get("/categories/:id", (req, res) => {
  const id = req.params.id;
  if (id == 0) {
    res.send(news);
  } else {
    const categorizedNews = news.filter((n) => n.category_id === id);
    res.send(categorizedNews);
  }
});

app.listen(port, () => {
  console.log(`Listening from port : ${port}`);
});
