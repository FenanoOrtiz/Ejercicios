let num = Array.from("12345");

console.log(num);

let num1 = num.map(Number);

console.log(num1);

//la respuesta del ejercicio es la siguiente

let numeros = Array.from({length:5},(_,index)=>index+1);

console.log(numeros);

numeros = Array.from({length:5},(_,index)=>index);

console.log(numeros);

let miSet = new Set();



miSet.add(4);
miSet.add(43);
miSet.add(3);
miSet.add(32);
miSet.add(4);

console.log(miSet);
console.log(miSet.has(5));

let cc88205852 = {nombre:"Fernando", apellido: "Ortiz", telefono:3016456036};
let cc88251815 = {nombre:"Victor", apellido: "Cogollo", telefono:3165283560};
let cc13509388 = {nombre:"Nelson", apellido: "Ortiz", telefono:3229517001};
let cc9089993 = {nombre:"Jorge", apellido: "Barrios", telefono:3005241523};
let cc9000000 = {nombre:"Alexander", apellido: "Ortega", telefono:3002222111};

let empleados = new Set();

empleados.add(cc88205852);
empleados.add(cc13509388);
empleados.add(cc88251815);
empleados.add(cc9000000);
empleados.add(cc9089993);

console.log(empleados);

let datoBuscado = "Fernando";

let arrayEmpleados = Array.from(empleados);
console.log(arrayEmpleados);

const dato = arrayEmpleados.find((elemento)=>elemento.nombre == datoBuscado);
console.log(dato);

//generar secuencias de numeros con array.from, el valor (d,i) d no se utiliza
// sera undefined 

let miArray = Array.from({length:10},(d,i)=>i)
console.log(miArray);// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


/*esta funcion range permite realizar un array de numeros con u paso y
rango determinado*/
const range = (start, stop, step) =>Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);
//star en 1, termine en 20, de 2 en 2 el i es el index o indice del array
//lo siguiente hace lo mismo de la funcion flecha range solo que incluimos
//los datos de forma manual
// el length debe ser la cantidad de datos que va a contener la secuencia
// ==> 0+i*2 el cero es donde inicia el array y el 2 son los pasos que tien 
let arrayRange1 = range(1,20,2);
console.log(arrayRange1);//[1, 3, 5, 7, 9, 11, 13, 15, 17, 19]


miArray = Array.from({length:5},(_,i)=>0+i*5);
 console.log(miArray);//[0, 5, 10, 15, 20]

 miArray = Array.from({length:5},(_,i)=>3+i*3);
 console.log(miArray);//[3, 6, 9, 12, 15]


