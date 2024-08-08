// DECLARANDO UM ARRAY DE FRUTAS
let frutas = ["Lichia", "Figo", "Pitaya", "Damasco", "Atemoia", "Laranja"]

// VISUALIZAR O ARRAY
console.log(frutas);
console.log(frutas);

// PERCORRER  ARRAYS COM LOOPS FOR
console.log("=================LOOP FOR");
for (let x = 0; x < frutas.length; x++) {
    console.log(frutas[x]);

}
console.log("=================LOOP FOR OFF");
for (let indice of frutas) {
    console.log(indice, frutas[indice]);
}

console.log("=================LOOP FOR EACH");
// frutas.forEach(function (f, indice, array) {
//     console.log(indice, f);
// });
frutas.forEach((f, indice, array) => console.log(array[indice]));