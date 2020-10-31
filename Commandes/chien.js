const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {

    let reddit = [
        "memefr"
    ]

    let subreddit = reddit[Math.floor(Math.random() * reddit.length - 1)];

    message.channel.startTyping();

    randomPuppy(subreddit).then(async url => {
            await message.channel.send({
                files: [{
                    attachment: url,
                    name: 'memefr.png'
                }]
            }).then(() => message.channel.stopTyping());
    }).catch(err => console.error(err));

};

module.exports.help = {
    name: 'chien',
    aliases: ['memes']
}