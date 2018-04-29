const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bUser = args[0]
    if(!bUser) return message.channel.send("Can't find user!");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("<:tickNo:432418492667396097> **| You don't have `BAN_MEMBERS` permissons.**");

  message.channel.send("<:tickYes:432418492889694210> **| That member has been un-banned.**").then(msg => msg.delete({timeout: 20000}));
  message.guild.unban(bUser)
}

module.exports.help = {
  name:"unban"
}
