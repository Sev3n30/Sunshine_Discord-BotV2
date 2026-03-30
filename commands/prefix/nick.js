module.exports = {
    name: "nick",

    async execute(message, args){

        if(!message.guild){
            return message.reply("você não tem permissão para usar esse comando")
        }

        const newNick = args.join(" ")

        if(!newNick){
            return message.reply("você precisa informar um novo nick")
        }

        if(newNick.length > 32){
            return message.reply("o nick não pode ter mais que 32 caracteres")
        }

        try{
            await message.member.setNickname(newNick)

            return message.reply(`seu nick foi alterado para **${newNick}**`)
        }catch(error){
            console.error(error)
            message.reply("não foi possível alterar o nickname")
        }
    }
}