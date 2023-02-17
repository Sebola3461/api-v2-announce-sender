const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const { getToken } = require("./getToken");
const app = express();

app.get("/", getToken);

app.listen(4000, () => {
  console.log("Server started: https://localhost:4000");
});
