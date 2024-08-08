let frutas = ["Zimbro", "Lichia", "Jambo", "Figo", "Pitaya", "Ameixa", "Mexirica", "Maçã"]

console.log(frutas);
console.table(frutas);

//percorrer arrays com loops

for (let index = 0; index < frutas.length; index++) {
    console.log(frutas[index])
}

//loop for OF

for (let fruta of frutas) {
    console.log(fruta)
}

//for in

for (let indice in frutas) {
    console.log(indice)
}

frutas.forEach(element => {
    console.log(element)
});

