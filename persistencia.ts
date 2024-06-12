import fs from "node:fs"

const precios : number[] =[525, 3500, 400, 1999];

const productos : string[] = [`Leche`, `Galletitas`, `Harina`, `Queso`];

// manipulacion de lista: "precios"
let contenido : string = ``

for (let i = 0; i < precios.length; i++) {
    precios.toString;
    contenido += `${precios[i]} `;
}
fs.writeFileSync('./precios.txt', contenido);

const recuperacionDeDatos: string = fs.readFileSync('./precios.txt', "utf8");

// cree esta funcion para no repetir codigo al manipular la segunda lista.
function convertirEnArray(recuperacionDeDatos:string) {
    let sinEspacios : string = recuperacionDeDatos.trim();
    let listaRecuperada : string[]= sinEspacios.split(` `);
    return listaRecuperada
}


console.log(contenido);
console.log(convertirEnArray(recuperacionDeDatos));



// manipulacion de lista: "productos"

let datos: string = ``

for (let i = 0; i < productos.length; i++) {
    datos += `${productos[i]} `;
}

fs.writeFileSync('./productos.txt', datos);

const infoRecuperda: string = fs.readFileSync('./productos.txt', "utf8");

convertirEnArray(infoRecuperda)


console.log(datos);
console.log(convertirEnArray(infoRecuperda));
