//Crear una clase para representar un vehículo y su 
// método para obtener la velocidad actual.
var Carro = /** @class */ (function () {
    //velocidad:number;//en mi solucion la velociada la solicite como parametro
    function Carro(placa, tipo, marca, modelo, velocidad) {
        this.placa = placa;
        this.tipo = tipo;
        this.marca = marca;
        this.modelo = modelo;
        // this.velocidad=velocidad
    }
    Carro.prototype.muestraVelocidad = function (vel) {
        console.log("Su velocidad actual es:".concat(vel, " Klm/hora"));
    };
    return Carro;
}());
var pichirilo = new Carro("BUW946", "SEDAN", "RENAULT", 1998, 80);
console.log(pichirilo);
pichirilo.muestraVelocidad(80);
