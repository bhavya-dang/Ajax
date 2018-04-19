const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Can't find user!");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("<:tickNo:432418492667396097> **| You don't have `MANAGE_MEMBERS` permissons.**");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("<:tickNo:432418492667396097> **| That person can't be kicked!**");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("Ban")
    .setColor("#bc0000")
    .addField("User", `${bUser}`)
    .addField("Moderator", `${message.author.tag}`)
    .addField("Time", message.createdAt.toLocaleString())
    .addField("Reason", bReason);

    let incidentchannel = message.guild.channels.find(`name`, "mod-log");
    if(!incidentchannel) return message.channel.send("<:tickNo:432418492667396097> **| Can't find `mod-log` channel.**");
    let embed = new Discord.RichEmbed()
    .setTitle("BAN")
    .addField("Banned In", message.guild)
    .addField("Moderator", `${message.author.tag}`)
    .addField("Reason", bReason)
    bUser.send(embed);
  message.channel.send("<:tickYes:432418492889694210> **| That member has been banned.**")
  bUser.ban(bReason)
  incidentchannel.send(banEmbed);
}

module.exports.help = {
  name:"ban"
}
