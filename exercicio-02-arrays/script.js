const names = [];

const ulElem = document.querySelector('#listNames');

const iptName = document.querySelector('#iptName')

const btnAdd = document.querySelector('#btnAdd');
const btnSort = document.querySelector('#btnSort');
const btnRevert = document.querySelector('#btnRevert');
const btnDelete = document.querySelector('#btnDelete');

btnAdd.addEventListener('click', () => {
  names.push(iptName.value);
  renderList();
});

btnSort.addEventListener('click', () => {
  names.sort();
  renderList();
});

btnRevert.addEventListener('click', () => {
  names.reverse();
  renderList();
});

btnDelete.addEventListener('click', () => {
  const idx = names.indexOf(iptName.value);
  names.splice(idx, 1);  
  renderList();
});

function renderList() {
  ulElem.innerHTML = '';
  names.forEach(name => {
    const listItem = document.createElement('li');
    listItem.textContent = name;
    ulElem.appendChild(listItem);
  })
}