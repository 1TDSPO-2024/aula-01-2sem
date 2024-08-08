

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
    console.log(indice, frutas[indice]);
}
console.log("============LOOP FOR each");
// frutas.forEach(function (f, indice, array) {
//     console.log(array[indice]);
// });
//Arrow function = mesma coisa que a function, mantendo o codigo mais limpo e facíl de idenficar 
frutas.forEach((f, indice, array) => console.log(array[indice]))

//Recuperando a lista UL
let lista = document.getElementById("lista");

function renderizaLista() {
    lista.innerHTML = "";

    //Botao de adicionar fruta ao inicio da lista
    document.getElementById("btnAddInicio").addEventListener("click", () => {
        let valorDigitadoNoCampo = document.getElementById("idFruta").value;
        frutas.unshift("valorDigitadoNoCampo");
        renderizaLista();

    })

    //Botao de adicionar fruta ao final da lista
    document.getElementById("btnAddFinal").addEventListener("click", () => {
        let valorDigitadoNoCampo = document.getElementById("idFruta").value;
        frutas.unshift("valorDigitadoNoCampo");
        renderizaLista();
    })
    document.getElementById("btnAddOrdem").addEventListener("click", () => {
        frutas.sort();
        renderizaLista();
    })
    document.getElementById("btnAddReverse").addEventListener("click", () => {
        frutas.reverse();
        renderizaLista();
    })

    //Criando elementos li para inserir na lista 
    frutas.forEach(fruta => {
        let elementoLi = document.createElement("li");
        elementoLi.textContent = fruta;
        lista.appendChild(elementoLi);
    }}