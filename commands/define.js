const Discord = require("discord.js");
const urban = require("urban");
module.exports.run = async (bot, message, args) => {
  let str = args.join(" ");
  if(args.length < 1) return message.reply("Please specify something to define.");

  urban(str).first(json => {
   if(!json) return message.reply("Sorry. No results found.")
  
    
    let uEmbed = new Discord.RichEmbed()
    .setTitle(json.word)
    .setDescription(json.definition || "None")
    .addField("Example", json.example)
    .addField("Upvotes :arrow_up_small: ", json.thumbs_up, true)
    .addField("Downvotes :arrow_down_small: ", json.thumbs_down, true)
    .setAuthor(`Author: ${json.author}`);
    message.channel.send(uEmbed);
  });
}

module.exports.help = {
  name: "define"
}
