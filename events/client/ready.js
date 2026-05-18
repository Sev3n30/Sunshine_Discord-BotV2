module.exports = {
    name: "clientReady",
    once: true,

    async execute(client){
        console.log(`${client.user.tag} online`);

        require("../../systems/scheduler/motivationalMessage")(client);
        require("../../systems/scheduler/dailyGreeting")(client);
        require("../../systems/weeklyReport/gerarRanking")(client);
    }
}
