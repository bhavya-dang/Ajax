const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let commandEmbed = new Discord.RichEmbed()
  .setTitle("Commands")
  .setColor("#c5f4a6")
  .setFooter("The bot will send the !kick, !ban and !report embeds in the #reports channel")
  .addField("**!hi**", "Say hello!")
  .addField("**!ping**", "Pong the author.")
  .addField("**!test**", "Test if the bot is online.")
  .addField("**!kick**", "**Usage:** !kick **<USER>** reason")
  .addField("**!gitbot**", "Send the member my bot github page.")
  .addField("**!bulkDelete**", "Delete the no. of messages specified.")
  .addField("**!ban**", "**Usage:** !ban **<USER>** reason")
  .addField("**!botinfo**", "Send the member Bot Information.")
  .addField("**!serverinfo**", "Send the member Server Information.")
  .addField("**!tempmute**", "**Usage:** !tempmute <USER> time.")
  .addField("**!report**", "**Usage:** !report **<USER>** reason")
  .addField("**!doggo**", "Send a random Dog image.")
  .addField("**!docs**", "Send the member discord.js docs.");
   message.channel.send(commandEmbed);
}

module.exports.help = {
  name: "commands"
}
