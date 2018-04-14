const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
message.delete();
  //!tempmute @user 1s/m/h/d
  if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("You don't have the authority to do so.");
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Couldn't find user.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't mute them!");
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
  //end of create role

let reason = args.join(" ").slice(22)
  await(tomute.addRole(muterole.id));
  let Embed = new Discord.RichEmbed()
  .setTitle("Mute")
  .setColor("#fc6400")
  .addField("User", tomute)
  .addField("Moderator", `${message.author}`)
  .addField("Reason", reason)
  
let channel= message.guild.channels.find(`name`, 'mod-log')
if(!channel) return message.channel.send("Please create a mod-log channel!")
  channel.send(Embed)
  }

module.exports.help = {
  name: "mute"
}
