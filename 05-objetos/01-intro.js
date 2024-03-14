let user ={
    email:  "daniel.martel@outlook.com",
    name:   "Daniel",
    direccion:{
        calle:"prolongacion iquitos",
        numero:1545
    },
    activo:    true,
    recuperarClave:function(){
        console.log("Recuperando clave");
    }
}

user.recuperarClave();