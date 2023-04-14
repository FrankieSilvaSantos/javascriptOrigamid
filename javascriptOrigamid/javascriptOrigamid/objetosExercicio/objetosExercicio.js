var pessoa = {
    nome: 'Frankie',
    sobrenome: 'Yoogan'
}

console.log(pessoa)
console.log(pessoa.nome,pessoa.sobrenome)

var carro = {
    preco: 1000,
    portas: 4,
    marca: 'audi'
}

carro.preco = 3000

console.log("preco do carro: ",carro.preco)

var cachorro = {
    raca: 'labrador',
    cor: 'preto',
    latir(pessoa) {
        if(pessoa ==='homem') {
            return 'latir'
        } else {
            return 'nao latir'
        }
    }
}

console.log(cachorro)
console.log(cachorro.latir('mulher'))