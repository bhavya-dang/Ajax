const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
module.exports.run = async (bot, message, args) => {
  
  let sicon = message.guild.iconURL;
  let serverembed = new Discord.RichEmbed()
  .setDescription("**Server Information**")
  .setColor("#e0d318")
  .setTimestamp()
  .setThumbnail(sicon)
  .addField("**Server Name:**", message.guild.name)
  .addField("**Acc. Created At**", `${moment.utc(message.guild.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`)
  .addField("**OwnerID:**", message.guild.ownerID)
  .addField("**ID:**", message.guild.id)
  .addField("**Verification Level:**", message.guild.verificationLevel)
  .addField("**You Joined:**", `${moment.utc(message.member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`)
  .addField("**Total Members:**", message.guild.memberCount)
  .setFooter("Tritax AI", bot.user.displayAvatarURL);
  message.channel.send(serverembed);
}

module.exports.help = {
  name: "serverstats"
}



