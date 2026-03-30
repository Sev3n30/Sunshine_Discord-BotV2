const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("teste do bot!"),

    async execute(interaction) {
        await interaction.reply({content: "pong"})
    }
}