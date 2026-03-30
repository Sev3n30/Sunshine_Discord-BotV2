const { EmbedBuilder } = require("discord.js")

module.exports = {
    name: "moeda", 

    async execute(message){
        const resultado = Math.random() < 0.5? "Cara 🪙" : "Coroa 🪙"

        const embed = new EmbedBuilder()
            .setTitle(" Jogando a moeda... ")
            .setDescription(`Resultado: **${resultado}**`)
            .setThumbnail("https://cdn.pixabay.com/animation/2025/06/03/03/30/03-30-33-674_512.gif")
            .setColor(0xffd700)
            .setTimestamp()

        message.reply({embeds: [embed]})
    }
}