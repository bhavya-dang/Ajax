const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {

  const totalSeconds = process.uptime();
  
  let uEmbed = new Discord.RichEmbed()
  .setTitle("Bot Uptime")
  .setColor("#cee1ff")
  .addField("**Seconds:**", totalSeconds)
  .setFooter("v1.0.5", bot.user.displayAvatarURL)
  message.channel.send(uEmbed);
}


module.exports.help = {
  name: "uptime"
}

