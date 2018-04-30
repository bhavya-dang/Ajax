const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  let defineduser = message.mentions.users.first();
  let user = message.author
  message.delete();
  if(!args[1]){return message.reply("**Please specify a reason to poke.**")}
  if (!args[0]) {return message.reply(`**Please specify a user you want to poke.**`)}
  else{             
  let reason = args.join(" ").slice(22);    
  let Embed = new Discord.RichEmbed()
   .setTitle('Poke 👉')
   .addField('You just got poked.', `By: ${user}`, true)
   .addField('Reason', reason, true)
   .setColor(0xD4AF37)
    defineduser.send(Embed)
    message.channel.send("<:tickYes:432418492889694210> **| That member has been poked.**")
                  }
}

module.exports.help = {
    name: "poke"
}