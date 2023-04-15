function isTrue(dado) {
    return !!dado
}

console.log("dado é true ou false: ",isTrue(''))

function perimetroQuadrado(lado) {
    return lado * 4
}

console.log("perimetro do quadrado é: ",perimetroQuadrado(4))

function nomeCompleto(nome,sobrenome) {
    return nome + sobrenome
}

console.log(nomeCompleto('Frankie','Yoogan'))

function par(valor) {
    if(valor % 2 == 0) {
        return valor
    } else {
        return 'nao é par'
    }
}

console.log("numero par: ",par(2))

function tipoDado(dado) {
    return typeof dado
}

console.log("tipo de dado: ",tipoDado('oi'))

addEventListener('scroll',function() {
    console.log('Scrolei')
})

function paisesVisitados(paises) {
    var paisesVisitei = 193
    return `paises visitados: ${paisesVisitei - paises }`
}

console.log("paises que visitei: ",paisesVisitados(3))