const { Events } = require("discord.js");

module.exports = {
    name: Events.InteractionCreate,

    async execute(interaction, client) {

        // SLASH
        if (interaction.isChatInputCommand()) {
            const command = client.slashCommands.get(interaction.commandName);
            if (!command) return;

            await command.execute(interaction);
        }

        // SELECT
        if (interaction.isStringSelectMenu()) {

            if (interaction.customId === "select") {
                const command = client.slashCommands.get("docs");
                if (!command || !command.select) return;

                await command.select(interaction);
            }
        }
    }
};