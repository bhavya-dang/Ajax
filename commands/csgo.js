
const Discord = require('discord.js');
const cheerio = require('cheerio');
var request = require('request');

module.exports.run = async (bot, message, args) => {
  
try{
  function getStatData(location, message , $){

  var selector = $('.stats-stat .value').eq(location).text();

  var stat_array = $.parseHTML(selector);

  var stat = 0;

  if(stat_array == null || stat_array.lengh == 0){
    message.channel.send("Invalid User");
    return " ";
  }else{
    stat = stat_array[0].data;
  }

  return stat;
}

     var UR_L = "http://csgo.tracker.network/profile/" + args[0];

        if(!args[0]) return message.channel.send("Please Enter a valid STEAMID64 or username");
        

        request(UR_L, function(err, resp, body){

            $ = cheerio.load(body);

            var WIN = getStatData(1, message, $);
            var HS = getStatData(4, message, $);
            var MONEY = getStatData(5, message, $);
            var SCORE = getStatData(6, message, $);
            var KILLS = getStatData(7, message, $);
            var DEATHS = getStatData(8, message, $);
            var MVP = getStatData(9, message, $);
            var BS = getStatData(13, message, $);
            var BD = getStatData(14, message, $);
            var HR = getStatData(15, message, $);

            var STAT = new Discord.RichEmbed()

            .setTitle("CS:GO STATS")
            .setColor("#45b72c")           
            .addField("Win", `${WIN}%`, true)
            .addField("Total Hostages Saved", HR, true)
            .addField("Total Money", MONEY, true)
            .addField("Total Score", SCORE, true)
            .addField("Total Kills", KILLS, true)
            .addField("Total Deaths", DEATHS, true)
            .addField("MVP", MVP, true)
            .addField("Total Bombs Set", BS, true)
            .addField("Total Bombs Defused", BD, true)
            .addField("Total Headshots", HS);
            message.channel.send(STAT);
           })
}catch(e){
message.channel.send("Unable to find any data on user.")
}
}
        
        
        
module.exports.help = {
    name: "csgo"
}