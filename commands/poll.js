const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!args[0]) return message.reply("You must have something to vote for!")
    
        message.channel.send(`** ${message.author.username} started a vote! React to my next message to vote on it. **`);
        const pollTopic = await message.channel.send(message.content.slice(6));
        await pollTopic.react(`✅`);
        await pollTopic.react(`⛔`);
        // Create a reaction collector
        const filter = (reaction) => reaction.emoji.name === '✅';
        const collector = pollTopic.createReactionCollector(filter, { time: 15000 });
        collector.on('collect', r => console.log(`Collected ${r.emoji.name}`));
        collector.on('end', collected => console.log(`Collected ${collected.size} items`));
  
        const filter1 = (reaction) => reaction.emoji.name === '⛔';
        const collector1 = pollTopic.createReactionCollector(filter1, { time: 15000 });
        collector1.on('collect', r => console.log(`Collected ${r.emoji.name}`));
        collector1.on('end', collected => console.log(`Collected ${collected.size} items`));
}
module.exports.help = {
  name: "poll"
}


