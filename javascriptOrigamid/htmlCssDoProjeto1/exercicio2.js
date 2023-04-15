console.log("exercicio 2 =============")

const paragrafos2 = document.querySelectorAll('p')

console.log(paragrafos2)

paragrafos2.forEach((item) => {
    console.log(item)
})

paragrafos2.forEach((item) => {
    console.log(item.innerText)
})