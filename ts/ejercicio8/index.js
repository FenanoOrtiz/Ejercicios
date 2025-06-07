//Crear una interfaz para representar un rectángulo
//  y una función que calcule su área.
var area = function (rectangulo) {
    var area = rectangulo.alto * rectangulo.ancho;
    console.log("el area del rectangulo es ".concat(area));
};
var rect1 = { ancho: 10, alto: 5 };
var rect2 = { ancho: 8, alto: 6 };
area(rect1);
area(rect2);
