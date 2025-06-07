//Crear una clase para representar un estudiante con propiedades 
// como nombre, edad y promedio, y un método para determinar 
// si el estudiante aprobó (promedio mayor o igual a 60).

class Estudiante{
    nombre:string;
    edad:number;
    promedio:number;
    constructor(nombre:string,edad:number,promedio:number){
        this.nombre=nombre;
        this.edad=edad;
        this.promedio=promedio
    }
    aprobo():string{
        if(this.promedio>60){
            return `El estudiante ${this.nombre} 
            con edad de: ${this.edad}
            aprobo con un promedio de: ${this.promedio} `
        }else{
            return `El estudiante ${this.nombre} 
            con edad de: ${this.edad}
            No aprobo porque su promedio fue: ${this.promedio} `
        }
    }
}

const estudiante1 = new Estudiante("fernando",26, 60);
console.log(estudiante1.aprobo())
/*
la solucion ademas difiere con la mia solo en la forma de hacer
la funcion
aprobo(): boolean {
return this.promedio >= 60;
}
la hace solo que retorne falso o veradero
*/