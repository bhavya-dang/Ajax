const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let gEmbed = new Discord.RichEmbed()
  .setTitle("Github")
  .setColor("#42f4d9")
  .setThumbnail("https://himebot.xyz/img/rsz_hime_yarizakura.png")
  .setDescription("https://github.com/TritaxGamer/Tritax-AI");

   message.channel.send(gEmbed);
}

module.exports.help = {
  name: "gitbot"
}
