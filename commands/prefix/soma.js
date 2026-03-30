module.exports = {
    name: "soma",

    async execute(message, args){
        
        if(args.length < 2){
            return message.reply("Digite pelo menos 2 números")
        }

        let resultado = 0

        for(let i = 0; i < args.length; i++){
            const numero = Number(args[i])

            if(isNaN(numero)){
            return message.reply("Digite apenas números")
            }
            resultado += numero
        }

        return message.reply(`A soma totalizou: ${resultado}`) 
    }
}