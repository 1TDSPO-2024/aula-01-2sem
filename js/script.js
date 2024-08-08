//Declarando um Array de Frutas
let frutas = ["Zimbro", "Lichia", "Jambo", "Figo", "Damasco", "Pitaia"];
//Visualizar o array:
console.log(frutas);
console.table(frutas);

//Percorrer arrays com loops for...

console.log("=================LOOP FOR");
for (let x = 0; x < frutas.length; x++) {
    console.log(frutas[x]);
}

console.log("========================LOOP FOR OF");
for (let fruta of frutas) {
    console.log(fruta);

}

console.log("======================LOOP FOR IN");
for (let indice in frutas) {
    console.log[indice, frutas[indice]];
}

console.log("=============LOOP FOR EACH")
frutas.forEach(function (f, indice, array) {
    console.log(indice);
}
);
//frutas.forEach((f, indice, array) => console.log(array[indice]));

//Recuperando a Lista UL
let lista = document.getElementById("lista");
//Criando elementos LI para inserir na lista
let elementosLi = document.createElement("li");
elementoLi = textContent = "Jaca";

lista.appendChild(elementoLi);

frutas.forEach(fruta => {
    let elementosLi = document.createElement("li");
    elementoLi = textContent = "fruta";
    lista.appendChild(elementoLi);
});

//Botao para adicionar ao inicio da lista
document.getElementById("btnAddFinal").addEventListener("click", () => {
    let valorDigitadoCampo = document.getElementById{ "idFruta"}.value;
    fruta.push("NOVA FRUTA");
    renderizandoLista();
});



//Botao para adicionar ao final da lista
document.getElementById("btnAddFinal").addEventListener("click", () => {
    let valorDigitadoCampo = document.getElementById{ "idFruta"}.value;
    fruta.push("NOVA FRUTA");
    frutas.unshift[valor]
    renderizandoLista();
});

//Botao para adicionar em ordem

//Botao para reverso

function renderizandoLista() {
    lista.innerHTML = "";
    frutas.forEach(fruta => {
        let elementosLi = document.createElement("li");
        elementoLi = textContent = "fruta";
        lista.appendChild(elementoLi);

    })
}