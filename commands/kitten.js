const Discord = require("discord.js");
const superagent = require('superagent');

module.exports.run = async (bot, message, args) => {

  let kittenembed = new Discord.RichEmbed()
  .setDescription('Kitten:cat:')
  .setColor('#9ed0ed')
  .setImage('http://www.placekitten.com/' + (Math.floor(Math.random() * 600) + 200) + '/' + (Math.floor(Math.random() * 600) + 200));

   message.channel.send(kittenembed);
}



module.exports.help = {
  name: "kitten"
}
