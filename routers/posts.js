const postsData = require("../data/blogsData");
const express = require("express");
const posts = express();

//! Index
posts.get("/", (req, res) => {
  res.json({
    message: "Visualizza tutti gli elementi",
    result: postsData,
    success: true,
  });
});

//! Show
posts.get("/:id", (req, res) => {
  const searcheditem = postsData.find(
    (el) => el.id === parseInt(req.params.id),
  );

  if (!searcheditem) {
    return res.status(404).json({
      message: "elemento non trovato",
      success: false,
    });
  }

  res.json({
    message: "Visualizza un singolo elemento",
    result: searcheditem,
    success: true,
  });
});

module.exports = posts;
