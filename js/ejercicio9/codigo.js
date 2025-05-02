let colores=["amarillo","rojo","verde","azul","blanco","negro"];
let text="";
for (const color of colores) {
    console.log(color);
    const item = document.createElement("P");
    item.innerHTML=color
    document.getElementById('colores').appendChild(item);
}
