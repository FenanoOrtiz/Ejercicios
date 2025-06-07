/*
function crearPersona(nombre, edad) {
    return {
      nombre,
      edad,
      saludar() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
      }
    };
  }
  
  const persona1 = crearPersona("Fernando", 30);
  persona1.saludar(); // Hola, soy Fernando y tengo 30 años.
  */
/*Solucion Ademas
function crearAnimal(nombre) {
let animal = {};
animal.nombre = nombre;
animal.caminar = function() {
console.log(`${this.nombre} está caminando.`);
};
return animal;
}
let perro = crearAnimal('Max');*/





  function crearCarro(placa, propietario, modelo){
    let carro ={};
    carro.placa = placa;
    carro.propietario = propietario;
    carro.modelo = modelo;
    carro.encender = function(){
      console.log(`el vehiculo de placas ${carro.placa} esta encendido`);
    };
    return carro;
  };

  const carro1 = crearCarro("bb22", {nombre:"Fernando", Apellido:"ortiz"}, 2020);

  console.log(carro1.encender());

  