const {EmbedBuilder, AttachmentBuilder } = require("discord.js")
const path = require("path")

const file1 = new AttachmentBuilder("C:/Users/tukig/Downloads/Nyxs_olho.png")
const file2 = new AttachmentBuilder("C:/Users/tukig/Downloads/Nyxs_perfil.png")

const embed = new EmbedBuilder()
    .setColor(0xADD8E6)
    .setTitle("🌙 Nynx_")
    .setURL("https://github.com/Sev3n30/portfolio")
    .setImage("attachment://Nyxs_perfil.png") 
    .setAuthor({name:"Nynx", iconURL: "attachment://Nyxs_olho.png", url: "https://github.com/Sev3n30/portfolio"})
    .setDescription("🌌 **Nyxara** é um projeto pessoal criado com o objetivo de explorar o desenvolvimento de bots e inteligência artificial.\n\n" +
        "Estou constantemente evoluindo suas funcionalidades, aprendendo e aprimorando minhas habilidades ao longo do caminho.")
    .addFields(
        {
            name: "🧠 Sobre:",
            value: "Um projeto dinâmico com o foco em aprendizado e uso de IA",
            inline: false
        },
        {
            name: "⚙️ Funcionalidades:",
            value: "• Comandos\n• Sistemas\n• IA",
            inline: true
        },
        {
            name: "🚀 Status:",
            value: "Em desenvolvimento \n algo próximo a 0%😁",
            inline: true
        }
    )
    //.setThumbnail("attachment://Nyxs_olho.png")
    .setFooter({ text: "Desenvolvido por Arashii__"})
    .setTimestamp()

module.exports = {
    name: "nyx",

    async execute(message){
        await message.reply({
            embeds: [embed],
            files: [file1, file2]
        })
    }
}