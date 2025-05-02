// https://developer.mozilla.org/es/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects

// https://developer.mozilla.org/es/docs/conflicting/Learn/JavaScript/Objects/Classes_in_JavaScript

/*
function Person(first, last, age, gender, interests) {
  this.name = {
    'first': first,
    'last' : last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
   
  this.bio = function() {
    let string = `su nombre es:${this.name.first} ${this.name.last} su edad: ${this.age}`;
    let pronombre;
    if(this.gender==='Masculino'||this.gender==='masculino'||this.gender==='M'||this.gender==='m'){
        pronombre= " a el le gusta: ";
    }else if(this.gender==='Femenio'||this.gender==='femenino'||this.gender==='F'||this.gender==='f'){
      pronombre= " a ella le gusta: ";
    }else{
      pronombre= "sus gustos son: ";
    }
    string+=pronombre;
    if(Array.isArray(this.interests)){
      if(this.interests.length===1){
          string+=this.interests[0];
      }else if(this.interests.length===2){
        string+= this.interests[0]+' y '+ this.interests[1];
      }else{
        for (let index = 0; index < this.interests.length; index++) {
          if(index===this.interests.length-1){
              string+=` y ${this.interests[index]}`
          }else{
            string+=`${this.interests[index]}, `;
          }
          
        }
      }
          
    }else{
      string+=this.interests;
    }
    
    alert(string);
  };
 
  this.greeting = function() {
    alert('Hi! I\'m ' + this.name.first + '.');
  };
}

let legusta = ["bailar","comer","estudiar","leer"];
let persona1 = new Person('Fernando', 'Ortiz', 52, 'f', legusta);
persona1.nacionalidad= "Colombiano";

persona2 = new Person("Juan", "Crux", 42, "Masculino", legusta);
persona2.nacionalidad= "Peruano";

persona2.bio();
*/
// SOLUCION AL EJERCICIO BAJADA DE COPILOT
/*
function deepClone(objeto) {
  if (objeto === null || typeof objeto !== 'object') {
      return objeto; // Si no es un objeto, devolverlo tal cual
  }

  const newObjeto = Array.isArray(objeto) ? [] : {}; // Crear nuevo array u objeto

  for (const key in objeto) {
      if (objeto.hasOwnProperty(key)) {
          newObjeto[key] = deepClone(objeto[key]); // Copiar recursivamente
      }
  }

  return newObjeto;
}

// Ejemplo de uso:
const original = {
  a: 1,
  b: { c: 2, d: { e: 3 } }
};

const cloned = deepClone(original);
console.log(cloned);*/

function copiarObjeto(objeto){
  if(objeto===null||typeof objeto !== 'object'){
    return objeto;
  }
  let nuevo;
  if (Array.isArray(objeto)){
    nuevo = [];
  }else{
    nuevo = {};
  }
  for(const dato in objeto){
    if(objeto.hasOwnProperty(dato)){
      nuevo[dato]=copiarObjeto(objeto[dato]);
    }
  }
  return nuevo;
}

const carro = {
  placa : "KQN968",
  propietario:{
      nombre:"Fernando Ortiz",
      cedula: [4,7,8,9,0]
  }
};
const nuevo = copiarObjeto(carro);
console.log(copiarObjeto(carro));