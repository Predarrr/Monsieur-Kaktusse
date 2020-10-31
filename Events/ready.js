module.exports = async(client) => {

    client.user.setPresence({
        game: {
            name: "protéger ses cactus !"
        }
    })
};