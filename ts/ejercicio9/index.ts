//Crear una clase para representar una calculadora con métodos para
//  sumar,  restar, multiplicar y dividir.
class Calculadora {
   
    suma(num1:number,num2:number):number{
              return num1+num2
    }
       
       
    resta(num1:number,num2:number):number{
        return num1-num2
    }
    multiplica(num1:number,num2:number):number{
        return num1*num2
    }
    divide(num1:number,num2:number):number|string{
        if (num2!=0){
            return num1/num2
        }else{
            throw new Error('No se puede dividir por cero');
        }
        
    }


}
const miCalcu = new Calculadora()
console.log(miCalcu.suma(5,6))
console.log(miCalcu.resta(4,6))
console.log(miCalcu.multiplica(8,8))
console.log(miCalcu.divide(8,3))
