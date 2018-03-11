const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.channel.send(`**Pong! :ping_pong:** \`${Date.now() - message.createdTimestamp} ms\``);
}

module.exports.help = {
  name: "ping"
}
