module.exports = {
    name: "messageCreate",

    async execute(message, client) {

        const prefix = "!";

        if (message.author.bot) return;
        if (!message.content.startsWith(prefix)) return;

        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();

        const command = client.prefixCommands.get(commandName) || client.prefixCommands.find(cmd => cmd.aliases?.includes(commandName));
        if (!command) return;

        try {
            await command.execute(message, args);
        } catch (error) {
            console.error(error);
            message.reply("Erro ao executar o comando.");
        }
    }
};
