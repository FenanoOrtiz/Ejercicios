//Crear una clase para representar una calculadora con métodos para
//  sumar,  restar, multiplicar y dividir.
var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    Calculadora.prototype.suma = function (num1, num2) {
        return num1 + num2;
    };
    Calculadora.prototype.resta = function (num1, num2) {
        return num1 - num2;
    };
    Calculadora.prototype.multiplica = function (num1, num2) {
        return num1 * num2;
    };
    Calculadora.prototype.divide = function (num1, num2) {
        if (num2 != 0) {
            return num1 / num2;
        }
        else {
            throw new Error('No se puede dividir por cero');
        }
    };
    return Calculadora;
}());
var miCalcu = new Calculadora();
console.log(miCalcu.suma(5, 6));
console.log(miCalcu.resta(4, 6));
console.log(miCalcu.multiplica(8, 8));
console.log(miCalcu.divide(8, 3));
