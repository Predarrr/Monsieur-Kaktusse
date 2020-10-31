const Discord = require('discord.js')

module.exports.run = async(client, message, args) => {

    let début = Date.now();
    client.on('message', msg => {
        if (msg.guild && msg.content.startsWith('c!mpall')) {
          let text = msg.content.slice('c!mpall'.length);
          if (!message.guild.member(message.author).hasPermission('BAN_MEMBERS')) { return message.channel.send('Vous n\'avez pas la permission !'); }
          msg.guild.members.forEach(member => {
            if (member.id != client.user.id && !member.user.bot) member.send(text);
          });
        }
      });

};

module.exports.help = {
    name: "mpall"
}