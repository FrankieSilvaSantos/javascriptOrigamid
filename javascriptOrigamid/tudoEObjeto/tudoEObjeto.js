var nome = 'Frankie'

console.log(nome.length)

console.log(nome.charAt(1))

console.log(nome.replace('kie','zie'))

var nomeMinusculo = nome.toLowerCase()

console.log(nomeMinusculo)

var altura = 1.898989

console.log(altura.toFixed(2))

var btn = document.querySelector('.btn')

btn.addEventListener('click',function() {
    console.log('clicou no a')
})