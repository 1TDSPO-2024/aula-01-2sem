
//DECLARANDO UM ARRAY DE FRUTAS
let frutas = ["Zimbro", "Lichia", "Jambo", "Figo", "Damasco", "Pitaia"];
//Visualizar o array
console.log(frutas);
console.table(frutas);

//Percorrer arrays com LOOPS FOR

console.log("===========================LOOP FOR");
for (let x = 0; x < frutas.length; x++) {
    console.log(frutas[x]);
    
}

console.log("===========================LOOP FOR OF");
for(let fruta of frutas){
    console.log(fruta);
}

console.log("===========================LOOP FOR IN");
for(let indice in frutas){
    console.log(indice, frutas[indice]);
}

console.log("===========================LOOP FOR EACH");
// frutas.forEach( function(f, i, array) {
//     console.log(array[i]);
// } );
frutas.forEach((f, i, array) => console.log(array[i]));
