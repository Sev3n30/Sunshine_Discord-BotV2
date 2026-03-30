const { REST, Routes } = require('discord.js')
const fs = require('node:fs')
const path = require('node:path')
require('dotenv').config()

const { TOKEN, CLIENT_ID, GUILD_ID } = process.env

if (!TOKEN || !CLIENT_ID || !GUILD_ID){
    console.error('variaveis de ambiente ausentes!!')
    process.exit(1)
}

const commandsPath = path.join(__dirname, "commands", "slash")
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"))

if (!fs.existsSync(commandsPath)){
    console.error(`Pasta commands/slash não encontrada`)
    process.exit(1)
}

const commands = []

for (const file of commandFiles){
    const filePath = path.join(commandsPath, file)
    const command = require(filePath)

    if (command.data && command.execute){
        commands.push(command.data.toJSON())
        console.log(`Carregado: ${command.data.name}`)
    }else{
        console.warn(`Ignorado (estrutura inválida): ${file}`)
    }
}

//instancia REST
const rest = new REST({version: "10"}).setToken(TOKEN);

//Deploy
(async () => {
    try{
        console.log(`resetando ${commands.length} comandos`)

        //PUT
        const data = await rest.put(
            Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
            {body: commands}
        )
            console.log("comandos registrados com sucesso!")
    }
    catch (error){
        console.error(error)
    }
})()