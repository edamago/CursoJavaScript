function crearUsuario(name, email){
    return {
        //email:  email,
        //name:   name,
        email,
        name,
        activo:    true,
        recuperarClave:function(){
            console.log("Recuperando clave");
        }
    }
}

let user1=crearUsuario('Daniel','daniel.martel@outlook.com');

console.log(user1);