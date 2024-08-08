//Declarando um Array de frutas
let frutas = ["Maçã", "Banana", "Uva", "Sorvete"]
//Exibindo o Array
console.log(frutas);
console.table(frutas);


//Percorrendo o Array com LOOPS
console.log("===================LOOPS FOR");
for (let x = 0; x < frutas.length; x++) {
    console.log(frutas[x]);
}
console.log("===================LOOPS FOR OF");
for (let fruta of frutas){
    console.log(fruta);
}

console.log("===================LOOPS FOR IN");
for (let indice in frutas){
    console.log(indice)
}

console.log("===================LOOPS FOR EACH");
// frutas.forEach(function(indice, fruta, array){
//     console.log(array[indice]);
// });

frutas.forEach((fruta, indice, array) => console.log(array[indice]))


let lista = document.getElementById("lista");
//Criando elementos Li para inserir na lista
let elementoLi = document.createElement("li");
elementoLi.textContent = "PÂo";
lista.appendChild(elementoLi);

frutas.forEach(fruta=>{
    //Criando elementos Li para inserir na lista
let elementoLi = document.createElement("li");
elementoLi.textContent = fruta;
lista.appendChild(elementoLi);
});

document.getElementById("btnAdd").addEventListener("click", () =>{
    let valorDigitadoNoCampo = document.getElementById("fruta").value;
    frutas.push(valorDigitadoNoCampo);
    rederizaLista();
});

function rederizaLista(){
    lista.innerHTML = "";
    frutas.forEach(fruta=>{
        //Criando elementos Li para inserir na lista
    let elementoLi = document.createElement("li");
    elementoLi.textContent = fruta;
    lista.appendChild(elementoLi);
    });
}

rederizaLista();