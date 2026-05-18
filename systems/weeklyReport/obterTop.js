function obterTop(stats, categoria){

    const usuarios = Object.entries(stats)

    usuarios.sort((a, b) => b[1][categoria] - a[1][categoria])

    const top = usuarios[0]

    return{
        userId: top[0],
        valor: top[1][categoria]
    }
}

module.exports = obterTop