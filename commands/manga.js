const Discord = require("discord.js");
const request = require("request");

module.exports.run = async (bot, message, args) => {
if(message.channel.type !== "text") return;
  if(message.author.bot) return;
  var tag = args.join('+');
  var error54 = args.slice(0).join(' ');
  if (!tag || !error54) return message.channel.send(`To search for manga, you must do: \`!manga <Search>\``)
    request(`https://myanimelist.net/api/manga/search.xml?q=${tag}`, function (error, response, body) {
      if (error!=null) {
        message.channel.send(`<:nooo:429572038974242827> | Unable to find anything for **${error54}**`);
      }else {
        const parseString = require('xml2js').parseString;
        parseString(body, function (err, result) {
            const decode = require('he').decode;
            var anime = result.manga.entry[0];
            message.channel.send({embed:new Discord.RichEmbed()
              .setAuthor(`MyAnimeList`,`https://myanimelist.cdn-dena.com/img/sp/icon/apple-touch-icon-256.png`)
              .setTitle(anime.title[0] + ` - Manga Search Result`)
              .setURL(`https://myanimelist.net/anime/${anime.id[0]}`)
              .setImage(anime.image[0])
              .addField(`»Synopsis`, decode(anime.synopsis[0].replace(/<[^>]*>/g, ''), false).split('\n')[0])
              .addField(`»Type`,`${anime.type[0]}`,false)
              .addField(`»Chapters`,`${anime.chapters[0]!='' ? anime.chapters[0] : '­'}`,true)
              //.addField(`External Link:`,`${anime.id[0]!='' ? `[MyAnimeList](https://myanimelist.net/anime/${anime.id[0]})` : '­'}`,true)
              .addField(`»Score`,`${anime.score[0]!='' ? anime.score[0] : '­'}`,true)
              .addField(`»Status`,`${anime.status[0]}`,true)
              .addField(`»Volumes`,`${anime.volumes[0]!='' ? anime.volumes[0] : '­'}`,true)
              .addField(`»Start Date`, anime.start_date[0], true)
              .addField(`»End Date`, anime.end_date[0], true)
              .setColor(`${message.guild.me.displayHexColor!=='#000000' ? message.guild.me.displayHexColor : 0xffffff}`)
        });
      })}
    }).auth(process.env.MAL_NAME, process.env.MAL_PASS);
}

module.exports.help = {
  name: "manga"
}
