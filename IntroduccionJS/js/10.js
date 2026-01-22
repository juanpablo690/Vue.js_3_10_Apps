//arrays o arreglos

const tecnologias = ['vue.js', 'javascript', 'node.js' , 'HTML', 'CSS']

//AÑADIR AL ARREGLO
tecnologias.push('git')

//añadir al inicio 
tecnologias.unshift('holi')

//eliminar elementos del arreglo 
tecnologias.pop()//elimina un elemento del final del arreglo 

//elimina el primer elemento del arreglo
tecnologias.shift()

//eliminar trayectos de elementos 
tecnologias.splice(2,1)//elimina solo un elemento pero si se deja solo el 2, elimina desde la pocicion 2 hasta el final

//un nuevo arreglo... falta un poco mas en este tema
tecnologias.filter(function(){

})

//crear un nuevo arreglo copiandolo de uno que queramos y agregamos un nuevo elemento
const nuevoArreglo = [...tecnologias , 'good']

console.table(tecnologias)
console.log(nuevoArreglo)