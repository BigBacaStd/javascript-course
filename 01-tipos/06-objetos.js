// Personaje de tv

let nombre = "Vegeta";
let anime = "Dragon Ball Z";
let edad = 27;

let personaje = {
    nombre: "Vegeta",
    anime: "Dragon Ball Z",
    edad: 27,
};
console.log(personaje);
console.log(personaje.nombre);
console.log(personaje["anime"]);

personaje.edad = 18;

personaje["edad"] = 36;

delete personaje.anime;

console.log(personaje);