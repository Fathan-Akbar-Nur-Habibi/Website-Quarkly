const aside = document.querySelector('aside');
const img = aside.querySelector('img');

img.addEventListener('click', () => {
    aside.style.backgroundColor = '#444';
    aside.style.color = '#fff';
});
