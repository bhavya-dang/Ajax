const Discord = require("discord.js");
const snekfetch = require('snekfetch');
const {RichEmbed} = require('discord.js');

module.exports.run = async (client, message, args) => {

    if(args.length === 0) return message.channel.send("Must have something to define!");
    let word = args.join(" ");
                    const { body } = await snekfetch.get('https://api.urbandictionary.com/v0/define').query({ term: word });
                    const trim = (str, max) => (str.length > max) ? `${str.slice(0, max - 3)}...` : str;

                    if (body.result_type === 'no_results') {
                        const embed = new Discord.RichEmbed()
                        .setColor("#FF0000")
                        .setDescription(`No results found for **${word}** :octagonal_sign: `)
                        message.channel.send(embed)
                    } else {
                        try{
                        const [answer] = body.list;
                        if(answer.example === "") {
                            answer.example = "None";
                        }

const embed = new Discord.RichEmbed()
    .setColor("#5ed0ed")
    .setTitle(word)
    .addField('Definition:', trim(answer.definition, 1024))
    .addField('Example:', trim(answer.example, 1024))
    .addField('Upvotes', `:arrow_up: ${answer.thumbs_up}`, true)
    .addField('Downvotes', `:arrow_down: ${answer.thumbs_down}`, true)
    .addField("Tags:", ` ${body.tags.join(', ')}`);

message.channel.send(embed);
                        } catch(e) {
                            message.channel.send("There was an error, please choose a different word!");
                        }
                    }
}

module.exports.help = {
    name: "define"
}