const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let icon = bot.user.displayAvatarURL;
  let hEmbed = new Discord.RichEmbed()
  .setAuthor("46 Total Commands", bot.user.displayAvatarURL)
  .setColor("#c5f4a6")
  .setDescription("It\'s prefix is `t.` Type `t.commands` for more info.")
  .addField("**Core Commands**", "`help`|`invite`|`betatester`")
  .addField("**Moderation Commands**", "`ban`|`kick`|`warn`|`report`")
  .addField("**Utility Commands**", "`serverstats`|`stats`|`userstats`|`tempmute`|`weather`|`ping`|`say`|`docs`\n`clear`|`purge`|`reload`|`add`|`subtract`|`setgame`|`define`|`icon`|\n`shorten`|`find`|`auto`|`svs`|`google`|`rdefine`")
  .addField("**User Commands**", "`coins`|`level`|`warnlvl`|`pay`|`avatar`")
  .addField("**Fun Commands**","`8ball`|`poll`|`roll`|`test`|`doggo`|`kitten`|`flip`|`slots`|`joke`|`ascii`|\n`poke`|`get`", true)
  .addField("**Server:**", "https://discord.gg/YnBCs4D", true)
  .addField("**Website:**", "https://tritaxgamer.github.io/tritax/", true)
  .setThumbnail(icon);
  message.channel.send(":white_check_mark: | **I have sent you all my commands!**")
  message.author.send(hEmbed);
  
       
}

module.exports.help = {
  name: "help"
}
