const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
  let docsEmbed = new Discord.RichEmbed()
  .setTitle("Discord.Js Documentation")
  .setColor("#4298f4")
  .setThumbnail("https://discord.js.org/static/logo-square.png")
  .setDescription("You can find the latest Discord.js documentation below:arrow_down:")
  .addField("Discord.Js", "https://discordjs.readthedocs.io/en/latest/")
  .addField("Github", "https://github.com/discordjs/discord.js")
  .setFooter(`If still getting an error, feel free to ask the devs in #discord-bot-help😁`);
 message.channel.send(docsEmbed);
}

module.exports.help = {
  name: "docs"
}
