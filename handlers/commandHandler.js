const fs = require("fs")
const path = require("path")

module.exports = (client) => {

    const commandsPath = path.join(__dirname, "..", "commands")
    const folders = fs.readdirSync(commandsPath)

    for (const folder of folders){
        const folderPath = path.join(commandsPath, folder)
        const files = fs.readdirSync(folderPath).filter(f => f.endsWith(".js"))

        for (const file of files){
            const filePath = path.join(folderPath, file)
            const command = require(filePath)

            if (folder === "slash"){
                if (command.data && command.execute){
                    client.slashCommands.set(command.data.name, command)
                }
            }
            if (folder === "prefix"){
                if (command.name && command.execute){
                    client.prefixCommands.set(command.name, command)
                }
            }
        }
    }
    console.log("commands carregados")
}