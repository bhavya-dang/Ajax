const Fortnite = require('fortnite');
const stats = new Fortnite(process.env.FT_token); // This will be your API key from the description in replace of 'process.env.TRN'
const Discord = require('discord.js');
 
module.exports.run = (bot, message, args) => {
 
  // Now, we have 2 variables we need input for, first the platform, then the username.
  let platform;
  let username;
 
  if (!['pc','xbl','psn'].includes(args[0])) return message.channel.send('**Please Include the platform: `t!fortnite [ pc | xbl | psn ] <username>`**');
  // We also need the username, which would be args[1] & on...
  if (!args[1]) return message.channel.send('**Please Include the username: `t!fortnite [ pc | xbl | psn ] <username>`**');
 
  // Assign Values
  platform = args.shift(); // This will shift the first item in the args array into platform.
  username = args.join(' '); // Now, we can combine args to form the username.
 
  // Fetch Data
  stats.getInfo(username, platform).then( data => { // Data will now hold the response, the full JSON tree can be found in the description.
   console.log(data)
    // Now, since we have all the correct data, we can output an error message, or the user stats.
    // We can form an embed to respond in chat, make sure you require Discord to form these.
    const embed = new Discord.RichEmbed() // On the stable branch, this will be new Discord.RichEmbed()
      .setColor(0xffffff) // You can change the color, or anything in this file to what you want it to look like
      .setTitle(`Stats for ${data.username}`) // This will set the title of the emebd as the username
      .setDescription(`**Top Placement**\n\n**Top 3s:** *${data.lifetimeStats[0].value}*\n**Top 5s:** *${data.lifetimeStats[1].value}*\n**Top 6s:** *${data.lifetimeStats[3].value}*\n**Top 12s:** *${data.lifetimeStats[4].value}*\n**Top 25s:** *${data.lifetimeStats[5].value}*`, true) // We can have other information look different, in fields or in the description.
      .setThumbnail('https://vignette.wikia.nocookie.net/fortnite/images/d/d8/Icon_Founders_Badge.png') // Fortnite Logo
      .addField('Total Score', data.lifetimeStats[6].value, true)
      .addField('Matches Played', data.lifetimeStats[7].value, true)
      .addField('Wins', data.lifetimeStats[8].value, true)
      .addField('Win Percentage', data.lifetimeStats[9].value, true)
      .addField('Kills', data.lifetimeStats[10].value, true)
      .addField('K/D Ratio', data.lifetimeStats[11].value, true)
      .addField('Kills Per Minute', data.lifetimeStats[12].value, true)
      .addField('Time Played', data.lifetimeStats[13].value, true)
      .addField('Average Survival Time', data.lifetimeStats[14].value, true)
   
    // Now, we can test this command! Remeber, you can modify the output to what you think looks best.
    message.channel.send(embed)
     
  // All `data` can be found in the description.
   
  })
  .catch(error => { // We can start with the error, an error will return if the username is not found.
   
    message.channel.send('Username not found!');
 
  })
 
}
module.exports.help = {
  name: "fortnite"
}