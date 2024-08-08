
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

//Recuperando a lista UL
let lista = document.getElementById("lista");

//Botão de adicionar fruta ao final da lista com push
document.getElementById("btnAddFinal").addEventListener("click", ()=>{
    let valorDigitadoNoCampo = document.getElementById("idFruta").value;
    frutas.push(valorDigitadoNoCampo);
    renderizaLista()
});

//Botão de adicionar fruta ao inicio da lista com unshift
document.getElementById("btnAddInicio").addEventListener("click", ()=>{
    let valorDigitadoNoCampo = document.getElementById("idFruta").value;
    frutas.unshift(valorDigitadoNoCampo);
    renderizaLista()
});

//Botão para ordenar a lista
document.getElementById("btnOrdem").addEventListener("click", ()=>{
    frutas.sort();
    renderizaLista()
});

//Botão para reverter
document.getElementById("btnReverse").addEventListener("click", ()=>{
    frutas.reverse();
    renderizaLista()
});

//Renderiza lista
function renderizaLista(){
    lista.innerHTML = "";
    frutas.forEach( fruta => {
        //Criando elementos li para inserir na lista
        let elementoLi = document.createElement("li");
        elementoLi.textContent = fruta;
        lista.appendChild(elementoLi);
        });
}

renderizaLista()