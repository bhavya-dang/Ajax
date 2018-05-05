const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let embed = new Discord.RichEmbed()
    .setTitle("Moderation")
    .setDescription("There are currently 9 commands in this category. These commands need a mod-log channel.")
    .addField("`" + message.prefix + "ban`", "Ban a member.")
    .addField("`" + message.prefix + "unban`", "Un-ban a member. [Requires id]")
    .addField("`" + message.prefix +"clear`", "Clear messages")
    .addField("`" + message.prefix +"kick`", "Kick a member.")
    .addField("`" + message.prefix +"tempmute`", "Temporarily mute a member.")
    .addField("`" + message.prefix +"unmute`", "Unmute a member.")
    .addField("`" + message.prefix +"msent`", "Check messages sent so far.")
    .addField("`" + message.prefix +"purge`", "Clears a member's messages.")
    .addField("`" + message.prefix +"warn`", "Warn a member.")
    .addField("`" + message.prefix +"warnlvl`", "Check a user's warn level.")
    .setFooter("Require mod-log channel.")

message.channel.send(embed);
}

module.exports.help = {
  name: "mod"
}
