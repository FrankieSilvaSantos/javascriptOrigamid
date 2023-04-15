window.alert('Alerta do browser')

console.log(window.location.hostname)

console.log(window.location.href)

var titulo = document.querySelector('h1')

titulo.onclick = clicou

function clicou() {
    console.log('clicou')
}