const producto = {
    nombre : "tablet",
    precio : 300,
    disponible : true
}

const cliente = {
    nombre : "Juan",
    premium: true
}

//unir producto y cliente en un solo objeto

const nuevoObjeto = Object.assign(cliente,producto)//sirve pero en este caso solo aparece un solo nombre y es el ultimo
console.log(nuevoObjeto)

//una mejor opcion seria 
const nuevoObjeto1 = {//esta opcion manda un objeto con dos objeos adentro
    producto,
    cliente
}
console.log(nuevoObjeto1)