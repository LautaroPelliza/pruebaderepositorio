// let tiempo = "lluvioso";

// if(tiempo=="lluvioso"){
//     console.warn('Llevar paraguas');
// }else{
//     console.log('Salir con remera');
// }

// let edadMinima = 18;

// //Operadores condicionales
// if(edadMinima <= 18) {
//     console.warn('Vuelve a tu casa');
// }else if(edadMinima >= 18){
//     console.log('Puede entrar al boliche');
// }
// //Operadores 
// let lenguajeRequerido = 'javaScript';
// let idiomaRequerido = 'frances';

// if(((lenguajeRequerido=='javaScript')&&(idiomaRequerido=='ingles'))||(idiomaRequerido=='frances')){
//     console.log('Puede acceder al puesto');
// }else{
//     console.warn('Debes cumplir con los requerimientos para postularte');
// }

//1. Crea un algoritmo que a partir de la respuesta del usuario pueda determinar Cuántos mundiales vivió una persona.
// Ten en cuenta que se juega un mundial cada 4 años y que se han jugado 22 copas del mundo.

// let edad = parseFloat(prompt('Ingrese su edad: '));
// const wc = 4;
// const wcPlayed = 22;

// if (edad >= 92) {
//     console.warn('Has visto todos los mundiales')
// }else{
//     let wcVividos = edad / wc;
//     console.log('Mundiales vividos: ' + wcVividos);
// };

//Iteracion
//i empieza en 0 y llega hasta 10 i++ es un incremento
// for (let i = 0; i < 10; i++) {
//     // console.log('Iteracion Nro: ' + i); 
//     if(i==5){
//         // console.warn("Iteracion interrumpida en el ciclo", i,"por la clausula BREAK.");
//         // break;//Finaliza el ciclo
//         console.warn("Iteracion No.", i, "salteada por la clausula CONTINUE.");
//         continue;
//     }
//     alert(i);
// }
//el ciclo guarda el resultado que no muestra

// let i = 1;
// while (i < 6){
//     console.log("Iteracion Nro: ", i);
//     i++;
// }

// let numero = 0;

// do{
//     numero = prompt("Ingresar un numero: ");
//     console.log(numero);
// }while (parseInt(numero))
//do while primero ejecuta y despues valida

// let i = 7;

// while (i<6) {
//     console.log('Iteracion Nro: ',i);
//     i++;
// }
// while primero valida y despues ejecuta

//SWITCH
// let tiempo = prompt('Como esta el tiempo en tu ciudad? lluvioso, soleado, ventoso, nevando');
// switch (tiempo) {
//     case 'lluvioso':
//         alert('Llevar paraguas')
//         break;
//     case 'soleado':
//         alert('Tomar mucha agua')
//         break;
//     case 'ventoso':
//         alert('No dejar ventanas abiertas')
//         break;
//     case 'nevando':
//         alert('Pelea de bolas de nieves!')
//         break;
//     default:
//         alert('Introduciste una opcion no valida')
//         break;
// }


// //Algoritmo simple y algoritmo condicional

// let entrada = prompt('INGRESA UN NOMBRE')
// let nombre = 'BART'

// if(entrada==nombre){
//     alert('FUI YO');
// }else{
//     alert('YO NO FUI')
// }

// let numeroPersonaje = prompt('INGRESA UN NUMERO');

// if (numeroPersonaje == '1'){
//     alert('ELEGISTE A HOMERO')
// }else if (numeroPersonaje == '2'){
//     alert('ELEGISTE A MARGE')
// }else if (numeroPersonaje == '3'){
//     alert('ELEGISTE A BART')
// }else if (numeroPersonaje == '4'){
//     alert('ELEGISTE A LISA')
// }else{
//     alert('ERROR')
// }
// let numeroPersonaje = prompt('Ingresa un numero');
// switch (key) {
//     case '1':
//         alert('ELEGISTE A HOMERO');
//         break;
//     case '2':
//         alert('ELEGISTE A MARGE');
//         break;
//     case '3':
//         alert('ELEGISTE A BART');
//         break;
//     case '4':
//         alert('ELEGISTE A LISA');
//         break;
//     default:
//         alert('ERROR');
//         break;
// }

// let cantidad = parseInt(prompt('Ingrese la cantidad de repeticiones'))

// let texto = prompt('Ingresar texto a repetir')

// for(let i=0; i<cantidad;i++){
//     console.log(texto);
// }

// console.log('Espero haberlos iluminado. Gracias, vuelvan pronto!')

// let cantidad = prompt('INGRESE CANTIDAD DE REPETICIONES');
// let texto = prompt('INGRESE TEXTO A REPETIR');
// for (let index = 0; index < cantidad; index++) {
//     console.log(texto);
// }
// // ¿Qué tiene que hacer este código?
// // Este codigo deberia dejar que el usuario decida cuantas veces se ejecuta el ciclo for, y repetir el texto que el usuario ingrese la cantidad de veces que el usuario desee
// // ¿Por qué no cumple con su función?
// // No cumple su funcion porque en la declaracion de las variables no se incluyo el aumento del indice por lo que se crea un ciclo infinito

// let lados = prompt('INGRESE CANTIDAD DE LADOS');
// for (let index = 0; index < lados; index++) {
// if (index > 3) {
//     alert("lado");
// }}

//.tolowercase

// Crea un algoritmo que le pida al usuario que ingrese un número y luego evalúe si ese número es par o impar.

// let num = parseInt(prompt('Ingrese un numero: '))

// if (num % 2 === 0){
//     alert('El numero '+ num + ' es par')
// }else{
//     alert('El numero '+ num + ' es impar')
// }

// Crea un algoritmo que le pida al usuario un número y luego utiliza while para evaluar
// cuántos números son pares y cuantos impares, hasta que el usuario ingrese "salir".

let entrada = prompt('Ingrese un numero: ');
let numerosPares = 0;
let numerosImpares = 0;

while(entrada != "" && entrada.toLowerCase() != 'salir'){
    if (parseInt(entrada) % 2 === 0){
        numerosPares += 1
        alert("Es par!")
    }else{
        numerosImpares += 1
        alert("Es impar!")
    }
    entrada = prompt('Ingrese un numero: ');
}

alert("La cantidad de numeros pares es: "+ numerosPares)
alert("La cantidad de numeros pares es: "+ numerosImpares)