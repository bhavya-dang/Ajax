const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let icon = bot.user.displayAvatarURL;
  let hEmbed = new Discord.RichEmbed()
  .setAuthor("38 Total Commands", bot.user.displayAvatarURL)
  .setColor("#c5f4a6")
  .setDescription("It\'s prefix is `t.` Type `t.help.<commandname>` for command specific info.")
  .addField("**Core Commands**", "`help`|`invite`|`betatester`")
  .addField("**Moderation Commands**", "`ban`|`kick`|`warn`|`report`")
  .addField("**Utility Commands**", "`serverstats`|`botstats`|`userstats`|`tempmute`|`ping`|`say`|`docs`\n`clear`|`reload`|`add`|`subtract`|`setgame`|`define`|`icon`|`shorten`|`searchusers`")
  .addField("**User Commands**", "`coins`|`level`|`warnlvl`|`pay`|`avatar`")
  .addField("**Fun Commands**","`8ball`|`poll`|`roll`|`test`|`doggo`|`kitten`|`flip`|`slots`|`joke`")
  .addField("For Support visit:"," https://discord.gg/YnBCs4D")
  .setThumbnail(icon);
  message.channel.send(":white_check_mark: | **I have sent you all my commands!**")
  message.author.send(hEmbed);
  
       
}

module.exports.help = {
  name: "help"
}
