const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const ms = require('ms');

module.exports.run = async (bot, message, args) => {
  let roles = message.guild.roles.size;
  let bots = message.guild.members.filter(m => m.user.bot).size;
  let humans = message.guild.members.filter(m => !m.user.bot).size;
  let channels = message.guild.channels.size;
  let textChannels = message.guild.channels.filter(m => m.type == "text").size;
  let voiceChannels = message.guild.channels.filter(i => i.type == "voice").size;
  let sicon = message.guild.iconURL;
  let serverembed = new Discord.RichEmbed()
  .setDescription("**Server Information**")
  .setColor("#e0d318")
  .setTimestamp()
  .setThumbnail(sicon)
  .addField("**Server Name:**", message.guild.name)
  .addField("**Total Members:**", message.guild.memberCount, true)
  .addField("**Bots:**", `${bots}`, true)
    .addField("**Users:**", `${humans}`, true)
  .addField("**Channels:**", `${channels}`, true)
  .addField("**Text Channels:**", `${textChannels}`, true)
  .addField("**Voice Channels:**", `${voiceChannels}`, true)
  .addField("**Roles**", `${roles}`, true)
  .addField("**OwnerID:**", message.guild.ownerID)
  .addField("**ID:**", message.guild.id)
  .addField("**Verification Level:**", message.guild.verificationLevel, true)
  .addField("**Created At**", `${moment.utc(message.guild.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")} (${ms(Date.now()- message.guild.createdAt, {long: true})})`)
  .addField("**You Joined:**", `${moment.utc(message.member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")} (${ms(Date.now()- message.member.joinedAt, {long: true})})`, true)
  .setFooter("Tritax AI", bot.user.displayAvatarURL);
  message.channel.send(serverembed);
}

module.exports.help = {
  name: "serverstats"
}



