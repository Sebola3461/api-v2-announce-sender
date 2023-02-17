const express = require("express");
const axios = require("axios");

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
module.exports.getToken = async (req, res) => {
  try {
    const code = req.query.code;

    const d = await axios("https://osu.ppy.sh/oauth/token", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        code,
        grant_type: "authorization_code",
        redirect_uri: process.env.REDIRECT_URI,
      }),
    });

    res.status(200).send(d.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error. Check console.");
  }
};
