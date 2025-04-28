/*Actividad 4: Primer componente en React
Objetivo: Verificar si los estudiantes pueden crear un componente básico y
usar props.
Instrucciones:
1. Crear un componente llamado Saludo que reciba una prop nombre y muestre
un saludo personalizado.
<Saludo nombre="Martín" />
Debe renderizar: "Hola Martín"
Guía de Actividades Diagnósticas 2
1. Crear otro componente llamado Presentacion que reciba nombre , edad y
profesion , y renderice un párrafo con la información.
1. Crear otro componente llamado Presentacion que reciba nombre , edad y
profesion , y renderice un párrafo con la información.

*/

function Saludo(props){
    return <h1>Hola, {props.nombre}</h1>
}

<Saludo nombre="Martín"/>

function Presentacion(props){
    return <h1>Hola, me llamo {props.nombre}, tengo {props.edad} y soy {props.profesion}</h1>
}

<Presentacion nombre="Martín" edad="20" profesion="programador"/>
