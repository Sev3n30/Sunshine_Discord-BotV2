const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require("discord.js")

function createMenu(){
    return new ActionRowBuilder().addComponents(
            new StringSelectMenuBuilder()
            .setCustomId("select")
            .setPlaceholder("selecione uma opção")
            .addOptions({
                label: "javascript",
                description: "veja a documentação de javascript",
                value: "javascript"
            },
            {   label: "python",
                description: "veja a documentação de python",
                value: "python"
            },
            {   label: "C#",
                description: "veja a documentação de C#",
                value: "csharp"
            },
            {   label: "discord.js",
                description: "veja a documentação de discord.js",
                value: "discordjs"
            })
        )}

const docsLinks = {
    javascript: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
    python: "https://docs.python.org/pt-br/3/",
    csharp: "https://learn.microsoft.com/pt-br/dotnet/csharp/",
    discordjs: "https://discord.js.org/docs/packages/discord.js/14.25.1",
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName("docs")
        .setDescription("Acesse a documentação da tecnologia que quiser"),

    async execute(interaction) {
        await interaction.reply({
            content: "Selecione uma das techs abaixo:", components: [createMenu()]
        })
    },
    async select(interaction) { 
        const value = interaction.values[0]
        const link = docsLinks[value]

        if (!link){
            return interaction.reply({
                content: "opção invalida",
                flags: MessageFlags.Ephemeral
            })
        }

        await interaction.reply({
            content: `Documentação: ${link}`,
            flags: 64
        })
    }
}
