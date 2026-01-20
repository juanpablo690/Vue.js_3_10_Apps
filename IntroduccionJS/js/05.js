const producto = {
    nombre : "tablet",
    precio : 300,
    disponible : true
}
console.log(producto)
Object.freeze(producto)//obliga a que mi objeto no se pueda modificar



//reecribir un valor
producto.nombre = "monitor Curvo"
console.log(producto)


//añadir un valor
producto.imagen = "imagen.jpg"
console.log(producto)

//eliminar 
delete producto.disponible
console.log(producto)