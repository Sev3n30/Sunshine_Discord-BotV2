const moodData = {
    primarias: [
        "supremeCalm",
        "goldenJoy",
        "silentCalculation",
        "curiousFascination"
    ],

    secundarias: [
        "playfulTeasing",
        "melancholicSilence",
        "artificialHappiness",
        "protectiveInstinct",
        "detachedCruelty",
        "cosmicAwe",
        "emotionalShutdown",
        "theFool"
    ]
}

humorAtual = "supremeCalm";

function gerarHumor(){
    const chance = Math.random() * 100

    let categoria;

    if(chance <= 75) categoria = "primarias";
    else categoria = "secundarias"

    const moods = moodData[categoria];

    const humor =
        moods[Math.floor(Math.random() * moods.length)];

    humorAtual = humor; 

    return humorAtual;
}

function obterHumor(){
    return humorAtual;
}

module.exports = {
    gerarHumor,
    obterHumor
}