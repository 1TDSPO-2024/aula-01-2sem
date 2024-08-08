//Declarando um array de frutas
let frutas = ["Zimbro", "Lichia", "Jambo", "Figo", "Damasco", "Pitaia"];

//Exibindo o array
console.table(frutas);

//Percorendo arrays com loop FOR
console.log("--------------FOR--------------");
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

//Percorendo arrays com loop FOR OF
console.log("--------------FOR OF--------------");
for (let fruta of frutas) {
    console.log(fruta);
}

//Percorendo arrays com loop FOR IN
console.log("--------------FOR IN--------------");
for (let indice in frutas) {
    console.log(indice, frutas[indice]);
}

//Percorendo arrays com loop FOR EACH
console.log("--------------FOR EACH--------------");
frutas.forEach(function (f, indice, array) {
    console.log(indice, f);
});