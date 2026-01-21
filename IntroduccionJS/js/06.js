const producto = {
    nombre : "tablet",
    precio : 300,
    disponible : true
}

const cliente = {
    nombre : "Juan",
    premium: true
}

console.log(producto.nombre)
console.log(cliente.nombre)

//que pasa si le aplicamos destruction

const {nombre: nombreProducto} = producto //se renombran las variables nombre : y otro nombre distinto
const { nombre: nombreCliente} = cliente

console.log(nombreProducto)
console.log(nombreCliente)