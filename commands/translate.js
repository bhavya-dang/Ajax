const translate = require('google-translate-api');
const Discord = require('discord.js');
module.exports.run = async(bot, message, args) => {

let toTrans = message.content.split(' ').slice(1);
let language;

language = toTrans[toTrans.length - 2] === 'to' ? toTrans.slice(toTrans.length - 2, toTrans.length)[1].trim() : undefined;
if (!language) {
    return message.reply(`Please supply valid agruments.\n**Example** \`t!translate [text] to [language]\``);
}
let finalToTrans = toTrans.slice(toTrans.length - toTrans.length, toTrans.length - 2).join(' ');
translate(finalToTrans, {to: language}).then(res => {
        message.channel.send({embed: {
            color: 3447003,
            author: {
              name: 'Logan\'s translator',
              icon_url: client.user.avatarURL
            },
            fields: [{
                name: "Translator",
                value: `**From:** ${res.from.language.iso}\n\`\`\`${finalToTrans}\`\`\`\n**To: **${language}\n\`\`\`${res.text}\`\`\``
              }
            ],
            timestamp: new Date(),
            
          }
        });
}).catch(err => {
    message.channel.send({
        embed: {
            description: '❌ We could not find the supplied language.',
            color: 0xE8642B
        }
    });
}
