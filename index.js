const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const { getToken } = require("./getToken");
const app = express();

app.get("/", getToken);

app.listen(4000, () => {
  console.log(
    `Server started: https://localhost:4000\nSend a new message: https://osu.ppy.sh/oauth/authorize?client_id=${process.env.CLIENT_ID}&redirect_uri=http%3A%2F%2Flocalhost%3A4000&response_type=code&scope=chat.write`
  );
});
