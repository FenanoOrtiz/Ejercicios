let nombres =["paula", "Sofia","claudia","Ernesto"];

document.getElementById('entrada').innerHTML=`Array original: [${nombres}]`;

let nombreMayuscula = nombres.map(nombre=>nombre.toUpperCase());
  
document.getElementById('salida').innerHTML=`Array Resultado: [${nombreMayuscula}]`;
console.log(nombreMayuscula);