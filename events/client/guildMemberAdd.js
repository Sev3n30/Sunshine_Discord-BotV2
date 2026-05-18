const { EmbedBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require("discord.js");

module.exports = {
    name: "guildMemberAdd",

    async execute(member){

        const canalId = "1466891268293656647"

        const cargoMembroId = "1467244262092439734"

        const cargos ={
            sobrevivente: "1503451296907264180",
            aprendiz: "1467321343375577119",
            cientista: "1467261931789484112"
        }

        const canal = member.guild.channels.cache.get(canalId);

        if(!canal) return;

        await member.roles.add(cargoMembroId);

        const frases =[
            `"Interessante... uma nova peça entrou na mesa."`,
            `"Bem-vindo ao espetáculo. Tente não desaparecer cedo demais."`,
            `"Toda pessoa carrega algo imprevisível dentro de si... talvez você também."`,
            `"O jogo começou no momento em que você entrou aqui."`,
            `"Algumas pessoas entram como espectadores... outras mudam completamente a partida."`,
            `"Espero que saiba lidar com escolhas. Este lugar gosta de testá-las."`,
            `"Curioso... sinto que você pode tornar este servidor mais interessante."`,
            `"Nem todo sorriso significa segurança. Ainda assim... seja bem-vindo."`,
            `"Toda grande história começa com alguém atravessando a porta errada."`,
            `"Você parece ter potencial... ou talvez apenas sorte. Descobriremos."`,
            `"O caos adora rostos novos."`,
            `"Sinta-se à vontade. As regras daqui são mais flexíveis do que deveriam."`,
            `"Um novo jogador apareceu... espero que saiba apostar bem."`,
            `"Até o acaso parece gostar de reunir pessoas estranhas neste lugar."`,
            `"A noite ficou um pouco mais interessante agora."`
        ]

        const frase = frases[Math.floor(Math.random() * frases.length)];

        const avatarURL = member.user.displayAvatarURL({ dynamic: true, size: 1024})

        const menu =
        new ActionRowBuilder().addComponents(
            new StringSelectMenuBuilder()
                .setCustomId(`classe_${member.id}`)
                .setPlaceholder("Escolha sua classe")
                .addOptions([
                    {
                        label: "Sobrevivente",
                        description: "entrou no Bunker como cidadão, sem informações",
                        value: "sobrevivente"
                    },
                    {
                        label: "Aprendiz",
                        description: "deseja se tornar um futuro programador, essa é a área de testes",
                        value: "aprendiz"
                    },
                    {
                        label: "Cientista",
                        description: "entre o céu e a terra, eu sou o DEV mais honrado",
                        value: "cientista"
                    }
                ])
        );

        const embed = new EmbedBuilder()
            .setAuthor({name: "Honored_one", iconURL:"https://i.pinimg.com/originals/01/25/80/0125808b9009555628a519e9daee87cf.jpg", url: "https://github.com/Sev3n30/portfolio"})
            .setColor(0xf1c40f)
            .setTitle("☀️ Um novo jogador entrou no espetáculo.")
            .setDescription(`Bem-Vindo ${member}. \n\n${frase}\n\n -- Sunshine`)
            .setThumbnail(avatarURL)
            .setFooter({text: `Jogador número ${member.guild.memberCount}`})
            .setTimestamp()

        const mensagem = await canal.send({embeds: [embed], components: [menu]})

        const collector = mensagem.createMessageComponentCollector({ time: 60000 })

        collector.on("collect", async interaction => {
            if (interaction.user.id !== member.id){
                return interaction.reply({
                    content: "Apenas o novo membro pode escolher",
                    flags: 64
                })
            }

            const escolha = interaction.values[0];

            const cargoEscolhido = member.guild.roles.cache.get(cargos[escolha]);

            if(!cargoEscolhido) return

            await member.roles.remove(Object.values(cargos))
            await member.roles.add(cargoEscolhido);

            menu.components[0].setDisabled(true);

            await mensagem.edit({
                components: [menu]
            })

            await interaction.reply({
                content: `Você escolheu o caminho de **${cargoEscolhido.name}**`,
                flags: 64
            })
        })
    }
}