//Snack 3 (Bonus)
//Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
//La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

function controllaNumeri(numeri, a, b)
{
 if(a>= b || a < 0 || b >= numeri.length || b < 0)
 {
    console.log("errore parametri non validi");
    return;
 }
 let risultato= [];
 for (let i = a+1; i < b; i++)
 {
    risultato.push(numeri[i]);
 }
 return risultato;
}

let arraynumeri = [0,5,1,6,7,83,10,23,5,6,7,1];
let risultato = controllaNumeri(arraynumeri,0,2);
console.log(risultato);