const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("playlist")
        .setDescription("Ouça a melhor playlist de estudos"),

    async execute(interaction) {
        await interaction.reply({content: "https://open.spotify.com/playlist/5TUxgTIxzLbLVh7RUf9V8i?si=d79ad3b1a72840b6"})
    }
}