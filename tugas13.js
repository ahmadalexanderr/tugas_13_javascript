const fruitOp = () => {
    var fruits = []
    fruits.unshift('Pisang')
    fruits.push('Jeruk')
    console.log(fruits)
    fruits.splice(0,0,'Apel')
    fruits.splice(1,0,"Mangga")
    return fruits;
}
console.log(fruitOp())
