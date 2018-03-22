  const shorten = require('isgd');
  const Discord = require('discord.js');
  module.exports.run = async(bot, message, args) => {
    if(!args[0]) return message.reply("You have to give a URL to shorten!");
    
    if(!args[1]){
    shorten.shorten(args[0]), function(res) {
    if(res.startsWith('Error:')) return message.channel.send("**Please enter a valid <URL>**");
       message.channel.send(`**${res}**`);
    }
    
} else {
    shorten.custom(args[0], args[1], function(res) {
      if(res.startsWith('Error:')) message.channel.send("**Please enter a valid <URL>**");
       message.channel.send(`**${res}**`);
    
    })
    
    
    }
  }
  module.exports.help = {
    name: "shorten"
    }