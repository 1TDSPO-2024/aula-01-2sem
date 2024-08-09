const names = [];

const ulElem = document.querySelector('#listNames');

const iptName = document.querySelector('#iptName')

const btnAdd = document.querySelector('#btnAdd');
const btnSort = document.querySelector('#btnSort');
const btnRevert = document.querySelector('#btnRevert');

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

function renderList() {
  ulElem.innerHTML = '';
  names.forEach(name => {
    const listItem = document.createElement('li');
    const btnDelete = document.createElement('button');

    btnDelete.innerHTML = `&#10060`;
    btnDelete.addEventListener('click', () => {
      const idx = names.indexOf(listItem.textContent);
      names.splice(idx, 1);  
      ulElem.removeChild(listItem);
    })

    listItem.textContent = name;
    listItem.appendChild(btnDelete);

    ulElem.appendChild(listItem);
  })
}