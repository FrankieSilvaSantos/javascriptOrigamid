console.log("for each e arrow functions ===========")

const imgs = document.querySelectorAll('img')

console.log(imgs)

imgs.forEach(function(item,index) {
    console.log(item,index)
})

const titulos = document.getElementsByClassName('titulo')
const titulosArray = Array.from(titulos)

titulosArray.forEach(function(item) {
    console.log(item)
})

imgs.forEach((item) => {
    console.log(item)
})