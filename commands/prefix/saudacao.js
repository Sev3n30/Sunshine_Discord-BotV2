module.exports = {
    name: "ola",

    async execute(message){

        if (message.author.bot) return;

        const respostas =[
            `🎩 "Ah... ${message.author.displayName}. Que agradável coincidência encontrá-lo aqui." — Sunshine`,
            `☀️ "Bom te ver, ${message.author.username}. Espero que esteja pronto para algo interessante hoje." — Sunshine`,
            `🃏 "A vida fica menos entediante quando você aparece, ${message.author.displayName}." — Sunshine`,
            `🎲 "Diga-me, ${message.author.username}... você acredita em sorte ou apenas em probabilidades?" — Sunshine`,
            `✨ "Toda conversa é uma aposta disfarçada. Então... vamos jogar, ${message.author.displayName}?" — Sunshine`,
            `🌌 "Curioso... eu tinha a sensação de que você apareceria hoje, ${message.author.username}." — Sunshine`,
            `🎭 "As pessoas sempre revelam algo interessante quando começam uma conversa." — Sunshine`,
            `☕ "Sente-se, ${message.author.displayName}. O espetáculo do dia acabou de começar." — Sunshine`,
            `🕰️ "Tempo é algo curioso... e você escolheu gastá-lo aqui comigo." — Sunshine`,
            `🎴 "Você parece diferente hoje, ${message.author.username}. Isso torna tudo mais interessante." — Sunshine`,
            `🌠 "Mesmo entre milhares de possibilidades... você acabou vindo parar aqui." — Sunshine`,
            `🎲 "Hmm... acho que hoje será um dia divertido." — Sunshine`,
            `🍬 "A vida fica mais suportável com açúcar, caos e boas companhias." — Sunshine`,
            `🎩 "Bem-vindo novamente, ${message.author.displayName}. Espero que tenha trazido algo imprevisível." — Sunshine`,
            `🌙 "Existem noites em que até o silêncio parece observar." — Sunshine`,
            `🃏 "As melhores histórias começam com encontros aparentemente comuns." — Sunshine`,
            `⚡ "Você já percebeu como pequenas decisões mudam destinos inteiros?" — Sunshine`,
            `🎭 "Relaxe, ${message.author.username}. Hoje eu ainda não pretendo destruir a realidade." — Sunshine`,
            `🌌 "Há algo fascinante nas pessoas que continuam tentando." — Sunshine`,
            `🎲 "O acaso sempre encontra formas interessantes de aproximar pessoas." — Sunshine`,
            `✨ "Você chegou exatamente no momento certo... ou talvez no pior possível." — Sunshine`,
            `☀️ "Sorria um pouco, ${message.author.displayName}. O mundo já é sério demais." — Sunshine`,
            `🎴 "Você já teve a sensação de que está sendo observado pelo universo?" — Sunshine`,
            `🕰️ "Algumas conversas mudam vidas. Outras apenas tornam a noite menos solitária." — Sunshine`,
            `🎩 "Interessante... muito interessante." — Sunshine`
        ]

        const randomIndex = Math.floor(Math.random() * respostas.length)
        const respostaFinal = respostas[randomIndex]

        message.reply(respostaFinal)
    }
}