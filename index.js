let nomeHeroi = "Mkeena";
let quantidadeDeXP = 1500
let nivel = "";

if (quantidadeDeXP < 1000) {
    nivel = "Ferro";
}

else if (quantidadeDeXP <= 2000) {
    nivel = "Bronze";
}

else if (quantidadeDeXP <= 5000) {
    nivel = "Prata";
}

else if (quantidadeDeXP <= 7000) {
    nivel = "Ouro";
}

else if (quantidadeDeXP <= 8000) {
    nivel = "Platina";
}

else if (quantidadeDeXP <= 9000) {
    nivel = "Ascendente";
}

else if (quantidadeDeXP <= 10000) {
    nivel = "Imortal";
}

else {
    nivel = "Radiante";
}

console.log(" O herói de nome " + nomeHeroi + " está no nível " + nivel + " com " + quantidadeDeXP + " de XP ");