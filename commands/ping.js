const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const m = await message.channel.send("Pong!");
  m.edit(`:ping_pong: Latency is ${m.createdTimestamp - message.createdTimestamp}ms.`)
}

module.exports.help = {
  name: "ping"
}
