const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const ms = require('ms');
module.exports.run = async (bot, message, args) => {
  

  let member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  let uEmbed = new Discord.RichEmbed()
  .setDescription("**User Information**")
  .setColor("#e0d318")
  .setThumbnail(message.author.displayAvatarURL)
  .addField("**Userame**", message.member.displayName, true)
  .addField("**Discriminator**", message.author.discriminator, true)
  .addField("**ID**", message.author.id, true)
  .addField("**Status**",message.member.presence.status, true)
  .addField("**Playing**", `${message.member.presence.game ? `${message.member.presence.game.name}` : "Not playing anything."}`)
  .addField("**Acc. Created At**", `${moment.utc(message.author.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")} (${ms(Date.now()- message.author.createdAt, {long: true})})`)
  .addField("**Joined At**", `${moment.utc(message.member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")} (${ms(Date.now()- message.member.joinedAt, {long: true})})`);

  message.channel.send(uEmbed);
}

module.exports.help = {
  name: "userstats"
}



