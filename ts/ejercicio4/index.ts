//Crear una clase para representar un vehículo y su 
// método para obtener la velocidad actual.

class Carro{
    placa:string;
    tipo:string;
    marca:string;
    modelo:number;
    //velocidad:number;//en mi solucion la velociada la solicite como parametro
    constructor (placa:string,tipo:string,marca:string,modelo:number,velocidad:number){
        this.placa=placa;
        this.tipo=tipo;
        this.marca=marca;
        this.modelo= modelo;
       // this.velocidad=velocidad
    }
    muestraVelocidad(vel:number):void{
        console.log (`Su velocidad actual es:${vel} Klm/hora`)
    }
    /*yo lo hice asi pero la solucion es como se muestra aunque esta tambien funciona
    velodidad(vel:number):void {
        console.log (`su velocidad actual es ${vel}`)
    }*/

}

const pichirilo = new Carro("BUW946","SEDAN","RENAULT",1998,80);
console.log(pichirilo)
pichirilo.muestraVelocidad(80)