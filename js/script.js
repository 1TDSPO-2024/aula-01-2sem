//Declarando um Array de Frutas
let frutas = ["Zimbro", "Lichia", "Jambo", "Figo", "Damasco", "Pitaia"];
//Visualizador o array
console.log(frutas)
console.table(frutas)


//Percorrer arrays com loop for
for (let x = 0; x < frutas.length; x++) {
    const element = array[x];
    console.log(frutas[x]);
}

//Percorrer arrays com loop for of
for (let i of frutas) {
    console.log(frutas);
}

//Percorrer arrays com loop for in
for (let i in frutas) {
    console.log(i, frutas[i]);
}

//Percorrer arrays com lopp for each
// frutas.forEach(function (f, i, array) {
//     console.log(i, f);
// });

//for each com arrow function
frutas.forEach((f, i, array) => console.log(array[indice]));