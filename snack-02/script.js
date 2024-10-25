//Snack 2
//Creare un array di oggetti di squadre di calcio.
//Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
//Generare numeri random al posto degli 0 nelle proprietà "punti" fatti e "falli subiti".
//Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// le squadre di calcio 
const squadre = [
    { nome:"Inter", punti: 0, falliSubiti: 0},
    { nome:"Juventus", punti: 0, falliSubiti: 0},
    { nome:"Milan", punti: 0, falliSubiti: 0}, 
    { nome:"Roma", punti: 0, falliSubiti: 0},
];

 for (let i = 0; i < squadre.length; i++) {
    squadre[i].punti = getRandomInt(0, 100); 
    squadre[i].falliSubiti = getRandomInt(0, 50);
}

 const squadreFalli = squadre.map(squadra => {
    return { nome: squadra.nome, falliSubiti: squadra.falliSubiti };
});

console.log("Squadre con tutte le proprietà:", squadre);
console.log("Nuovo array con nomi e falli subiti:", squadreFalli);

