"use strict";
/* Preguntar nombre al usuario y saludarlo por su nombre. */
/*
const nombre = prompt('Por favor ingrese su nombre:');
alert('Hola, ' + nombre);
*/

/*Preguntar nombre al usuario y saludarlo por su nombre. Si el usuario no escribe su nombre saludar: "Hola, desconocido"

const nombre = prompt("Escriba su nombre");

if  (nombre){
    document.write("Hola," + nombre);

} else {

    document.write("Hola desconocido");

}*/

/* 1. Leer nombre y apellido, saludar por nombre y apellido.
const nombre = prompt("Por favor escriba su Nombre");
const apellido = prompt("Por favor escriba su Apellido");

    document.write("Hola," + " " + nombre + " " + apellido);
*/
/* 2. Pregunte al usuario si desea continuar, responder con hola o adiós.
const siono = confirm("Desea continuar?");

if(siono == true){
    alert("Hola");
}else{
    alert("Adios");
}
*/
/* 3. Leer nombre y edad, Mostrar si es o no mayor de edad.
const nombre = prompt ("Por favor ingrese su nombre");
const edad = prompt ("Por favor ingrese su edad");

console.log(Number(edad));

if(edad>=18){
    document.write("Hola" + " " + nombre + "," +" " + "usted es mayor de edad");
}else if (edad<18){
    document.write("Hola" + " " + nombre + "," +" " + "ud es menor de edad");
}
*/
/* 5. Leer un número, mostrar el doble de n.
const numero = prompt("Ingrese un número");

console.log(Number(numero));

let doble = (numero*2);

document.write("El doble de su número es " + doble);
*/
/* 6. Leer un número, mostrar la mitad de n.
const numero = prompt("Ingrese un número");

console.log(Number(numero));

let mitad = (numero/2);

document.write("La mitad de su número es " + mitad);
*/

/* 7. Leer un número, mostrar si es positivo, negativo o cero.
const numero = prompt("Ingrese un número");

console.log(Number(numero));

if(numero == 0){

    alert("Su número es 0");

}else if(numero > 0){

    alert("Su número es positivo");

}else {

    alert ("Su número es negativo");
}
*/
/* 8. Leer un número, mostrar si es par o impar.
const numero = prompt("Ingrese un número");

console.log(Number(numero));

if (numero % 2) {
    
    alert("Su número es impar");
    
} else {

    alert("Su número es par");
       
}
*/
/* 9. Leer dos números, mostrar el mayor.
const numero1 = prompt("Ingrese su primer número");
const numero2 = prompt("Ingrese su segundo número");

console.log(Number(numero1,numero2));

if (numero1 > numero2) {

    alert("El número mayor es," + " " + numero1);
    
} else if(numero1 < numero2) {

    alert("El número mayor es," + " " + numero2);
    
}
*/

const numero1 = prompt("Ingrese su primer número");
const numero2 = prompt("Ingrese su segundo número");

console.log(Number(numero1));
console.log(Number(numero2))

let suma = (numero1 + numero2);
let resta = (numero1 - numero2);
let mult = (numero1 * numero2);
let divi = (numero1 / numero2);
let modu = (numero1 % numero2); 

alert( "La suma de sus numeros es:" + " " + suma  
 + "\nLa resta de sus numeros es:" + " " + resta+ "\nLa multiplicacion de sus numeros es:" + " " + mult);
