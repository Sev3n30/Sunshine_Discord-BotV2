function formatarTempo(ms){
    const segundos = Math.floor(ms / 1000) % 60

    const minutos = Math.floor(ms / 1000 / 60 ) % 60

    const horas = Math.floor(ms / 1000 / 60 / 60) % 24

    const dias = Math.floor(ms / 1000/ 60/ 60/ 24)

    return `${dias}dias ${horas}h ${minutos}m ${segundos}`
}

module.exports = formatarTempo