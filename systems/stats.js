const fs = require("fs")
const path = require("path")

const caminho = path.join(__dirname, "stats.json")

function carregarStats(){
    if(!fs.existsSync(caminho)){
        fs.writeFileSync(caminho, JSON.stringify({}))
    }
    return JSON.parse(fs.readFileSync(caminho))
}

function salvarStats(stats){
    fs.writeFileSync(caminho, JSON.stringify(stats, null, 2))
}

module.exports = {
    carregarStats,
    salvarStats
}