// Declarando um Array de frutas

const frutas = [
    'Maçã',
    'Banana',
    'Limão',
];

// console.table(frutas);

// Loop For
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

// Loop For Of
for (const fruta of frutas) {
    console.log(fruta);
}

// Loop For In
for (const idx in frutas) {
    console.log(frutas[idx]);
}

// Loop ForEach
frutas.forEach(fruta => console.log(fruta));