//Actividades
//Actividad 1: Fundamentos de JavaScript
//Objetivo: Evaluar el manejo de variables, tipos de datos, funciones y
//estructuras básicas.
//Instrucciones:
//1. Escribir un programa que: 
//Declare dos variables ( nombre y edad ) Imprima un mensaje como: "Hola, me llamo Ana y tengo 22 años."
//2. Dado el siguiente array: const numeros = [3, 7, 12, 5, 2];
//Usar map para generar un nuevo array con los números al cuadrado. Usar filter para obtener los números mayores a 5.
//1. Escribir una función flecha que reciba un número y devuelva si es par o impar
let nombre="nico";
let edad=20;
console.log(`hola, me llamo ${nombre} y tengo ${edad} años`);

const numeros = [3, 7, 12, 5, 2];

const cuadrados=numeros.map(x=>x**2);
console.log (cuadrados);

const filtrados=cuadrados.filter(x => x % 2 === 0);
console.log(filtrados);