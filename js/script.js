//Declarando um Array de Frutas
let frutas = ["Zimbro", "Lichia", "Jambo", "Figo", "Damasco", "Pitaia"];
//Visualizador o array
console.log(frutas)
console.table(frutas)


//Percorrer arrays com loop for
for (let x = 0; x < frutas.length; x++) {
    const element = frutas[x];
    console.log(frutas[x]);
}

//Percorrer arrays com loop for of
for (let i of frutas) {
    console.log(frutas);
}

//Percorrer arrays com loop for in
for (let i in frutas) {
    console.log(i, frutas[i]);
}

//Percorrer arrays com lopp for each
// frutas.forEach(function (f, i, array) {
//     console.log(i, f);
// });

//for each com arrow function
frutas.forEach((f, i, array) => console.log(array[i]));

//Recuperando a lista
let lista = document.getElementById("lista");


//Botão de adicionar fruta ao final da lista
document.getElementById("btnAdd").addEventListener("click", () => {
    let valor = document.getElementById("idFruta").value;
    frutas.push(valor);
    renderizaLista();
})

function renderizaLista() {
    lista.innerHTML = "";
    frutas.forEach(fruta => {
        //Criando elementos li para inserir na lista
        let elementoLi = document.createElement("li");
        elementoLi.textContent = fruta;
        lista.appendChild(elementoLi);
    });
}

renderizaLista();