function suma (a, b){
    console.log(arguments); // Muestra todos los argumentos enviados a la función
    return a + b;
}

let resultado = suma(5, 6, 1, 2, 3);
console.log(resultado);
console.log(typeof suma);