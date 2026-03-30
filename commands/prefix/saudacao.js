module.exports = {
    name: "ola",

    async execute(message){

        if (message.author.bot) return;

        const respostas =[
            `Olá ${message.author.displayName}, tudo bem por aí? 😄`,
            `Salve ${message.author.username}! Hoje o dia está perfeito para programar! 💻`,
            `E aí ${message.author.displayName}, pronto para dominar o mundo? 🌎`,
            `Fala ${message.author.username}! Bora codar? 🔥`,
            `Olá ${message.author.displayName}! Café já tomou hoje? ☕`,
            `Salve meu amigo ${message.author.displayName}! 😎`,
            `Hey ${message.author.username}! Tudo tranquilo por aí?`,
            `Boa ${message.author.displayName}! Vamos criar algo incrível hoje? 🚀`,
            `Olá ${message.author.username}! Já que está aqui, bora aprender algo novo!`,
            `E aí ${message.author.displayName}! O bug já apareceu hoje? 😂`,
            `Fala dev ${message.author.username}! 🔥`,
            `Saudações ${message.author.displayName}!`,
            `Oláaa ${message.author.username}! 👋`,
            `Grande ${message.author.displayName}!`,
            `Meu caro ${message.author.username}, seja bem-vindo!`,
            `Olá ${message.author.displayName}! Preparado para mais um commit? 💡`,
            `Salve ${message.author.username}! Bora fazer esse bot crescer! 🤖`,
            `E aí ${message.author.displayName}! Debugando a vida hoje?`,
            `Olá ${message.author.username}! O servidor está lindo hoje 😌`,
            `Fala ${message.author.displayName}! Tudo sob controle?`
        ]

        const randomIndex = Math.floor(Math.random() * respostas.length)
        const respostaFinal = respostas[randomIndex]

        message.reply(respostaFinal)
    }
}