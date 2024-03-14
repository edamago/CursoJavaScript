function Usuario(nombre,direccion){
    this.nombre=nombre;
}

console.log(Usuario.name);
console.log(Usuario.length);

const S=Usuario;
let user=new S('Pepin');
console.log(user);

function of(Fnc,Arg){
    return new Fnc(Arg);
}

let userx=of(Usuario,'Gatito');
console.log(userx);

function retorned(){
    return function(){
        console.log('Hola Mundo');
    }
}

let saludo=retorned();
saludo();