console.log('exercicio4 ==========')

const imgExercicio4 = document.querySelector('img')

const distanciaImg = imgExercicio4.offsetTop

console.log(distanciaImg)


function imagensWidth() {
const imgsExercicio4 = document.querySelectorAll('img')
var soma = 0
imgsExercicio4.forEach((item) => {
    console.log("Largura das imagens",item.offsetWidth)
    soma += item.offsetWidth
    console.log("soma das larguras das imagens: ",soma)
})
}

window.onload = function() {
    imagensWidth()
}

const linksLargura = document.querySelectorAll('a')

linksLargura.forEach((link) => {
    const linksWidth = link.offsetWidth
    const linksHeight = link.offsetHeight
    console.log("largura dos links: ",linksWidth)
    console.log(("altura dos links",linksHeight))
})

const browserWidth6 = window.matchMedia('(max-width: 720px)').matches
const menuBrowser = document.querySelector('.menu')
if(browserWidth6) {
    const menuBrowser = document.querySelector('.menu')
    menuBrowser.classList.add('menu-mobile')
    console.log(menuBrowser.classList)
}

const imgClick = document.querySelector('img')

//imgClick.addEventListener('click',() =>
//console.log('clicou')
//)

function callback() {
    console.log('cliquei usando callback')
}

imgClick.addEventListener('click',callback)

const animaisListaClick = document.querySelector('.animais-lista')
animaisListaClick.addEventListener('click',callbackLista)

function callbackLista(event) {
    console.log(event.currentTarget)
    console.log(event.target)
}

const imgThis = document.querySelector('img')
function imgAtributo(event) {
    console.log(this)
    console.log("atributo do evento da imagem ",this.getAttribute('src'))
    
}

imgThis.addEventListener('click',imgAtributo)

const keyClick = window.addEventListener('keydown',function() {
    console.log('pressionou uma tecla')
})

const keyPressionada = window.addEventListener('keydown',function(event) {
    console.log(event.key)
})

const imgsClick10 = document.querySelectorAll('img')
imgsClick10.forEach((imgs) => {
    imgs.addEventListener('click',function callback(event) {
        console.log('Target',event.target)
    })
})