console.log('exercicio5 ======')

const linksInternos3 = document.querySelectorAll('a[href^="#"]')

//linksInternos.addEventListener('click',function ativo() {
  //  linksInternos.classList.add('ativo-click')
    //console.log(linksInternos.classList)
//})

function handleClick(event) {
    
event.currentTarget.classList.add('ativo')
console.log(event.classList)
}

linksInternos3.forEach(link => {
    link.addEventListener('click',handleClick)
});

const todosElementos = document.querySelector('*')
todosElementos.addEventListener('click',function elementosClicados(event) {
console.log("item clicado do site: ",event.currentTarget)
})


function handleClickT(event) {
if(event.key ==='t') {
    document.documentElement.classList.toggle('texto-maior')
}
}

window.addEventListener('keydown',handleClickT)

const h1Inner = querySelector('h1')

const animaisLista111 = document.querySelector('.animais-descricao')

console.log(animaisLista111.innerHTML)