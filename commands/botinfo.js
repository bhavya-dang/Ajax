const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let botembed = new Discord.RichEmbed()
  .setDescription("Bot Information")
  .setColor("#7fe81e")
  .setFooter("v1.0.2", bot.user.displayAvatarURL)
  .addField("Bot Name", bot.user.username)
  .addField("Created At", bot.user.createdAt)
  return message.channel.send(botembed);
}

module.exports.help = {
  name: "botinfo"
}
