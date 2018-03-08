const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
  .setDescription("Bot Information")
  .setColor("#7fe81e")
  .setThumbnail(bicon)
  .addField("Bot Name", bot.user.username)
  .addField("Created At", bot.user.createdAt)
  return message.channel.send(botembed);
}

module.exports.help = {
  name: "botinfo"
}
