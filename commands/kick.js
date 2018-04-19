const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!kUser) return message.channel.send("Can't find user!");
  if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("<:tickNo:432418492667396097> **| You don't have `KICK_MEMBERS` permissions.**")
  let kReason = args.join(" ").slice(22);
  if(kUser.hasPermission("KICK_MEMBERS")) return message.channel.send("<:tickNo:432418492667396097> **| That person can't be kicked!**");

  let kickEmbed = new Discord.RichEmbed()
  .setDescription("Kick")
  .setColor("#f45642")
  .addField("User", `${kUser}`)
  .addField("Moderator", `${message.author}`)
  .addField("Time", message.createdAt.toLocaleString())
  .addField("Reason", kReason);

  let kickChannel = message.guild.channels.find(`name`, 'mod-log');
  if(!kickChannel) return message.channel.send("<:tickNo:432418492667396097> **| Can't find `mod-log` channel.**");
   let embed = new Discord.RichEmbed()
  .setDescription("Kick")
  .setColor("#f45642")
  .addField("User", `${kUser}`)
  .addField("Moderator", `${message.author}`)
  .addField("Time", message.createdAt.toLocaleString())
  .addField("Reason", kReason);
  kUser.send(embed)
message.channel.send("<:tickYes:432418492889694210> **| That member is kicked.**")
kUser.kick(kReason)
kUser.send(embed);
kickChannel.send(kickEmbed);
}

module.exports.help = {
  name: "kick"
}
