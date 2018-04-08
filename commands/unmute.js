const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

  
  if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("You don't have the authority to do so.");
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Couldn't find user.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't mute them!");
  let muterole = message.guild.roles.find(`name`, "Muted");
  
  if(!muterole) return message.channel.send("**That role does not exist.**")
  

  await(tomute.removeRole(muterole.id));
  message.reply(`<@${tomute.id}> has been unmuted.`);

  

//end of module
}

module.exports.help = {
  name: "unmute"
}
