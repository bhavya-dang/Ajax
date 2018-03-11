const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!bUser) return message.channel.send("Can't find user!");
  let bReason = args.join(" ").slice(22);
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("No can do pal!");
  if(bUser.hasPermission("ADMINISTRATOR")) return message.channel.send("That person can't be kicked!");

  let banEmbed = new Discord.RichEmbed()
  .setDescription("Ban")
  .setColor("#f45642")
  .addField("Banned User", `${bUser} `)
  .addField("Banned By", `<@${message.author.id}>`)
  .addField("Banned In", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", bReason);

  let reportschannel = message.guild.channels.find("name", "mod-log");
  if(!reportschannel) return message.channel.send("Can't find reports channel.");

  message.guild.member(bUser).ban(bReason);
  reportschannel.send(banEmbed);
}

module.exports.help = {
  name: "ban"
}
