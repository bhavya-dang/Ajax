const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!kUser) return message.channel.send("Can't find user!");
  if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("**You don't have the permissions to do so!**")
  let kReason = args.join(" ").slice(22);
  if(kUser.hasPermission("KICK_MEMBERS")) return message.channel.send("That person can't be kicked!");

  let kickEmbed = new Discord.MessageEmbed()
  .setDescription("Kick")
  .setColor("#f45642")
  .addField("Kicked User", `${kUser}`)
  .addField("Kicked By", `${message.author}`)
  .addField("Kicked In", message.channel)
  .addField("Tiime", message.createdAt)
  .addField("Reason", kReason);

  let kickChannel = message.guild.channels.find("name", "mod-log");
  if(!kickChannel) return message.channel.send("Can't find channel.");

  message.guild.member(kUser).kick(kReason);
  kickChannel.send(kickEmbed);
}

module.exports.help = {
  name: "kick"
}
