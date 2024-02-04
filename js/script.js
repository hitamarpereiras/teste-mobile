const menuNAV = document.getElementById('menu-mobile')
const butn = document.getElementById('btn-button')
const animarDiv5 = document.getElementById('assunto4')

menuNAV.addEventListener('click',animar)

function animar(){
    animarDiv5.classList.toggle('open-div')
    butn.classList.toggle('ativacao')
    menuNAV.classList.toggle('open-m')
}