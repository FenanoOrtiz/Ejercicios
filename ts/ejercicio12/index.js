//Crear una clase para representar un estudiante con propiedades 
// como nombre, edad y promedio, y un método para determinar 
// si el estudiante aprobó (promedio mayor o igual a 60).
var Estudiante = /** @class */ (function () {
    function Estudiante(nombre, edad, promedio) {
        this.nombre = nombre;
        this.edad = edad;
        this.promedio = promedio;
    }
    Estudiante.prototype.aprobo = function () {
        if (this.promedio > 60) {
            return "El estudiante ".concat(this.nombre, " \n            con edad de: ").concat(this.edad, "\n            aprobo con un promedio de: ").concat(this.promedio, " ");
        }
        else {
            return "El estudiante ".concat(this.nombre, " \n            con edad de: ").concat(this.edad, "\n            No aprobo porque su promedio fue: ").concat(this.promedio, " ");
        }
    };
    return Estudiante;
}());
var estudiante1 = new Estudiante("fernando", 26, 60);
console.log(estudiante1.aprobo());
