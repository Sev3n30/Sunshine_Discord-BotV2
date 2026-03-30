const { EmbedBuilder } = require("@discordjs/builders")

const embed = new EmbedBuilder()
    .setTitle("---Lista de comandos---")
    .setColor(0xFF8C00)
    .setDescription("Lista dos prefix commands e dos slash commands\n" + "No caso os slash commands são irrelevantes, mas tá ai ¯_(ツ)_/¯")
    .setFields(
        { name: 'comandos com prefixo (!) :', value: "...", inline: false},
        { name: '\u200B', value: '\u200B' },
		{ name: '!nick', value: 'Muda seu nick', inline: true },
		{ name: '!sorte/!horoscopo', value: 'testa sua sorte com cartas de tarot', inline: true },
		{ name: '!soma', value: 'soma 2 números', inline: true },
		{ name: '\u200B', value: '\u200B' },
		{ name: '!ola', value: 'O Qin te diz um olá', inline: true },
		{ name: '!Nyx', value: 'Mostra o meu projeto principal (ainda em desenvolvimento)', inline: true },
		{ name: '!moeda', value: 'joga uma moeda que pode dar cara ou coroa', inline: true },
		{ name: '\u200B', value: '\u200B' },
		{ name: '!colecao', value: 'mostra sua colecao de cartas e seu nivel de cosmos (ainda em desenvolvimento)', inline: true },
		{ name: '!dado', value: 'esse comando ainda não está pronto, mas vai ser bem divertido', inline: true },
		{ name: '\u200B', value: '\u200B' },
        { name: 'comandos slash, vulgo (/):', value: "...", inline: false},
        { name: '\u200B', value: '\u200B' },
		{ name: 'lofi', value: 'playlist de lofi', inline: true },
		{ name: 'playlist', value: 'playlist aleatória ae', inline: true },
		{ name: 'nick', value: 'muda seu nick no servidor', inline: true },
        { name: '\u200B', value: '\u200B' },
		{ name: 'clear', value: 'limpa até 100 mensagens por vez em uma guild', inline: true },
		{ name: 'documentacoes', value: 'mostra as documentações de certas linguagens', inline: true },
		{ name: 'git', value: 'faz alguma coisa ae', inline: true },
    )
    .setFooter({text: "ainda vai ter mais... eu acho"})

module.exports = {
    name: "comandos",

    async execute(message){
        await message.reply({embeds: [embed]})
    }
}