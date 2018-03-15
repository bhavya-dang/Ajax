const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
  let uicon = message.author.displayAvatarURL;
  let uEmbed = new Discord.RichEmbed()
  .setDescription("**User Information**")
  .setColor("#e0d318")
  .setTimestamp()
  .setThumbnail(uicon)
  .addField("**Userame**", message.member.displayName)
  .addField("**Discriminator**", message.author.discriminator)
  .addField("**ID**", message.author.id)
  .addField("**Status**", message.author.presence.status)
  .addField("**Joined**", message.member.joinedAt)
  .setFooter("Tritax AI", bot.user.displayAvatarURL);
  message.channel.send(uEmbed);
}

module.exports.help = {
  name: "userstats"
}



