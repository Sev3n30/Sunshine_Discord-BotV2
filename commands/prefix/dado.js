module.exports = {
    name: "dado",

    async execute(message){
        
        const input = message.content.slice(1).toLowerCase()
        const separar = input.includes("#")
        const limpo = input.replace("#", "")

        if(!limpo.includes("d")){
            return message.reply("Formato Invalido, use !ndx ou !n#dx")
        }

        const [quantidade, lados] = limpo.split("d").map(Number)

        if (!quantidade || !lados) return message.reply("Valores Invalidos")

        let resultados = []

        for (let i = 0; i < quantidade; i++){
            resultados.push(Math.floor(Math.random()* lados)+ 1)
        }

        if (separar){
            return message.reply(`Resultados: \n ${resultados.join("\n")}`)
        } else {
            const soma = resultados.reduce((a, b) => a+b, 0)
            return message.reply(`Resultado total: **${soma}**`)
        }
    }
}