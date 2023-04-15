console.log('exercicio3 ======')

const adicionandoMenu4 = document.querySelectorAll('.menu a')





adicionandoMenu4.forEach((item3) => {
    item3.classList.add('ativo-dourado')
})

console.log(adicionandoMenu4.classList)

const imgs4 = document.querySelectorAll('img')

imgs4.forEach((item) => {
    const possuiAtributo3 =item.hasAttribute
    console.log(imgs4,possuiAtributo3)
})

const linksModificar = document.querySelector('a[href^="http"]')

linksModificar.setAttribute('href','https://origamid.com.br')

console.log(linksModificar)

const section = document.querySelector('.animais')

console.log(section.clientHeight)

console.log(section.offsetHeight)

console.log(section.scrollHeight)

const listaAnimais = document.querySelector('.animais-lista')

console.log(listaAnimais.clientHeight)

console.log(listaAnimais.scrollHeight)

const listaAnimaisTopo = listaAnimais.offsetTop

console.log(listaAnimaisTopo)

const h2Raposa = document.querySelector('.raposa')

console.log(h2Raposa.offsetLeft)

const rect = h2Raposa.getBoundingClientRect()

console.log(rect)

console.log(rect.left)

console.log(window.innerWidth)

const small = window.matchMedia('(max-width: 600px)')

console.log(small)