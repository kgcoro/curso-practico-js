const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML = 'Patito <br> Feo';
h1.innerText = 'Patito <br> Feo';
// console.log(h1.getAttribute('class'));
// h1.setAttribute('class', 'rojo')

h1.classList.add('rojo');
h1.classList.remove('verde');

input.value = "465";

const img = document.createElement('img');
img.setAttribute('src', 'https://cafans.b-cdn.net/images/Category_63376/subcat_221960/BdhMO6h5_1312211059461gpadd.jpeg');

pid.innerHTML = "";
pid.appendChild(img);