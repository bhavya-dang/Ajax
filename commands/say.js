const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

      const sayMessage = args.join(" ");
      let sembed = new Discord.RichEmbed()
      .setDescription(sayMessage)
      .setColor("RANDOM");
      message.delete().catch();
      message.channel.send(sembed);

}

module.exports.help = {
  name: "say"
}