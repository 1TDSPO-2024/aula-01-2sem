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

//RECUPERANDO A LISTA UL
let lista = document.getElementById("lista");

//BOTÃP DE ADICIONAR FRUTA AO INICIO DA LISTA.
document.getElementById("btnAddInicio").addEventListener("click", () => {
    let valorDigitadoNoCampo = document.getElementById("idFruta").value;
    frutas.push(valorDigitadoNoCampo);
    renderizaLista();
});


//BOTÃO DE ADICIONAR FRUTA AO FINAL DA LISTA.
document.getElementById("btnAddFinal").addEventListener("click", () => {
    let valorDigitadoNoCampo = document.getElementById("idFruta").value;
    frutas.push(valorDigitadoNoCampo);
    renderizaLista();
});

function renderizaLista() {
    lista.innerHTML = "";
    frutas.forEach(fruta => {
        //CRIANDO ELEMENTOS LI PARA INSERIR NA LISTA 
        let elementoLi = document.createElement("li");
        elementoLi.textContent = fruta;
        lista.appendChild(elementoLi);
    });

}

renderizaLista();