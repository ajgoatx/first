let nomeDoHeroi = "Yoru";
console.log (nomeDoHeroi)
let xpDoHeroi = 7800;
console.log (xpDoHeroi)

let nivel;

if (xpDoHeroi < 1000){
    nivel = "Ferro";
} else if (xpDoHeroi >= 1001 && xpDoHeroi <= 2000){
    nivel = "Bronze";
} else if (xpDoHeroi >= 2001 && xpDoHeroi <= 5000){
    nivel = "Prata";
} else if (xpDoHeroi >= 5001 && xpDoHeroi <= 7000){
    nivel = "Ouro";
} else if (xpDoHeroi >= 7001 && xpDoHeroi <= 8000){
    nivel = "Platina";
} else if (xpDoHeroi >= 8001 && xpDoHeroi <= 9000){
    nivel = "Ascendente";
} else if (xpDoHeroi >= 9001 && xpDoHeroi <= 10000){
    nivel = "Imortal";
} else if (xpDoHeroi >= 10.001){
    nivel = "Radiante"
}
console.log (nivel)
