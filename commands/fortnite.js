const Discord = require("discord.js");
const Fortnite = require("fortnite");
const ft = new Fortnite(process.env.FT_TOKEN);

module.exports.run = async (bot,message,args) => {

  let username = args[1];
  let platform = args[0];
  
  let colours = ['7E7E7E',
                 '15BD68',
                 '0FB0E4',
                 '7A26A2',
                 'E4863C']
  
  let result = Math.floor((Math.random() * colours.length));
                 

  let data = ft.user(username, platform).then(data => {

    let stats = data.lifetimeStats;
    let kills = stats.find(s => s.stat == 'kills');
    let wins = stats.find(s => s.stat == 'wins');
    let kd = stats.find(s => s.stat == 'kd');
    let mPlayed = stats.find(s => s.stat == 'matchesPlayed');
    let tPlayed = stats.find(s => s.stat == 'timePlayed');
    let asTime = stats.find(s => s.stat == 'avgSurvivalTime');  
    let rank = stats.find(s => s.stat == 'rank');

    let embed = new Discord.RichEmbed()
    .setColor(colours[result]) // You can change the color, or anything in this file to what you want it to look like
    .setTitle(`Statistics for ${data.username}`) // This will set the title of the emebd as the username
    .setURL(data.url)
    .addField(`Top Placements:`, `\n*Top 3:* \`${data.lifetimeStats[0].value}\`\n*Top 5:* \`${data.lifetimeStats[1].value}\`\n*Top 6:* \`${data.lifetimeStats[3].value}\`\n*Top 12:* \`${data.lifetimeStats[4].value}\`\n*Top 25:* \`${data.lifetimeStats[5].value}\``) // We can have other information look different, in fields or in the description.
    .setThumbnail('https://i.imgur.com/vx8juC1.png') // Fortnite Logo
    .addField('Total Score:', `\`${data.lifetimeStats[6].value}\``, true)
    .addField('Matches Played:', `\`${data.lifetimeStats[7].value}\``, true)
    .addField('Wins:', `\`${data.lifetimeStats[8].value}\``, true)
    .addField('Win Percentage:', `\`${data.lifetimeStats[9].value}\``, true)
    .addField('Kills:', `\`${data.lifetimeStats[10].value}\``, true)
    .addField('K/D Ratio:', `\`${data.lifetimeStats[11].value}\``, true)
    .addField('Kills Per Minute:', `\`${data.lifetimeStats[12].value}\``, true)
    .addField('Epic Games:', '[Fortnite](https://www.epicgames.com/fortnite/en-US/buy-now/battle-royale)', true)
    .setFooter('Requested by ' + message.author.username, message.author.displayAvatarURL)
    
    message.channel.send(embed)
    

    
    
  }).catch(e => {
    console.log(e);
    var notfound = new Discord.RichEmbed()
    .setTitle("Please give a vaild user!")
    .setColor("RANDOM")
    .setThumbnail("https://i.imgur.com/vx8juC1.png")
    .setDescription("User not found in the Database!\n Example `t!fortnite <platform ><username>`")
    message.channel.send(notfound);
  });

}

module.exports.help = {
  name: "fortnite"
}