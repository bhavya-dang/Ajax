const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const ms = require('ms');
module.exports.run = async (bot, message, args) => {
  const status = {
  online: "<:online:435059612052357120> Online",
  idle: "<:idle:435059611779989525> Idle",
  dnd: "<:dnd:435059612039905311> Do Not Disturb",
  offline: "<:offline:435059612048162816> Offline/Invisible",
  stream: "<:streaming:435059611939373057> Streaming" 
};
  
  let role = message.member.roles.map(r => `${r.name}`)
  
  let uEmbed = new Discord.RichEmbed()
  .setDescription("**User Information**")
  .setColor("#e0d318")
  .setThumbnail(message.author.displayAvatarURL)
  .addField("**Userame**", message.member.displayName, true)
  .addField("**Discriminator**", message.author.discriminator, true)
  .addField("**ID**", message.author.id, true)
  .addField("**Bot**", `${message.author.bot ? "Yes" : "No"}`, true)
  .addField("**Role**", `${role}`, true)
  .addField("**Status**",`${status[message.member.presence.status]}`)
  .addField("**Roles**", `${message.member.roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "No Roles"}`, true)
  .addField("**Playing**", `${message.member.presence.game ? `${message.member.presence.game.name}` : "Not playing anything."}`)
  .addField("**Acc. Created At**", `${moment.utc(message.author.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")} (${ms(Date.now()- message.author.createdAt, {long: true})})`)
  .addField("**Joined At**", `${moment.utc(message.member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")} (${ms(Date.now()- message.member.joinedAt, {long: true})})`);

  message.channel.send(uEmbed);
}

module.exports.help = {
  name: "userstats"
}



