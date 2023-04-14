var brasilCopaVenceu = [1959,1962,1970,1994,2002]

for(var i = 0;i<brasilCopaVenceu.length;i++) {
    console.log(`O brasil ganhou na copa em ${brasilCopaVenceu[i]}`)
}

var legumes = ['cenoura','chuchu','repolho','batata doce']

for(var x=0;x<legumes.length;x++) {
    console.log(legumes[x])
    if(legumes[x]==='repolho') {
        break
    }
}

var ultimoLegume = legumes[legumes.length - 1] 

console.log("o ultimo legume do array é: ",ultimoLegume)