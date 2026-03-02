console.log("Hello", process.env.username);

const express = require("express");
const app = express();
const port = 3000;
const appUrl = `http://127.0.0.1:${port}`;

const posts = require("./routers/posts");

app.use("/posts", posts);

app.listen(port, () => {
  console.log("Listen on", appUrl);
});
