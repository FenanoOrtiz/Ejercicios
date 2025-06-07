


const helados = {
    palitoDeHelado: 0.6,
    palitoDeHeladoCrema: 1,
    bombomHeladix:1.6,
    bombonHeladocich:1.7,
    bombomHelardo:1.8,
    potecitoHelado: 2,
    poteCuarto:2.9
};

function alcanza(dinero){
    let opciones =[];
    let texto="";
    for(let helado  in helados){
        if(helados[helado]<=dinero){
            opciones.push(helado);
        }
    }
    if (opciones.length>0){
        
        texto  =`con este dinero: $${dinero} puesdes comprar ${opciones.join(", ")}`     
        return mostrar(texto);

    }else{
        texto = `con $${dinero} no te alcanza para nada, ¡lo siento!`;
        return mostrar(texto);
    }
}
function mostrar(texto){
    tablaPrecios="<br>Nuestros Precios <br>";
    for(let item in helados){
        tablaPrecios+= `${item}:${helados[item]}, <br>`
    }
    texto+=tablaPrecios;
    document.getElementById('demo').innerHTML=texto

}

let dineroUsuario1 = prompt ("Usuario 1, ¿Cuanto dinero tienes");

dineroUsuario1=parseFloat(dineroUsuario1);
alcanza(dineroUsuario1);