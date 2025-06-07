class Rectangulo {
  constructor(alto, ancho) {
    this.nombre = "Rectangulo";
    this.alto = alto;
    this.ancho = ancho;
  }
	area(a, b) {
		if (a == undefined && b == undefined) {
			let area = (this.alto * this.ancho) / 2;
			return area;
		} else if(a!=undefined&&b==undefined){

			let area = a * this.ancho / 2
			return area;
		}else{
			let area=a*b/2;
			return area;
		}
	}
 
}

class RectColor extends Rectangulo {
  constructor(alto, ancho, color) {
    super(alto, ancho);
    this.nombre = "Rectangulo Color";
    this.color = color;
  }
}

const rectanguloColor1 = new RectColor(5, 10, "azul");
console.log(rectanguloColor1.area());


class Animal {
	constructor(nombre) {
		this.nombre = nombre;
	}
	caminar() {
		console.log(`${this.nombre} está caminando.`);
	}
}
class Perro extends Animal {
	constructor(nombre, raza) {
		super(nombre);
		this.raza = raza;
	}
	ladrar() {
		console.log(`${this.nombre} está ladrando.`);
	}
}
let max = new Perro('Max', 'Labrador');
max.ladrar();

console.log(rectanguloColor1.nombre);