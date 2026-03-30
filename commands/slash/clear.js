const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("clear")
        .setDescription("limpa as mensagens do canal")
        .addIntegerOption(option =>
            option.setName("quantidade")
                .setDescription("quantidade de mensagens")
                .setRequired(false)
        )
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages),

    async execute(interaction){
        let quantidade = interaction.options.getInteger("quantidade")

        if(quantidade == null){
            quantidade = 100
        }

        if(quantidade < 1 || quantidade > 100){
            return interaction.reply({content: "escolha entre 1 e 100", ephemeral: true})
        }

        const deletadas = await interaction.channel.bulkDelete(quantidade,true)

        deletadas.size  

        await interaction.reply({content: `${deletadas.size} mensagens removidas`, ephemeral: true})
    }
}