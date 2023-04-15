var pessoa = {
    nome: 'Frankie',
    idade: 26,
    profissao: 'Analista de sistemas',
    possuiFaculdade: true
}

console.log(pessoa)

console.log(pessoa.nome,pessoa.possuiFaculdade)

var quadrado = {
    lados: 4,
    area: function(lado) {
        return lado * lado
    }
}

console.log("area: ",quadrado.area(4))

var pi = Math.PI

console.log("valor de pi: ",pi)

var numeroAleatorio = Math.random()

console.log("Numero aleatorio: ",numeroAleatorio)

var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84E',
    metadeHeight() {
        return this.height / 2
    }
}

menu.backgroundColor = '#000'
menu.color = 'blue'

console.log(menu.color,menu.backgroundColor)

console.log("metade da altura ", menu.metadeHeight())