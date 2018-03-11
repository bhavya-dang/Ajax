const superagent = require('superagent');
const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {
  
  let {body} = await superagent
  .get(`http://random.cat/meow`);

  let catembed = new Discord.RichEmbed()
  .setDescription('Cat:cat:')
  .setColor('#9ed0ed')
  .setImage(body.file);
  
   message.channel.send(catembed);
}

module.exports.help = {
  name: "cat"
}

