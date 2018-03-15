const superagent = require('superagent');
const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {
  
  let numArray = args.map(n => parseInt(n));
  let total = numArray.reduce( (p, c) => p+c);
  let tembed = new Discord.RichEmbed()
  .setTitle("Answer")
  .setDescription(`${total}`);
   message.channel.send(tembed).catch(console.error)
}

module.exports.help = {
  name: "add"
}

