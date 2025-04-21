// ejercicio 1:Escribe un código que declare una variable llamada 'num' y le asigne el valor '10' 
/*let num = 10;
console.log(num);
*/
//ejercicio 2: ¿Cómo se declara una función llamada saludar que imprima '¡Hola mundo!'' en la consola?
/*
function saludar() {
    nombre = prompt("Tu nombre es?");
    console.log("hola "+nombre+", ¿Como estas?");
    
}
saludar();
*/
//ejercicio 3:
//¿Cómo se declara un array llamado 'frutas' que contenga las cadenas 'manzana', 'banana' y 'naranja'?
/*
let frutas = ["manzana", "banana", "Naranja"];
document.write(frutas+"<br>");
*/
//ejercicio 4:
//Escribe un código que utilice un bucle for para imprimir los números del '1 al 5' en la consola.
/*
for(let i = 1; i <= 5; i++){
    console.log(i)
}
*/    
//ejercicio 5:
//¿Cómo se utiliza el método 'push()'' para agregar el número '6' al final de un array llamado numeros?
/*
let numeros =[4,5, 9 ,7 ,2];
numeros.push(6);
console.log(numeros);
*/
//en este ejercicio muestro los array y a cada nombre le doy un color aleatorio tambien muestro el
//valor en rga de cada color
document.addEventListener("DOMContentLoaded", () => {
    let array1 = ["maria", "josefa", "roberta", "pablo", "luisa", "duvan"];
    let array2 = ["pedro", "marcelo", array1, "juan", "bray", "Bartolo"];
    const contenedor = document.querySelector(".contenedor");
    const fragment = document.createDocumentFragment();
    const colorRamdon = ()=>{
        let color = `#${Math.floor(Math.random()* 16777215).toString(16)}`;//genera numero aleatorio para el color
        return color;
        //Math.floor :redondea a un numero entero
        //Math.ramdon :genera un numero entre 0 y 1 
        //se multiplica por 16777215 maximo valor de un color cuando utilizamos RGB #FFFFFF
        //.toString(16)convertimos en hexadecimal
    }
    for (let dato in array2) {

        if (dato == 2) {
            for (let dato1 of array1) {
                let color = colorRamdon();
                const item = document.createElement("P");
                item.innerHTML = dato1+" "+color;
                item.style.backgroundColor=color;
                item.style.width= "200px";
                fragment.appendChild(item);
            }
        }else{
            const item = document.createElement("P");
            let color=colorRamdon();
            item.innerHTML = array2[dato]+" "+color;
            item.style.backgroundColor=color;
            item.style.width= "200px";
            fragment.appendChild(item);
        }
    }
    contenedor.appendChild(fragment);
    //hacer que salga en cada p el numero del color en hexadecimal
})
