const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("<:tickNo:432418492667396097> **| You don't have `ADMINISTRATOR` perms.**");
  if(!args[0]) return message.channel.send("Please specify something!")

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });

  let sEmbed = new Discord.RichEmbed()
  .setColor("#FF9900")
  .setTitle("Prefix Customization")
  .setThumbnail(bot.user.displayAvatarURL)
  .setColor("RANDOM")
  .addField(`Set to`, `\`${args[0]}\``);

  message.channel.send(sEmbed);

}

module.exports.help = {
  name: "prefix"
}