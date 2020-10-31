const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send(`Vous n'avez pas la permission !`);

    if(message.mentions.users.size === 0) {
        return message.channel.send(`Vous devez mentionner un utilisateur !`);
    }

    let ban = message.guild.member(message.mentions.users.first());

    if(!ban) {
        return message.channel.send(`Je n'ai pas trouvé l'utilisateur !`);
    }

    if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.channel.send(`Le bot n'a pas la permission !`);

    ban.ban().then(member => {

        message.channel.send(`${member.user.username} est ban ! Ban effectué par le cactus ${message.author.username}`);
    });
};

module.exports.help = {
    name: "ban"
}; 
