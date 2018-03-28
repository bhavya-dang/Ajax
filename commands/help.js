const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let icon = bot.user.displayAvatarURL;
  let hEmbed = new Discord.RichEmbed()
  .setAuthor("52 Total Commands", bot.user.displayAvatarURL)
  .setColor("#c5f4a6")
  .setDescription("It\'s prefix is `t.` Type `t.commands` for more info.")
  .addField("**Core Commands**", "`help`|`invite`|`betatester`|`info`")
  .addField("**Moderation Commands**", "`ban`|`kick`|`warn`|`report`|`msent`")
  .addField("**Utility Commands**", "`serverstats`|`stats`|`userstats`|`tempmute`|`weather`|`ping`|`say`|`docs`\n`clear`|`purge`|`reload`|`add`|`subtract`|`setgame`|`define`|`icon`|\n`shorten`|`find`|`auto`|`svs`|`google`|`rdefine`|`npm`")
  .addField("**Developer Commands**", "`eval`|`restart`|`reload`")
  .addField("**User Commands**", "`coins`|`level`|`warnlvl`|`pay`|`avatar`|`announce`")
  .addField("**Fun Commands**","`8ball`|`poll`|`roll`|`test`|`doggo`|`kitten`|`flip`|`slots`|`joke`|`ascii`|\n`poke`|`get`", true)
  .addField("**Server:**", "https://discord.gg/YnBCs4D", true)
  .addField("**Github:**", "https://github.com/TritaxXCoder", true)
  .setThumbnail(icon);
  message.channel.send(":white_check_mark: | **I have sent you all my commands!**")
  message.author.send(hEmbed);
  
       
}

module.exports.help = {
  name: "help"
}
