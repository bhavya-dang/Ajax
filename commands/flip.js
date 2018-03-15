const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
  const number = Math.floor(Math.random() * 2) + 1;
        if (number === 1) {
        const hEmbed = new Discord.RichEmbed()
          .setTitle('**Coinflip result:**')
          .setImage('https://i.imgur.com/EzqKNjh.png')
          .setColor(0xD4AF37)
          return message.channel.send({ hEmbed });
        } else {
          const embed = new Discord.RichEmbed()
            .setTitle('**Coinflip result:**')
            .setImage('https://i.imgur.com/G3REour.png')
            .setColor(0xD4AF37)
            return message.channel.send({ embed });
        }
}

module.exports.help = {
  name: "flip"
}
