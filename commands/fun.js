const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
    .setTitle("Fun")
    .setTimestamp()
    .setDescription("There are currently 7 commands in this category.")
    .addField("`t!8ball`", "Ask the magical 8ball a question.")
    .addField("`t!avatar`", "Get a member's avatar.")
    .addField("`t!doggo`", "Get a random dog image.")
    .addField("`t!cat`", "Get random cat image.")
    .addField("`t!meme`", "Get a random meme.")
    .addField("`t!icon`", "Get your server's icon.")
    .addField("`t!joke`", "Get a random joke.")
    .addField("`t!roll`", "Roll a number between 1-100")
    .addField("`t!flip`", "Flip a coin and gamble money.")
    .addField("`t!poke`", "Poke a user.")
    .addField("`t!slots`", "Roll the slots!")
    .addField("`t!test`", "Test if the the bot is online :information_desk_person: ")
    message.channel.send(embed)
}
module.exports.help = {
    name: "mod"
}