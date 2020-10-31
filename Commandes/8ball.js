const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

//!8ball <question fjdksf>
if(!args[2]) return message.reply("S'il te plaît, donne une question complète !");
let replies = ["Oui.", "Non.", "Je ne sais pas.", "Probablement.", "Probablement pas."];

let result = Math.floor((Math.random() * replies.length));
let question = args.join(" ");

let ballembed = new Discord.RichEmbed()
.setAuthor(message.author.tag)
.setColor ("0xff0000")
.addField("Question", question)
.addField("Réponse", replies[result])

message.channel.send(ballembed)


}

module.exports.help = {
    name: "8ball"
}
