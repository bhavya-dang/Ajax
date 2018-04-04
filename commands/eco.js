const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    let embed = new Discord.RichEmbed()
    .setTitle("Economy")
    .setDescription("There are currently 4 commands in this category.")
    .addField("`t!daily`", "Earn daily money from the daily store!")
    .addField("`t!balance`", "Check your balance in your bank account.")
    .addField("`t!flip`", "Flip the coin and gamble money!")
    .addField("`t!pay`", "Pay money to a user.")
    message.channel.send(embed);
}
module.exports.help = {
    name: "eco"
}