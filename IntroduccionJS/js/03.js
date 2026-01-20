// tipos de datos 

//undefined - indefinido 
let cliente
console.log(typeof cliente)

const descuento = true 
console.log(typeof descuento)

//number
const numero1 = 20.30
const numero2 = 30
const numero3 = -200

console.log(typeof numero1)
console.log(typeof numero2)
console.log(typeof numero3)

//Strings o cadenas de texto
const alumno = "juan"
console.log(typeof alumno)


const numeroGrande = BigInt(76230487560984301928)
console.log(typeof numeroGrande)

//symbols - los symbol siempre son unicos, nuca van a ser iguales
const primersymbol = Symbol(10)
const segundosymbol = Symbol(10)

console.log(primersymbol === segundosymbol)

//objetct 
const numero = [1,2,3]
const descuento1 = null
const alumno3 = {}
console.log(typeof numero)
console.log(typeof descuento1)
console.log(typeof alumno3)
