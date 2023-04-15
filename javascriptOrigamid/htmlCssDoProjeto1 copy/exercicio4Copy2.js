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

const browserWidth2 = window.matchMedia('(max-width: 720px)').matches

if(browserWidth2) {
    const menuBrowser = document.querySelector('.menu')
    menuBrowser.classList.add('menu-mobile')
    console.log(menuBrowser.classList)
}