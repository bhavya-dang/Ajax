const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let icon = bot.user.displayAvatarURL;
  let hEmbed = new Discord.RichEmbed()
  .setTitle("30 Total Commands", icon)
  .setColor("#c5f4a6")
  .setDescription("Tritax AI\'s Commands","It\'s prefix is `!` Type `!help.<commandname>` for command specific info")
  .addField("**Core Commands**", "`help`|`invite`|`betatester`")
  .addField("**Admininistrative Commands**", "`addrole`|`removerole`|`prefix`")
  .addField("**Moderation Commands**", "`ban`|`kick`|`warn`|`report`")
  .addField("**Utility Commands**", "`serverinfo`|`botinfo`|`tempmute`|`uptime`|`ping`|`say`|`docs`|`coins`")
  .addField("**User Commands**", "`coins`|`level`|`warnlvl`|`pay`")
  .addField("**Fun Commands**","`8ball`|`poll`|`roll`|`test`|`doggo`|`cat`|`kitten`|`flip`")
  .setThumbnail(icon);
   message.channel.send(hEmbed);

}

module.exports.help = {
  name: "help"
}
