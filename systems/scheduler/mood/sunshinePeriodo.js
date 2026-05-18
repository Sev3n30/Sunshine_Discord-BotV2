const periodos = ["manha", "tarde", "noite"]

let periodoAtual = "manha"

function sortearPeriodo(){
    return periodos[
        Math.floor(Math.random() * periodos.length)
    ]
}

function gerarPeriodo(){
    periodoAtual = sortearPeriodo()

    return periodoAtual
}

function obterPeriodo(){
    return periodoAtual
}

module.exports ={
    gerarPeriodo,
    obterPeriodo
}