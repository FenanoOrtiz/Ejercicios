"use strict";
// Crear una función que sume dos números.
/*

function suma(a:number,b:number):void{
    let result:number = a+b
    console.log (`la suma ${a} + ${b} = ${result}`)
}

suma(4,15)*/
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
/*
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Por favor, ingresa un número: ', (respuesta) => {
  const numero = parseFloat(respuesta);
  if (!isNaN(numero)) {
    console.log(`Has ingresado el número: ${numero}`);
  } else {
    console.log('Eso no es un número válido.');
  }
  rl.close();
});*/
var leer = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
leer.question("por favor, ingrese un numero: ", function (res) {
    var num1 = parseFloat(res);
    leer.question("ingrese el segundo numero: ", function (res) {
        var num2 = parseFloat(res);
        if (!isNaN(num1) || isNaN(num2)) {
            var suma = num1 + num2;
            console.log("resultado es:" + suma);
        }
        else {
            console.log("digite numero validos");
        }
        leer.close();
    });
});
