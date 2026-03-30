const fs = require("fs")
const path = require("path")

const filePath = path.join(__dirname, "colecoes.json")

function carregarColecoes(){
    if (!fs.existsSync(filePath)){
        fs.writeFileSync(filePath, JSON.stringify({}))
    }

    const data = fs.readFileSync(filePath)
    return JSON.parse(data)
}

function salvarColecoes(colecoes){
    fs.writeFileSync(filePath, JSON.stringify(colecoes, null, 2))
}

module.exports = {
    carregarColecoes,
    salvarColecoes
}