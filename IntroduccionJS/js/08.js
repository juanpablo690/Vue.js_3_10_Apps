//template strings o concatenacion

const cliente = "juan"
const saldo = 400
//diferentes formas de conccatenar
console.log('El cliente : ' + cliente + 'tiene un saldo de : '+ saldo)
console.log('El cliente : ', cliente, 'tiene un saldo de : ',saldo)
console.log(`El cliente: ${cliente} tiene un saldo de: ${saldo}`) 


//ejemplo con un objeto
const producto = {
    nombre : "tablet",
    precio : 300,
    disponible : true
}

console.log(`el producto: ${producto.nombre} y su saldo es : ${producto.precio} `)

