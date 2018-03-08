const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let rUser = message.guild.member(message.mentions.users.first()  || message.guild.members.get(args[0]));
  if(!rUser) return message.channel.send("Couldn't find user.");
  let reason = args.join(" ").slice(22);

  let reportEmbed = new Discord.RichEmbed()
  .setDescription ("Reports")
  .setColor("#f24646")
  .addField("Reported User", `${rUser}`)
  .addField("Reported By",`${message.author}`)
  .addField("Time", message.createdAt)
  .addField("Reason", reason);
  let reportschannel = message.guild.channels.find(`name`, "reports");
  message.delete().catch(O_o=>{});
  reportschannel.send(reportEmbed);

}

module.exports.help = {
  name: "report"
}
