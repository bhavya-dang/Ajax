const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
message.delete();
  
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("<:tickNo:432418492667396097> | You don't have `MANAGE_MEMBERS` permissions.");
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Couldn't find user.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.channel.send("<:tickNo:432418492667396097> | Can't mute them!");
  let muterole = message.guild.roles.find(`name`, "Muted");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  

let reason = args.join(" ").slice(22)
  await(tomute.addRole(muterole.id));
  let Embed = new Discord.RichEmbed()
  .setTitle("Mute")
  .setColor("#fc6400")
  .addField("User", tomute)
  .addField("Moderator", `${message.author}`)
  .addField("Reason", reason)
  .setTimestamp();
 message.channel.send("<:tickYes:432418492889694210> **| That user has been muted.**")
let channel= message.guild.channels.find(`name`, 'mod-log')
if(!channel) return message.channel.send("<:tickNo:432418492667396097> **| Please create a mod-log channel!")
  channel.send(Embed)
  }

module.exports.help = {
  name: "mute"
}
