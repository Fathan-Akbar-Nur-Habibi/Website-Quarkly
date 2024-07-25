// Create dropdown
const nav = document.querySelector('nav');
const dropdown = document.createElement('div');
dropdown.classList.add('dropdown');
nav.appendChild(dropdown);

const dropdownList = document.createElement('ul');
dropdown.appendChild(dropdownList);

const dropdownItem = document.createElement('li');
dropdownItem.textContent = 'Dropdown Item';
dropdownList.appendChild(dropdownItem);

// Menampilkan dropdown saat diklik
nav.addEventListener('click', () => {
    dropdown.classList.toggle('show');
});