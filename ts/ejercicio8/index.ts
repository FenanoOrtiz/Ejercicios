//Crear una interfaz para representar un rectángulo
//  y una función que calcule su área.

// Definimos una interfaz genérica con un tipo <T>
interface IRectangulo{
    ancho:number;
    alto:number;
}

const area = (rectangulo:IRectangulo):void=>{
    let area = rectangulo.alto*rectangulo.ancho
    console.log(`el area del rectangulo es ${area}`) 
}

const rect1:IRectangulo={ancho:10,alto:5};
const rect2:IRectangulo={ancho:8,alto:6};

area(rect1)
area(rect2)


//solucion Ademass (algunas diferencias pero basicamente esta bien)
/*
interface Rectangulo {
base: number;
altura: number;
}

function calcularAreaRectangulo(rectangulo: Rectangulo): number {
return rectangulo.base * rectangulo.altura;
}

const miRectangulo: Rectangulo = {
base: 5,
altura: 10
};

console.log(calcularAreaRectangulo(miRectangulo)); // Salida: 50*/ 