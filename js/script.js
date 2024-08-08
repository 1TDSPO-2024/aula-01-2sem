

let frutas = ["Morango", "Maça", "Abacaxi", "Uva", "Banana", "Limão"];

console.log(frutas);
console.table(frutas);

console.log("================LOOP FOR");
for (let x = 0; x < frutas.length; x++) {
    console.log(frutas[x]);
}

console.log("================LOOP FOR OF");
for (let fruta of frutas) {
    console.log(fruta);
}

console.log("================LOOP FOR OF");
for (let indice in frutas) {
    console.log(indice, frutas[indice]);
}

console.log("================LOOP FOR EACH");
frutas.forEach(function (f, indice, array) {
    console.log(array[indice]);
});
frutas.forEach((f, indice, array) => console.log(array[indice]));