const { carregarColecoes } = require("../../data/colecoes")
const { EmbedBuilder } = require("discord.js");

const niveis = [
    { nivel: 1, nome: "Alquimista", xp: 10 },
    { nivel: 2, nome: "Mago", xp: 25 },
    { nivel: 3, nome: "Arcano", xp: 50 },
    { nivel: 4, nome: "Lenda Viva", xp: 100 }
]

module.exports = {
    name: "colecao",

    async execute(message){
        const userId = message.author.id
        const colecoes = carregarColecoes()

        if(!colecoes[userId] || !colecoes[userId].cartas || colecoes[userId].cartas.length === 0){
            return message.reply ("Você ainda não possui cartas!\nTente a sorte com !sorte ou !horoscopo")
        }
        const dadosUsuario = colecoes[userId]
        const nivel = dadosUsuario.nivel
        const xp = dadosUsuario.xp
        const cartasUsuario = dadosUsuario.cartas

        const nivelInfo = niveis.find(n => n.nivel ==nivel)

        const lista = cartasUsuario.map(carta =>
            `${carta.emoji} **${carta.nome}** (${carta.raridade})`
        ).join("\n")

        const embed = new EmbedBuilder()
            .setTitle(`Coleção de ${message.author.username}`)
            .setDescription(lista)
            .setColor(0x2ecc71)
            .setFooter({text: `o ${nivelInfo?.nome || "iniciante"} ${message.author.username} possui ${xp} estrelas em seu cosmos!!`})

        message.reply({embeds: [embed]})
    }
}