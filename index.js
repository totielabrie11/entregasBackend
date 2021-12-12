const Contenedor = require('./Contenedor');


const p1 = {
    title: "Escuadra",
    price: 123.45,
    thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
  }
  
const p2 = {
    title: "Calculadora",
    price: 234.56,
    thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
}
  
const p3 = {
    title: "Globo Terráqueo",
    price: 345.67,
    thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
}

async function main() {
    const contenedor = new Contenedor('./productos.txt');

    console.log('Muestro Todo');
    let objs = await contenedor.getAll();
    console.log(objs);

    console.log('Guardo Producto 1');
    let idp1 = await contenedor.save(p1)
    console.log('id de p1: ', idp1);

    console.log('Guardo Producto 2');
    let idp2 = await contenedor.save(p2)
    console.log('id de p2: ', idp2);

    console.log('Muestro Todo');
    objs = await contenedor.getAll();
    console.log(objs);

    console.log('Busco por ID');
    const res = await contenedor.getById(idp1);
    console.log('Resultado: ', res);

    console.log('Elimino por ID');
    const resSinId = await contenedor.delteById(idp1);
    console.log('Resultado: ', resSinId);

    console.log('Vacio todos los objetos');
    const resSinObject = await contenedor.delteAll();
    console.log('Resultado: ', resSinObject);
 
}

main()