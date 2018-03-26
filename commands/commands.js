const Discord = require('discord.js');
module.exports.run = async(bot, message, args) =>{

let cEmbed = new Discord.RichEmbed()
.setTitle("Commands Info")
.addField("8ball", "Randomly answers a question.")
.addField("Add", "Perform simple addition.")
.addField("Ascii", "Creates ascii test.")
.addField("Auto", "Auto complete a username of a member of the server.")
.addField("Avatar", "Give the avatar of a mentioned memberor the author.")
.addField("Ban", "Ban a member.")
.addField("Betatester", "Give the username of the developer of the bot.")
.addField("Clear", "Clear specified aount of messages.")
.addField("Coins", "Give the user their available coins/money.")
.addField("Define", "Define a given term using the UrbanDictionary module/api.")
.addField("Docs", "Give the user latest discord.js official and github docs.")
.addField("Doggo", "Give the user random dog images.")
.addField("Eval", "Execute a JavaScript string.")
.addField("Find", "Find usernames with provided term.")
.addField("Flip", "Flip a coin.")
.addField("Google", "Search a defined term.")
.addField("Icon", "Give the user server icon.")
.addField("Invite", "Give user my invite url.")
.addField("Info", "Give user an introduction.")
.addField("Joke", "Give user random jokes.")
.addField("Kick", "Kick a menntioned user with a provided reason.")
.addField("Level", "Give user info about their level.")
.addField("Pay", "User can pay coins to a mentioned user.")
.addField("Ping", "Send user api latency and discord heartbeat.")
.setColor('YEELLOW');
message.author.send(cEmbed);
let cembed = new Discord.RichEmbed()
.addField("Poke", "Poke a mentioned user.")
.addField("Poll", "Start a poll.")
.addField("Purge", "Purges a mentioned user's messages.")
.addField("Reload", "Release the cache from files.")
.addField("Restart", "Restart the bot.")
.addField("Report", "Report a mentioned user.")
.addField("Rdefine", "Randomly send a definition.")
.addField("Roll", "Roll a number between 1-100.")
.addField("S-invite", "Generate a server invite.")
.addField("Say", "Make the bot say something.")
.addField("Serverstats", "Give server statistics.")
.addField("Setgame", "Set bot game.")
.addField("Shorten", "Shorten a given url with a given term.")
.addField("Slots", "Roll the slots.")
.addField("Stats", "Give bot's statistics.")
.addField("Subtract", "Perform simple subtraction.")
.addField("Svs", "Tell the user how may servers the bot is on.")
.addField("Tempmute", "Mute a mentioned user temporary for a provided period of time.(s/m/h/d).")
.addField("Test", "Simple test command that I can't explain.")
.addField("Userstats", "Provide user with their statistics.")
.addField("Warn", "Warn a mentioned user.")
.addField("Warnlvl", "Provide user with their warn level.(Total no. of warnings they have)")
.addField("Weather", "Provide weather for a mentioned location.")
.setTimestamp()
.setColor('YEELLOW');
message.author.send(cembed);

}
module.exports.help = {
	name: "commands"
}