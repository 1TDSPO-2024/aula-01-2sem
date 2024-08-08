// Declarando um Array de frutas

let frutas = [
    'Maçã',
    'Banana',
    'Limão',
];

// console.table(frutas);

// Loop For
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

// Loop For Of
for (const fruta of frutas) {
    console.log(fruta);
}

// Loop For In
for (const idx in frutas) {
    console.log(frutas[idx]);
}

// Loop ForEach
frutas.forEach(fruta => console.log(fruta));

// Manipulando o DOM
const ulElem = document.querySelector('#lista');
updateFrutas();
// Botão para adicionar frutas
const btnAddFruta = document.querySelector('#addFruta');
const iptFruta = document.querySelector('#iptFruta');

btnAddFruta.addEventListener('click', addFruta);

function addFruta(e) {
    e.preventDefault();
    frutas.push(iptFruta.value);
    updateFrutas();
    iptFruta.value = '';
    iptFruta.focus();
}

function updateFrutas() {
    ulElem.innerHTML = '';

    frutas.forEach(fruta => {
        const liElem = document.createElement('li');
        liElem.textContent = fruta;
        ulElem.appendChild(liElem);
    });
}