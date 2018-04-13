const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let embed = new Discord.RichEmbed()
    .setTitle("Moderation")
    .setDescription("There are currently 9 commands in this category. These commands need a mod-log channel.")
    .addField("`t!ban`", "Ban a member.")
    .addField("`t!clear`", "Clear messages")
    .addField("`t!kick`", "Kick a member.")
    .addField("`t!tempmute`", "Temporarily mute a member.")
    .addField("`t!unmute`", "Unmute a member.")
    .addField("`t!msent`", "Check messages sent so far.")
    .addField("`t!purge`", "Clears a member's messages.")
    .addField("`t!warn`", "Warn a member.")
    .addField("`t!warnlvl`", "Check a user's warn level.")

message.channel.send(embed);
}

module.exports.help = {
  name: "mod"
}
