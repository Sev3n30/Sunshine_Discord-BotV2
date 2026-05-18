const {gerarHumor, obterHumor} = require("../scheduler/mood/sunshineMood");

const moodMenssages = require("../scheduler/mood/moodMessages.json");

const {gerarPeriodo, obterPeriodo} = require("../scheduler/mood/sunshinePeriodo")

module.exports = (client) => {
    const canalId = "1504317984112382082"

    function obterHora(periodo){
        switch(periodo){
            case "manha": return 7
            case "tarde": return 13
            case "noite": return 20
        }
    }

    async function enviarMensagem() {
        const canal = client.channels.cache.get(canalId)

        if(!canal) return;

        const humor = obterHumor()

        const periodo = obterPeriodo();

        const fraseMood = moodMenssages[humor][periodo]

        const fraseAtual = fraseMood[Math.floor(Math.random() * fraseMood.length)] 

        console.log(humor)
        console.log(periodo)
        console.log(fraseAtual)
        console.log(fraseMood)

        canal.send(`${fraseAtual}`)
    }

    function agendarMensagem(){

        const periodo = obterPeriodo()

        const horaEnvio = obterHora(periodo)

        const agora = new Date()

        const envio = new Date()

        envio.setHours(horaEnvio, 0, 0, 0)

        if(envio <= agora){
            envio.setDate(envio.getDate() + 1)
        }

        const tempoRestante = envio.getTime() - agora.getTime()

        console.log(`mensagem agendada para ${horaEnvio}:00`)

        setTimeout(async () => {
            await enviarMensagem()
        }, tempoRestante)
    }

    function prepararDia(){
        const humor = gerarHumor()

        const periodo = gerarPeriodo()

        console.log("novo humor: ", humor)
        console.log("novo periodo: ", periodo)

        agendarMensagem()
    }

    function ciclo(){
        const agora = new Date()

        const amanha = new Date()

        amanha.setHours(24, 0, 0, 0)

        const tempoRestante = amanha.getTime() - agora.getTime()

        setTimeout(async () => {
            prepararDia()
            ciclo()
        }, tempoRestante)
    }

    // function testarMensagem(quantidade = 10){
    //     for(let i=0; i<quantidade; i++){
    //         gerarHumor()
    //         gerarPeriodo()

    //         const humor = obterHumor()
    //         const periodo = obterPeriodo()

    //         const fraseMood = moodMenssages[humor][periodo]

    //         const fraseAtual = fraseMood[Math.floor(Math.random() * fraseMood.length)]

    //         console.log("=======")
    //         console.log(`humor: ${humor}`)
    //         console.log(`periodo: ${periodo}`)
    //         console.log(`frase: ${fraseAtual}`)
    //     }
    // }

    // testarMensagem(20)

    prepararDia()
    ciclo()
}