// Create dropdown
const nav = document.querySelector('nav');
const dropdown = document.createElement('div');
dropdown.classList.add('dropdown');
nav.appendChild(dropdown);

const dropdownList = document.createElement('ul');
dropdown.appendChild(dropdownList);

const dropdownItem1 = document.createElement('li');
dropdownItem1.textContent = 'Dropdown Item 1';
dropdownList.appendChild(dropdownItem1);

const dropdownItem2 = document.createElement('li');
dropdownItem2.textContent = 'Dropdown Item 2';
dropdownList.appendChild(dropdownItem2);

// Menampilkan dropdown saat diklik
nav.addEventListener('click', () => {
  dropdown.classList.toggle('show');
});
