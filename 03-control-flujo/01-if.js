/*let edad=18;

if (edad>17){
    console.log('usuario mayor de edad');
}
else if(edad>13){
    console.log('usuario debe estar con sus padres');
}
else    
    console.log('menor de edad');
*/

//while
//let i=0;
//while(i<10){
//    if(i%2==0) console.log('Numero par: ',i);
//    i++;
//}

//do while
/*let x=0;
do{
    if(x%2==0) console.log(x);
    x++
}
while(x<10); */

/*let x=0;

for (let x=2;x<10;x+=1){
    if(x%2==0) console.log(x);
} */

/* let animales = ['perro','gato','cerdo','gallina','paloma'];

for (let animal of animales){
    console.log(animal);
}
     */

/* let user={
    id:1,
    name:'chanchito feliz',
    age:25
}

for (let propiedad in user){
    console.log(propiedad,user[propiedad]);
} */


/* let i=0;
while (i<6){
    
    i++;
    if(i===2) continue;

    if(i===4) break;

    console.log(i);
} */

let accion='greabar';

switch(accion){
    case 'listar': console.log('accion de listar');break;
    case 'grabar': console.log('accion de grabar');break;
    default: console.log('accion no reconocida');
}

