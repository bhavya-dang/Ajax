const Canvas = require('canvas-constructor');
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {


 
async function createCanvas() {
 
 let some =   new Canvas(300, 400)
        .setColor('#FFAE23')
        .setTextFont('28px Impact')
        .setTextAlign('center')
        .addText('Kitten!', 150, 370)
        .toBuffer();
message.channel.send(some)
}
}
module.exports.help = {
    name: "canvas"
}