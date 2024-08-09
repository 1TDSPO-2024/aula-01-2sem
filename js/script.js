
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

//Botão
document.getElementById("btnRemover").addEventListener("click", ()=>{
    frutas.shift()
    renderizaLista()
});

//Renderiza lista
function renderizaLista(){
    lista.innerHTML = "";
    frutas.forEach( (fruta) => {
        //Criando elementos li para inserir na lista
        let elementoLi = document.createElement("li");
        elementoLi.textContent = fruta;

        //Criando um botão para adicionar no li. Botão para remover o item do array
        const btnx = document.createElement("button");
        //Adicionar um texto ao botão
        btnx.textContent = "X";
        //Atrelar evento ao botão para executar a auto remoção
        btnx.addEventListener("click", ()=>{
            //Pesquisando o item do array e retornando o indice deste item
            let indice = frutas.indexOf(fruta);
            //Utilizando o splice com o indice removemos o item selecionado ao click do botão
            frutas.splice(indice, 1);
            renderizaLista();
        } );
        //Adicionando o botão ao elemento li
        elementoLi.appendChild(btnx);

        lista.appendChild(elementoLi);
        });
}

renderizaLista()