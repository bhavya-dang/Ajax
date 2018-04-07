const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {
  
   message.guild.channels.get('421853697027473410').createInvite().then(invite =>  
    message.channel.send(invite.url));
}

module.exports.help = {
  name: "invite"
}

