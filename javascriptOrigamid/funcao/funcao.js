function areaQuadrado(lado) {
    return lado * lado
}

console.log(areaQuadrado(4))

function pi() {
    return 3.14
}

var total =  5 * pi()

console.log(total)

function imc(peso,altura) {
    const imc = peso / (altura **2)
    return imc
}

console.log("IMC: ",imc(54,1.75).toFixed(2))

function corFavorita(cor) {
    if(cor === 'preto') {
        return 'sua cor favorita é preta'
    } else if(cor === 'azul') {
        return 'voce gosta do ceu'
    } else if(cor ==='verde') {
        return 'vc gosta de floresta'
    }
}

console.log("cores: ",corFavorita('preto'))

addEventListener('click', function() {
    console.log('clicou')
})

function terceiraIdade(idade) {
    if(typeof idade !== 'number') {
        return 'informe sua idade'
    } else if(idade >=60) {
        return true
    } else {
        return false
    }
}

console.log('terceira idade function : ',terceiraIdade('oi'))


function precisoVisitar(paisesVisitados) {
    var totalPaises = 193
    return `ainda faltam ${totalPaises - paisesVisitados}`
}

console.log("Preciso visitar: ",precisoVisitar(3))

function dados() {
    var nome = 'Frankie'
    var idade = 26
    return `${nome}, ${idade}`
}

function outrosDados() {
    var endereco = 'Rua doutor weischenk'
    var idade = 28
    return `${idade}, ${endereco}`
}

console.log(dados())
console.log(outrosDados())