const superagent = require('superagent');
const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {
  
  
  
  
  let numArray = args.map(n => parseInt(n));
  let diff = numArray.reduce( (p, c) => p-c);
  let sembed = new Discord.RichEmbed()
  .setTitle("Answer")
  .setDescription(`${diff}`);
   message.channel.send(sembed).catch(console.error)
}

module.exports.help = {
  name: "sub"
}

