const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let embed = new Discord.RichEmbed()
  .setTitle("Reload")
  .setDescription("Sorry, the `reload` command can only be executed by the Developer.")
  .setColor("#cdf785");
  if(message.author.id !== '414111663076147201') return message.channel.send(embed);
  
  let reloadembed = new Discord.RichEmbed()
  .setTitle("Reloading...")
  .setColor("#42f453")
  .setDescription("All file loaded! All cache released!")
  message.channel.send(reloadembed);

}

module.exports.help = {
  name: "reload"
}




