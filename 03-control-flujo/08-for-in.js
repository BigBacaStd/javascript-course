let user = {
    id: 1,
    name: 'Don Polo',
    age: 35,
};

for (let prop in user) {
    console.log(prop, user[prop]);
}

let animales = ['perro', 'gato', 'oso'];

for (let indice in animales) {
    console.log(indice, animales[indice]);
}