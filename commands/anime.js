const Discord = require('discord.js');
const https = require('http');
const parseXML = require('xml2js').parseString;
const request = require('request');

module.exports.run = (bot, message, args) => {
  
  var tag = args.join('+');
  var error54 = args.slice(0).join(' ');
  if (!tag || !error54) return message.channel.send(`:pencil: | Can you tell me what anime to search?`)
    request(`https://myanimelist.net/api/anime/search.xml?q=${tag}`, function (error, response, body) {
      if (error!=null) {
        message.channel.send(`Unable to find anything for **${error54}**`);
      }else {
        const parseString = require('xml2js').parseString;
        parseString(body, function (err, result) {
            const decode = require('he').decode;
            var anime = result.anime.entry[0];
            message.channel.send({embed:new Discord.RichEmbed()
              .setAuthor(`MyAnimeList`,`https://myanimelist.cdn-dena.com/img/sp/icon/apple-touch-icon-256.png`)
              .setTitle(anime.title[0] + ` - Anime Search Result`)
              .setURL(`https://myanimelist.net/anime/${anime.id[0]}`)
              .setImage(anime.image[0])
              .addField(`»Synopsis`, decode(anime.synopsis[0].replace(/<[^>]*>/g, ''), false).split('\n')[0])
              .addField(`»English Title`,`${anime.english[0]!='' ? anime.english[0] : '­'}`,false)
              .addField(`»Episodes`,`${anime.episodes[0]!='' ? anime.episodes[0] : '­'}`,true)
              .addField(`External Link:`,`${anime.id[0]!='' ? `[MyAnimeList](https://myanimelist.net/anime/${anime.id[0]})` : '­'}`,true)
              .addField(`»Score`,`${anime.score[0]!='' ? anime.score[0] : '­'}`,true)
              .addField(`»Status`,`${anime.status[0]}`,true)
              .addField(`»Type`,`${anime.type[0]}`,true)
              .addField(`»Start Date`, anime.start_date[0], true)
              .addField(`»End Date`, anime.end_date[0], true)
              .setColor(`${message.guild.me.displayHexColor!=='#000000' ? message.guild.me.displayHexColor : 0xffffff}`)
        });
      })}
    }).auth('CCsP', 'BonkRunner124210');
}
module.exports.help = {
	name: "anime"
}
