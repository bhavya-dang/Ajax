const google = require('google');
const Discord = require('discord.js');
var profanities = require('profanities');
 

module.exports.run = (bot, message, args) => {
    
    let searchTerm = args[0];
    if (!searchTerm) return message.channel.send("**Please specify something to search.**");
    if(searchTerm.toLowerCase() === profanities.length && !message.channel.nsfw) return message.channel.send("This is not a NSFW channel");
    
    google.resultsPerPage = 25;
    google(searchTerm, function (err, res) {
        if (err) return message.channel.send("**No Results found!**")
        for (var i = 0; i < res.links.length; ++i) {
            var link = res.links[i];
            if (!link.href) {
                res.next;
            } else {
                let embed = new Discord.RichEmbed()
                    .setColor(`#ffffff`)
                    .setAuthor(`Result for "${searchTerm}"`, `https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2000px-Google_%22G%22_Logo.svg.png`)
                    .setDescription(`**Link**: [${link.title}](${link.href})\n**Description**:\n${link.description ? link.description : "No description found."}`)
                    
                return message.channel.send({
                    embed: embed
                });
            }
        }
    });
}

module.exports.help = {
  name: "google"
}