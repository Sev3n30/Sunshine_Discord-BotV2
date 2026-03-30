const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("lofi")
        .setDescription("Playlist de lofi"),

    async execute(interaction) {
        await interaction.reply({
            content: "https://open.spotify.com/playlist/37i9dQZF1DWWQRwui0ExPn?si=2d759b7ed6aa43bf"
        })
    }
}