const {EmbedBuilder} = require ("discord.js")

const {carregarColecoes, salvarColecoes} = require("../../data/colecoes")
const usos = new Map()

let colecoes = carregarColecoes()

function sortearRaridade(){
    const numero = Math.random()*100
    if (numero < 50) return "comum"
    if (numero < 80) return "rara"
    if (numero < 95) return "epica"
    return "lendaria"
}

function obterCor(raridade){
    switch (raridade){
        case "comum": return 0x808080
        case "rara": return 0x3498db
        case "epica": return 0x9b59b6
        case "lendaria": return 0xf1c40f
    }
}

function calcularXp(raridade){
    switch(raridade){
        case "comum": return 1
        case "rara": return 3
        case "epica": return 5
        case "lendaria": return 10
    }
}

const niveis = [
    {nivel: 1, nome: "Alquimista", xp:10},
    {nivel: 2, nome: "Mago", xp:25},
    {nivel: 3, nome: "Arcano", xp:50},
    {nivel:4, nome: "Lenda Viva", xp:100}
]

const cartas = [
    // 🔹 LENDÁRIAS (3)
    { nome: "O Sol", mensagem: "Uma fase extremamente iluminada começa agora.", raridade: "lendaria", emoji: "🌞" },
    { nome: "A Estrela", mensagem: "Um desejo antigo está prestes a se realizar.", raridade: "lendaria", emoji: "⭐" },
    { nome: "A Morte", mensagem: "Uma transformação profunda mudará seu destino.", raridade: "lendaria", emoji: "💀" },

    // 🔸 ÉPICAS (5)
    { nome: "Os Enamorados", mensagem: "Uma conexão intensa marcará seu caminho.", raridade: "epica", emoji: "💞" },
    { nome: "O Mago", mensagem: "Você descobrirá um talento oculto muito em breve.", raridade: "epica", emoji: "🪄" },
    { nome: "A Roda da Fortuna", mensagem: "O destino gira ao seu favor inesperadamente.", raridade: "epica", emoji: "🎡" },
    { nome: "O Imperador", mensagem: "Você assumirá controle de uma situação importante.", raridade: "epica", emoji: "👑" },
    { nome: "A Justiça", mensagem: "Algo que parecia injusto será equilibrado.", raridade: "epica", emoji: "⚖" },

    // 🔹 RARAS (7)
    { nome: "O Carro", mensagem: "Vitória através da determinação.", raridade: "rara", emoji: "🏇" },
    { nome: "A Força", mensagem: "Sua paciência será recompensada.", raridade: "rara", emoji: "🦁" },
    { nome: "O Eremita", mensagem: "Um momento de reflexão trará respostas.", raridade: "rara", emoji: "🕯" },
    { nome: "O Enforcado", mensagem: "Você verá algo sob uma nova perspectiva.", raridade: "rara", emoji: "🔄" },
    { nome: "A Sacerdotisa", mensagem: "Confie mais na sua intuição.", raridade: "rara", emoji: "🌙" },
    { nome: "A Imperatriz", mensagem: "Crescimento emocional e criatividade.", raridade: "rara", emoji: "🌸" },
    { nome: "O Imperador", mensagem: "Disciplina será essencial hoje.", raridade: "rara", emoji: "🏛" },

    // ⚪ COMUNS (15)
    { nome: "O Tolo", mensagem: "Novos começos surgem em seu horizonte.", raridade: "comum", emoji: "🎒" },
    { nome: "O Tolo", mensagem: "Arrisque-se mais hoje, algo bom pode acontecer.", raridade: "comum", emoji: "🎒" },
    { nome: "O Mago", mensagem: "Use suas habilidades com sabedoria.", raridade: "comum", emoji: "🪄" },
    { nome: "Os Enamorados", mensagem: "Boas energias no campo emocional.", raridade: "comum", emoji: "💞" },
    { nome: "A Lua", mensagem: "Nem tudo é o que parece.", raridade: "comum", emoji: "🌙" },
    { nome: "A Lua", mensagem: "Escute seus sentimentos antes de agir.", raridade: "comum", emoji: "🌙" },
    { nome: "A Justiça", mensagem: "Pequenos ajustes trarão equilíbrio.", raridade: "comum", emoji: "⚖" },
    { nome: "O Carro", mensagem: "Continue avançando, mesmo devagar.", raridade: "comum", emoji: "🏇" },
    { nome: "A Imperatriz", mensagem: "Um momento leve e produtivo se aproxima.", raridade: "comum", emoji: "🌸" },
    { nome: "O Eremita", mensagem: "Um tempo sozinho pode ser necessário.", raridade: "comum", emoji: "🕯" },
    { nome: "A Força", mensagem: "Controle suas emoções hoje.", raridade: "comum", emoji: "🦁" },
    { nome: "O Enforcado", mensagem: "Espere antes de tomar decisões.", raridade: "comum", emoji: "🔄" },
    { nome: "A Sacerdotisa", mensagem: "Observe mais, fale menos.", raridade: "comum", emoji: "🌙" },
    { nome: "A Roda da Fortuna", mensagem: "Mudanças pequenas estão a caminho.", raridade: "comum", emoji: "🎡" },
    { nome: "A Morte", mensagem: "Algo pequeno chega ao fim para algo novo começar.", raridade: "comum", emoji: "💀" }
]

module.exports = {
    name: "sorte",
    aliases: ["horoscopo", "bungas"],

    async execute(message){
        const userId = message.author.id
        const hoje = new Date().toISOString().split("T")[0]

        if (usos.has(userId) && usos.get(userId) == hoje){
            return message.reply("🔮 Você já consultou as cartas hoje. Volte amanhã.")
        }

        usos.set(userId, hoje)

        const raridade = sortearRaridade()
        const cartasDaRaridade = cartas.filter(c => c.raridade == raridade)
        const carta = cartasDaRaridade[Math.floor(Math.random() * cartasDaRaridade.length)] 
        
        if (!colecoes[userId]){
            colecoes[userId] = {
                cartas: [],
                xp: 0,
                nivel: 0
            }
        }
        const xpGanho = calcularXp(raridade)

        colecoes[userId].cartas.push(carta)
        colecoes[userId].xp += xpGanho

        let nivelAtual = colecoes[userId].nivel
        let novoNivel = nivelAtual

        for(const n of niveis){
            if (colecoes[userId].xp >= n.xp){
                novoNivel = n.nivel
            }
        }
        if(novoNivel >nivelAtual){
            colecoes[userId].nivel = novoNivel

            message.channel.send(
                `🌟 ${message.author}, você evoluiu para **${niveis[novoNivel - 1].nome}**!`
            )
        }

        salvarColecoes(colecoes)

        const embed = new EmbedBuilder()
            .setTitle(`🔮 Carta Tirada: ${carta.nome}`)
            .setDescription(`${carta.emoji} ${carta.mensagem}`)
            .setFooter({ text: `Raridade: ${raridade.toUpperCase()}` })
            .setColor(obterCor(raridade))
            .setTimestamp();

        message.reply({embeds: [embed]})
    }
}