const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
  let sicon = message.guild.iconURL;
  let serverembed = new Discord.RichEmbed()
  .setDescription("**Server Information**")
  .setColor("#e0d318")
  .setTimestamp()
  .setThumbnail(sicon)
  .addField("**Server Name:**", message.guild.name)
  .addField("**Created At:**", message.guild.createdAt)
  .addField("**OwnerID:**", message.guild.ownerID)
  .addField("**ID:**", message.guild.id)
  .addField("**Verification Level:**", message.guild.verificationLevel)
  .addField("**You Joined:**", message.member.joinedAt)
  .addField("**Total Members:**", message.guild.memberCount)
  .setFooter("Tritax AI", bot.user.displayAvatarURL);
  message.channel.send(serverembed);
}

module.exports.help = {
  name: "serverinfo"
}



