const Discord = require(`discord.js`);
const client = new Discord.Client();

const fs = require(`fs`);

client.login("NzcyMDc1MTAzNzI1OTQ0ODQz.X51Y-Q.mxcFB2YJ7B_PJyqcTbUMLUoqXW0");

client.commands = new Discord.Collection();

fs.readdir("./Commandes/", (error, f) => {
    if(error) console.log(error);

    let commandes = f.filter(f => f.split(".").pop() === "js");
    if(commandes.length <= 0) return console.log("Aucune commande trouvée !");

    commandes.forEach((f) => {

        let commande = require(`./Commandes/${f}`);
        console.log(`${f} commande chargée !`);

        client.commands.set(commande.help.name, commande);
    });
});

fs.readdir("./Events/", (error, f) => {
    if(error) console.log(error);
    console.log(`${f.length} events en chargement`);

    f.forEach(f => {
        const events = require(`./Events/${f}`);
        const event = f.split(".")[0];

        client.on(event, events.bind(null, client));
    });
});

client.on("guildMemberAdd", user => {
    let joinEmbed = new Discord.RichEmbed()
    .setColor("#1ddb3d")
    .setAuthor(user.user.username, user.user.displayAvatarURL)
    .setDescription(":airplane_arriving: :tada: L'avion " + user + " vient d'atterir, bienvenue sur " + user.guild.name + " !")
    .setFooter("Cactus Army | Cactus BOT | Passe un bon moment sur le serveur !")
    user.guild.channels.get("634784012203982848").send(joinEmbed)
});

client.on("guildMemberRemove", user => {
    let leaveEmbed = new Discord.RichEmbed()
    .setColor("#187e0a")
    .setAuthor(user.user.username, user.user.displayAvatarURL)
    .setDescription(":airplane_departure: :cry: L'avion " + user + "vient de partir, à bientôt ! *Ou pas...*")
    .setFooter("Cactus Army | Cactus BOT | Passe un bon moment sur le serveur !")
    user.guild.channels.get("634784012203982848").send(leaveEmbed)
})
