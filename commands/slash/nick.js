const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("nick")
        .setDescription("muda o seu nick no servidor")
        .addStringOption(option =>
            option  
                .setName("novo_nick")
                .setDescription("novo nickname")
                .setRequired(true)
        ),

    async execute(interaction) {

        if(!interaction.guild){
            return interaction.reply({
                content: "Esse comando só pode ser usado em servidores.",
                flags: 64
            })
        }

        const newNick = interaction.options.getString("novo_nick")
        const member = interaction.member

        try {
            await member.setNickname(newNick)

            await interaction.reply({
                content: `Nick de ${member.user.tag} alterado para **${newNick}**`
            });

        }catch(error){
            console.error(error);

            await interaction.reply({
                content: "não foi possivel alterar o nick",
                flags:64
            })
        }
    }
}