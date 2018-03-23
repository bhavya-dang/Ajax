const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
module.exports.run = async (bot, message, args) => {
  

  
  let uEmbed = new Discord.RichEmbed()
  .setDescription("**User Information**")
  .setColor("#e0d318")
  .setThumbnail(message.author.displayAvatarURL)
  .addField("**Userame**", `${message.author}`, true)
  .addField("**Discriminator**", message.author.discriminator, true)
  .addField("**ID**", message.author.id, true)
  .addField("**Status**",message.author.presence.status, true)
  .addField("**Playing**", `${message.author.presence.game ? `${message.author.presence.game.name}` : "Not playing anything."}`)
  .addField("**Acc. Created At**", `${moment.utc(message.author.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`)
  .addField("**Joined At**", `${moment.utc(message.member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`);

  message.channel.send(uEmbed);
}

module.exports.help = {
  name: "userstats"
}



