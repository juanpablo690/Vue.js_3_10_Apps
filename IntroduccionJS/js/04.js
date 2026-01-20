//objetos son una coleccion de propiedad 
//asociacion de un nombre y una clave 

const nombreProducto = "tablet"
const precioProducto = 300
const disponible = true

const producto = {
    nombre : "tablet",
    precio : 300,
    disponible : true
}
console.log(producto)
// mostrarlo como table seria
console.table(producto)
//acceder a la clave 
console.log(producto.nombre)

//destructuring - sacar de una estuctura
const { nombre } = producto
console.log(nombre)


//objet literal enhacement
const autenticado = true
const usuario ="juan"

const nuevoObjeto = {
    autenticado : autenticado,
    usuario : usuario
}
console.log(nuevoObjeto)
