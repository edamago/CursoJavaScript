const user={id:1};
//las constantes no se pueden cambiar el tipo de dato.
user.name='daniel';
//user.id=2
//console.log(user)

user.guardar = function(){
    console.log('Guardando',user.name);
}

user.guardar();
console.log(user);

delete user.name;
delete user.guardar;

console.log(user);

const user1=Object.freeze({id:100});//no permite modificar valores ni agregar propiedades al objeto
user1.name='Daniel';
user1.id=200;
console.log(user1);

const user2=Object.seal({id:300});//permite modificar valores , pero no agregar propiedades al objeto
user2.name='Daniel';
user2.id=200;
console.log(user2);
