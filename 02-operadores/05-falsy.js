//short circuit

//falso
//false
//0
//''
//null
//undefined
//NaN

let nombre='martel';
let username=nombre || 'anonimo';

console.log(username)

function fn1(){
    console.log('soy funcion 1');
    return true;
}
function fn2(){
    
    console.log('soy funcion 2');
    return false;   
}

let x=fn1() && fn2();