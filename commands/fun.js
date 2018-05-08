const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
    .setTitle("Fun")
    .setTimestamp()
    .setDescription("There are currently 9 commands in this category.")
    .addField("`" + message.prefix +"8ball`", "Ask the magical 8ball a question.")
    .addField("`" + message.prefix +"avatar`", "Get a member's avatar.")
    .addField("`" + message.prefix +"doggo`", "Get a random dog image.")
    .addField("`" + message.prefix +"cat`", "Get random cat image.")
    .addField("`" + message.prefix +"meme`", "Get a random meme.")
    .addField("`" + message.prefix +"joke`", "Get a random joke.")
    .addField("`" + message.prefix +"roll`", "Roll a number between 1-100")
    .addField("`" + message.prefix +"poke`", "Poke a user.")
    .addField("`" + message.prefix +"slots`", "Roll the slots!")
    message.channel.send(embed)
}
module.exports.help = {
    name: "mod"
}