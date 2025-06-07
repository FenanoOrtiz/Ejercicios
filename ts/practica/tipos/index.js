"use strict";
//string
let myStringVar = "hola";
myStringVar = "Fernando";
console.log(myStringVar);
//numeros
let varNumber = 40;
console.log(varNumber);
//Boolean
let varBool = false;
console.log(varBool);
//Null   
let varNull = null;
console.log(varNull);
//Undefines
let varUndefined; //no necesita igualarse
console.log(varUndefined);
//FUNCIONES
function myName(nombre) {
    return `mi nombre es ${nombre}`;
}
//console.log(myName("Fernando"));
const miNombre = (nombre) => {
    return `mi nombre es ${nombre}`;
};
//console.log (miNombre("Juanito"))
let miNombreV2;
miNombreV2 = (name) => {
    console.log(name);
};
const aux = myName(myStringVar);
const aux2 = miNombre(myStringVar);
console.log(aux);
console.log(aux2);
miNombreV2("Carlos");
