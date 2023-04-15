const animais = document.getElementById('animais')

console.log(animais)

const gridSection = document.getElementsByClassName('grid-section')

console.log(gridSection)

const primeiraLi = document.querySelector('li')

console.log(primeiraLi)

const primeiraUl = document.querySelector('ul')
console.log(primeiraUl)

const linksInternos = document.querySelector('[href^="#"]')

console.log(linksInternos)

const img = document.querySelectorAll('.animais img')

console.log(img)

const gridSectionHtml = document.getElementsByClassName('.grid-section')
const gridSectionNode = document.querySelectorAll('.grid-section')

console.log(gridSectionHtml)
console.log(gridSectionNode)

gridSectionNode.forEach(function(item,index) {
    console.log(item,index)
})