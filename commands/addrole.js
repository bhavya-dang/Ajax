const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("You dont have `MANAGE_MEMBERS` permissions.");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("That user cannot be found!");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Pleae specify a role!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Couldn't find that role.");

  if(rMember.roles.has(gRole.id)) return message.reply("They already have that role.");
  await(rMember.addRole(gRole.id));

  try{
    await rMember.send(`Congrats, you have been given the role `\`${gRole.name}\` in `\`${message.guild.name}`\``)
    message.channel.send(`:tickYes: | ${rMember} has been given the ${gRole.name} role.`)
  }catch(e){
    console.log(e.stack);
    message.channel.send(`Congrats to <@${rMember.id}>, they have been given the role ${gRole.name}. We tried to DM them, but their DMs are locked.`)
  }
}

module.exports.help = {
  name: "addrole"
}
