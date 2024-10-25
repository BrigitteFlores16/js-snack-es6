//Snack 1
//Creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore.
const biciclette = [
    { nome: "Triban RC120", peso: 6.8 },
    { nome: "Van Rysel RCR", peso: 7.0 },
    { nome: "Roubaix SL8 ", peso: 6.4 },
    { nome: "Works Venge", peso: 6.6 }
];

// la bici con il peso minore
let biciLeggera = biciclette[0]; 

for (let i = 1; i < biciclette.length; i++) {
    if (biciclette[i].peso < biciLeggera.peso) {
        biciLeggera = biciclette[i];
    }
}
     const biciLeggeraDiv = document.getElementById('biciLeggera');
        biciLeggeraDiv.textContent = `${biciLeggera.nome} con un peso di ${biciLeggera.peso} kg`;

console.log("La bici più leggera è:", biciLeggera.nome, "con un peso di", biciLeggera.peso, "kg");

