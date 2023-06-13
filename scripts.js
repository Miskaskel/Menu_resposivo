const toogle = document.getElementById('hamburguer');
toogle.onclick = function(){
    toogle.classList.toggle('active');
}
let hamburguer = document.querySelector('#hamburguer');
let navLinks = document.querySelector('#nav-links');

hamburguer.addEventListener('click', () => {
    navLinks.classList.toggle('hide');
    hamburguer.classList.toggle('linhas-rotate');
})
let links = document.querySelectorAll('.links');

var radio = document.querySelector('.manual-btn');
var cont = 1
rolar = true

document.querySelector('#radio1').checked = true;

let radio1 = document.querySelector('#radio1')
radio1.addEventListener('click', () => {
    cont = 1
    rolar = false
})
let radio2 = document.querySelector('#radio2')
radio2.addEventListener('click', () => {
    cont = 2
    rolar = false
})
let radio3 = document.querySelector('#radio3')
radio3.addEventListener('click', () => {
    cont = 3
    rolar = false
})

setInterval(() => {
    previousImg()
}, 5000)

function previousImg(){
    cont++
    if(cont >3){
        cont = 1
    }
    document.querySelector('#radio'+cont).checked = true;
        
}