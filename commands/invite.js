const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {
  
   message.channel.send("https://discordapp.com/oauth2/authorize?client_id=421925809532436481&scope=bot&permissions=8");
}

module.exports.help = {
  name: "invite"
}

