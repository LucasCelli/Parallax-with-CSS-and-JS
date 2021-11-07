let debug = document.querySelector('.valor');
let nuvem = document.querySelector('#nuvem');
let montanha = document.querySelector('#montanha');
let arvores = document.querySelector('#arvores');

window.addEventListener('scroll', function () {
    let valorY = window.scrollY;

    nuvem.style.left = valorY * 0.2 + 'px';
    nuvem.style.top = valorY * 0.25 + 'px';
    montanha.style.top = valorY * 0.35 + 'px';
    montanha.style.left = '-' + valorY * 0.75 + 'px';
    arvores.style.left = '-' + valorY * 0.05 + 'px';

    debug.innerHTML = `Scroll Y: ${valorY}`;
})