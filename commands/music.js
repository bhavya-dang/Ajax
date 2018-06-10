const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let embed = new Discord.RichEmbed()
    .setTitle("Music")
    .setDescription("There are currently 8 commands in this category.")
    .addField("`" + message.prefix +"play`", "Play url or search a video on youtube.")
    .addField("`" + message.prefix +"np`", "Shows what is playing right now.")
    .addField("`" + message.prefix +"stop`", "Stop the currently playing song.")
    .addField("`" + message.prefix +"queue`", "Shows the queue.")
    .addField("`" + message.prefix +"skip`", "Skips the currently playing song.")
    .addField("`" + message.prefix +"volume`", "Set the volume of the song.")
    .addField("`" + message.prefix +"resume`", "Resume the paused song.")

message.channel.send(embed);
}

module.exports.help = {
  name: "music"
}
