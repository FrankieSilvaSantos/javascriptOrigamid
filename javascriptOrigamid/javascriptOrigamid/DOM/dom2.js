var titulo = document.querySelector('.titulo-principal')

console.log(titulo.classList)

console.log(titulo.innerText)

console.log(titulo.className)


function callBack() {
    console.log('clicked em: ',titulo.innerText)
}

titulo.addEventListener('click',callBack)

console.log(window.location.href)

console.log(window.innerWidth)

console.log(window.navigator.language)

var titulo = document.querySelector('.titulo-principal')

console.log(titulo)