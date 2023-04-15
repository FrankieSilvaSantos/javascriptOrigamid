var videoGames = ['switch','3DS','ps5']

for (var i =0;i<videoGames.length;i++) {
    console.log(videoGames[i])
}

var videoGames = ['switch','xbox','3DS','ps5']

for (var i =0;i<videoGames.length;i++) {
    console.log("valores array: ",videoGames[i])
    if(videoGames[i] === '3DS') {
       
        break
    }
}

var legumes = ['quiabo','cenoura','chuchu','repolho','batata doce']
legumes.forEach(function(item,index) {
    console.log("usando forEach: ",item,index)
})

var numero =0
var maximo = 30

for(;numero<maximo;) {
    console.log(numero)
    numero++
}