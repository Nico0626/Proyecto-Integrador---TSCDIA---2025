/*Actividad 6: Profundización en métodos de arrays (map,filter,
    reduce)
    Objetivo: Fortalecer el dominio de métodos funcionales modernos para
    transformar, filtrar y reducir datos.
    Instrucciones:
    Dado el siguiente array de objetos:
    const productos = [
     { nombre: "Notebook", precio: 1200 },
     { nombre: "Mouse", precio: 20 },
     { nombre: "Teclado", precio: 50 },
     { nombre: "Monitor", precio: 300 },
    Guía de Actividades Diagnósticas 3
     { nombre: "Auriculares", precio: 80 },
    ];
    1. Usar filter para obtener solo los productos cuyo precio sea mayor a 100.
    2. Usar map para obtener un nuevo array de strings con el siguiente formato:
    "Notebook: $1200"
    3. Usar reduce para calcular el precio total de todos los productos.
    4. Combinar filter y map para obtener los nombres de los productos que
    cuesten menos de 100, todo en minúsculas.
*/    
const productos = [
    { nombre: "Notebook", precio: 1200 },
    { nombre: "Mouse", precio: 20 },
    { nombre: "Teclado", precio: 50 },
    { nombre: "Monitor", precio: 300 },
    { nombre: "Auriculares", precio: 80 },
  ];
const productosCaros = productos.filter(producto => producto.precio > 100);
console.log(productosCaros);

const productosFormateados = productos.map(producto => `${producto.nombre}: $${producto.precio}`);
console.log(productosFormateados);

const precioTotal = productos.reduce((total, producto) => total + producto.precio, 0);
console.log(precioTotal);

const productosBaratos = productos
  .filter(producto => producto.precio < 100)
  .map(producto => producto.nombre.toLowerCase());
  
console.log(productosBaratos);

