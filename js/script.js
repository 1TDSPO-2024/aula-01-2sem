//Declarando um array de frutas 
let frutas = ["Zimbro", "Lichia", "Jambo", "Figo", "Damasco", "Pitaia"]
//Vizualizar o array: 
console.log(frutas)
console.table(frutas)

//Percorrer arrays com loops FOR...

console.log("============LOOP FOR");
for (let x = 0; x < frutas.length; x++) {
    console.log(frutas[x]);
    ;
}

console.log("============LOOP FOR of");
for (let fruta of frutas) {
    console.log(fruta);

}

console.log("============LOOP FOR in");
for (let indice in frutas) {
    conso
    le.log(indice, frutas[indice]);
}
console.log("============LOOP FOR each");
frutas.forEach((f, indice, array) => console.log(array[indice]))
//  frutas.forEach(function (f, indice, array) {
//  console.log(array[indice]);
// });
//Arrow function = mesma coisa que a function, mantendo o codigo mais limpo e facíl de idenficar 


//Recuperando a lista UL
let lista = document.getElementById("lista");

//Botao de adicionar fruta ao inicio da lista
document.getElementById("btnAddInicio").addEventListener("click", () => {
    let valorDigitadoNoCampo = document.getElementById("idFruta").value;
    frutas.unshift("valorDigitadoNoCampo");
    renderizaLista();
})

    //Botao de adicionar fruta ao final da lista
document.getElementById("btnAddFinal").addEventListener("click", () => {
    let valorDigitadoNoCampo = document.getElementById("idFruta").value;
    frutas.push("valorDigitadoNoCampo");
    renderizaLista();
})

document.getElementById("btnOrdem").addEventListener("click", () => {
    frutas.sort();
    renderizaLista();
})

document.getElementById("btnReverse").addEventListener("click", () => {
    frutas.reverse();
    renderizaLista();
})

//Criando elementos li para inserir na lista 
function renderizaLista() {
    lista.innerHTML = "";
    frutas.forEach(fruta => {
        let elementoLI = document.createElement("li"); 
        elementoLi.textContext = fruta;
        lista.appendChild(elementoLi);
    });

}
renderizaLista();
