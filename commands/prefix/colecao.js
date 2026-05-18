const { carregarColecoes } = require("../../data/colecoes")
const { EmbedBuilder } = require("discord.js");

const niveis = [
    { nivel: 1, nome: "Aprendiz do Caos", xp: 20 },
    { nivel: 2, nome: "Manipulador", xp: 40 },
    { nivel: 3, nome: "Arquiteto", xp: 80 },
    { nivel: 4, nome: "Mestre das Apostas", xp: 100 },
    { nivel: 5, nome: "Observador do Destino", xp: 120 },
    { nivel: 6, nome: "Imperador do Acaso", xp: 160 },
    { nivel: 7, nome: "Entidade da Ruína", xp: 250 },
    { nivel: 8, nome: "The Fool", xp: 500 }
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