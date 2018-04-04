const Discord = require("discord.js");
const urban = require("urban");
module.exports.run = async (bot, message, args) => {


  urban.random().first(json => {
    let uEmbed = new Discord.RichEmbed()
    .setTitle(json.word)
    .setDescription(json.definition || "None")
    .addField("Upvotes :arrow_up_small: ", json.thumbs_up, true)
    .addField("Downvotes :arrow_down_small: ", json.thumbs_down, true)
    .setAuthor(`Author: ${json.author}`);
    message.channel.send(uEmbed);
  });
}

module.exports.help = {
  name: "randomdefine"
}
