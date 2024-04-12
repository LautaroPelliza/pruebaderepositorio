function retornar() {
    let a = 2;
    let b = 4;
    return a * b;
}

miFuncion(retornar());

function retornarString(){
    console.log("Uno");
    console.log("Dos");
    return "La funcion devuelve un string de texto"
}

let devuelvevalor = (retornarString())

console.log(devuelvevalor)

function saludar(nombre,edad) {
    console.log('Hola, mi nombre es' + nombre + ' y tengo ' + edad + ' años.');
}

saludar(nombre,edad);

const fucionExpresada = function(){
    console.log('Hola, soy una funcion expresada');
}

// Dont repeat yourself (crear una funcion con una tarea que usaremos repetitivamente)
// KISS (mantenerlo simple, desarmar el problema grande en muchos problemas pequenos)
// YAGNI (no codear algo que no vas a utilizar)

// PARAMETROS
function funcion(parametro1,parametro2) {
    console.log('Hola '+ parametro1 + ' ' + parametro2);
}

let parametro1 = 'Lautaro';
let parametro2 = 'Pelliza';

let resultados = 0;

function sumar(numeroA, numeroB) {
    resultado = numeroA + numeroB; 
}
//Una tarea por funcion
function mostrar(mensaje){
    console.log(mensaje);
}

sumar(6,3)

mostrar(resultado)

// Scope (alcance de una variable)
// Scope local (funcion,bloque), Scope global

let auto1 = 'Lambo';
var auto2 = 'Ferrari';
const auto3 = 'Audi';

function pasear() {
    let otroAuto = 'Mercedes';
    console.log('Paseando en el '+ otroAuto)
}

pasear()

// Es recomendable trabajar con scope reducido

let auto11 = 'Mercedes'; //Variable scope global

function pasear() {
    let auto2 = 'Lambo'; //Variable scope de funcion
    if(true){
        let auto3 = 'Ferrari'; //Variable scope de bloque
        console.log(auto3); 
    }
    console.log(auto2);
    console.log(auto11);
}

pasear();

// Funciones flecha


// Microdesafio punto 1

function sumar() {
    let numero1 = 5;
    let resultado = numero1 + 5;
    return resultado;
}

console.log(sumar());

// punto 2

let sumarArrow = (a,b) => a + b;

console.log(sumar(5,6));
