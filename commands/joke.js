const request = require('superagent');
const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
  const { body } = await request
        .get('http://icanhazdadjoke.com/')
        .set('Accept', 'application/json');
        let jEmbed = new Discord.RichEmbed()
        .setTitle("Joke")
        .setDescription(body.joke)
        .setColor("#cdf785");
        message.channel.send(jEmbed);
    }
module.exports.help = {
  name: "joke"
}