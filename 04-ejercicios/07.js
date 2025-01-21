/*
*
* Crear algoritmo que devuelva
* el precio del producto
* más impuesto
*
* */

function precioCompleto(precio, impuesto) {
    let precioConImpuesto = precio + (precio * impuesto);
    return precioConImpuesto;
}

let resultado = precioCompleto(19.90, 0.15);
console.log(resultado);