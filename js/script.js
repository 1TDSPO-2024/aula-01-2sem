
//Declarando um array de frutas
let frutas = ["Zimbro", "Lichia", "Jambo", "Figo", "Damasco", "Pitaia"];

//visualizar o array
console.log(frutas);
console.table(frutas);

//Percorrer arrays com LOOPS FOR...

console.log("=======================LOOP FOR");
for (let x = 0; x < frutas.length; x++) {
    console.log(frutas[x]);
}

console.log("=======================LOOP FOR OF");
for (let fruta of frutas) {
    console.log(fruta);
}

console.log("=======================LOOP FOR IN");
for (let indice in frutas) {
    console.log(indice, frutas[indice]);
}

console.log("=======================LOOP FOR EACH");
//frutas.forEach( function(f, indice, array) {
//    console.log(array[indice]);
//} );

frutas.forEach((f, indice, array) => console.log(array[indice]));
    
