const axios = require("axios");
const fs = require("fs");
const messages = require("./messages.json");
require("colors");

module.exports.executeMessage = async () => {
  const token = process.env.OSU_CHAT_TOKEN;

  function sendNewMessage() {
    console.log("Available templates:".black.bgBlue);
    console.log(messages.map((m, i) => `#${i + 1} ${m.name}`).join("\n"));

    const input = process.openStdin();
    console.log("Template name:");

    input.on("data", (data) => {
      const targetInput = data.toString().trim();

      const message = messages.find((m) => m.name == targetInput);

      if (!message) return new Error("Invalid message template selected!");

      axios
        .post(
          "https://osu.ppy.sh/api/v2/chat/channels",
          {
            channel: {
              name: message.channel.name,
              description: message.channel.description,
            },
            message: message.content,
            target_ids: message.users,
            type: "ANNOUNCE",
          },
          {
            headers: {
              Accept: "application/json",
              Authorization: "Bearer " + token,
            },
          }
        )
        .then((res) => {
          console.log("Message sent!".black.bgGreen);
          input.end();
          sendNewMessage();
        })
        .catch((err) => {
          if (err) throw err;
        });
    });
  }

  sendNewMessage();

  //   const message = fs.readFileSync("message.txt", "utf8");
};
