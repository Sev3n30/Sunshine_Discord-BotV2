const {carregarStats, salvarStats} = require("../../systems/stats.js")

module.exports = {
    name: "voiceStateUpdate",

    async execute(oldState, newState, client){
        const member = newState.member

        if(member.user.bot) return

        const userId = member.id
        const stats = carregarStats()

        if(!stats[userId]){
            stats[userId] = {
                mensagens: 0,
                dadosRolados: 0,
                moedasJogadas: 0,
                tempoCall: 0,
                cartasRaras: 0,
                desafiosGanhos: 0,
                callStart: null
            }
        }

        if(!oldState.channel && newState.channel){

            console.log(`${member.user.username} entrou na call`)

            stats[userId].callStart = Date.now()

            salvarStats(stats)

            return
        }
        if(oldState.channel && !newState.channel){

            console.log(`${member.user.username} saiu da call`)

            const inicio = stats[userId].callStart

            if(inicio){
                const tempoNaCall = Date.now() - inicio

                stats[userId].tempoCall += tempoNaCall

                stats[userId].callStart = null

                salvarStats(stats)

                console.log(`Tempo adicionado: ${tempoNaCall}ms`)
            }
        }
    }
}