const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let embed = new Discord.RichEmbed()
  .setTitle("Help")
  .setDescription("[Support Server](https://discord.gg/JyMSVyh)\n[Commands](https://tritaxxcoder.github.io/tritaxai/)\n[Github](https://github.com/TritaxXCoder/Tritax-AI)\n[Upvote](https://discordbots.org/bot/421925809532436481)")
  .setColor("#f4f142")
  .setFooter("v1.1.0", bot.user.displayAvatarURL);
  message.channel.send(embed);
}

module.exports.help = {
  name: "help"
}
