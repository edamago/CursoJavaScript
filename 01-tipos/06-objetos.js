//personaje de tv

let nombre='goku';
let anime='saga de goku';
let edad=16;

let personaje={
    nombre:'goku',
    anime:'saga goku',
    edad:16
};

console.log(personaje);
console.log(personaje.anime);
console.log(personaje['nombre']);

personaje.nombre='nuevo npmbre';
console.log(personaje.nombre);

let campo='nombre';

personaje[campo]='nuevo nuevo';
console.log(personaje.nombre);

delete personaje.anime;
console.log(personaje);