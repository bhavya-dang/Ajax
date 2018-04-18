const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
message.delete();
  
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("you don't have `MANAGE_MEMBERS` permissions..");
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Couldn't find user.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't mute them!");
  let muterole = message.guild.roles.find(`name`, "Muted");
  
  if(!muterole) return message.channel.send("**That role does not exist.** Please create a role named `Muted`.")
  

  await(tomute.removeRole(muterole.id));
  let reason = args.join(" ").slice(22)
    let Embed = new Discord.RichEmbed()
  .setTitle("Un-Mute")
  .setColor("#fc6400")
  .addField("User", tomute)
  .addField("Moderator", `${message.author}`)
  .addField("Reason", reason ? reason : "None");
let channel= message.guild.channels.find(`name`, 'mod-log')
if(!channel) return message.channel.send("Please create a mod-log channel!")
  channel.send(Embed)

}

module.exports.help = {
  name: "unmute"
}
