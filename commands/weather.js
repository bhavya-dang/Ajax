const Discord = require("discord.js");
const weather = require('weather-js')
module.exports.run = async (bot, message, args) => {

weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
  
if(result.length === 0){
message.channel.send("**Please provide a valid location.**")
return;
}

  var current = result[0].current;
  var location = result[0].location;
	if (err) message.channel.send(err);
    let embed = new Discord.RichEmbed()
    .setDescription(`**${current.skytext}**`)
    .setAuthor(`Weather for ${current.observationpoint}`)
    .setThumbnail(current.imageUrl)
    .setColor(0x00AE86)
    .addField('Timezone', `UTC${location.timezone}, true`)
    .addField('Degree Type', location.degreetype, true)
    .addField('Temperature', `${current.temperature} Degrees`, true)
    .addField('Feels Like', `${current.feelslike} Degrees`, true)
    .addField('Winds', current.winddisplay, true)
    .addField('Humidity', `${current.humidity}%`, true)
    message.channel.send(embed)
});
  

}

module.exports.help = {
  name: "weather"
}
