const postsData = require("../data/blogsData");
const express = require("express");
const posts = express();

posts.get("/", (req, res) => {
  res.json({
    result: postsData,
    success: true,
  });
});

module.exports = posts;
