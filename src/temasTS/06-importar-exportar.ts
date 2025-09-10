import { Producto, calcularISV2 } from "./05-destructura-funciones";

const carrito: Producto[] = [
    { nombre: 'tableta', precio: 1500 },
    { nombre: 'IPHONE', precio: 1500 },
    { nombre: 'audifonos', precio: 1500 }
];

const [total, isv] = calcularISV2(carrito);

console.log('Total:', total);
console.log('ISV:', isv);
