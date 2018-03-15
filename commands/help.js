const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let icon = bot.user.displayAvatarURL;
  let hEmbed = new Discord.RichEmbed()
  .setAuthor("36 Total Commands", bot.user.displayAvatarURL)
  .setColor("#c5f4a6")
  .setDescription("It\'s prefix is `t.` Type `t.help.<commandname>` for command specific info.")
  .addField("**Core Commands**", "`help`|`invite`|`betatester`")
  .addField("**Admininistrative Commands**", "`addrole`|`removerole`|`prefix`")
  .addField("**Moderation Commands**", "`ban`|`kick`|`warn`|`report`")
  .addField("**Utility Commands**", "`serverstats`|`botstats`|`userstats`|`tempmute`|`ping`|`say`|`docs`|`coins`|\n`clear`|`reload`|`add`|`subtract`|`setgame`|`define`")
  .addField("**User Commands**", "`coins`|`level`|`warnlvl`|`pay`|`avatar`")
  .addField("**Fun Commands**","`8ball`|`poll`|`roll`|`test`|`doggo`|`kitten`|`flip`")
  .addField("For Support visit:"," https://discord.gg/YnBCs4D")
  .setThumbnail(icon);
  message.author.send(hEmbed);
  
       
}

module.exports.help = {
  name: "help"
}
