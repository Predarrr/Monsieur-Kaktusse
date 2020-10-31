const Discord = require('discord.js')

module.exports.run = async(client, message, args) => {

    var member = message.mentions.members.first() || message.member;
    var embed = new Discord.RichEmbed()
    .setImage(member.user.avatarURL)
    .setColor("#0ea3ad")

    message.channel.send(embed);

}
module.exports.help = {
    name: "avatar"
}