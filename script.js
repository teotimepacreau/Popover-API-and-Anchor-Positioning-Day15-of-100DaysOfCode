console.log('connecté !');

const chevron = document.querySelector('.fa-chevron-right');
console.log(chevron);

const btn = document.querySelector('button');
console.log(btn)

btn.addEventListener('click', () => {
    console.log("bouton cliqué");
    chevron.classList.toggle('fa-chevron-left');
    chevron.classList.toggle('fa-chevron-right');
})