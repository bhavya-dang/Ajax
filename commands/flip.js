const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
  const result = Math.floor((Math.random() * 2) + 1);
    	if (result == 1) {
    		message.channel.send(":white_check_mark: | The coin landed on heads");
      }
    	 if (result == 2) {
    		message.channel.send(":white_check_mark: | The coin landed on tails");
    	}
}

module.exports.help = {
  name: "flip"
}
