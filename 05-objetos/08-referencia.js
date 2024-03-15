let a=1;
let b=1;

b++;
console.log(a,b);

let ax={};
let bx=ax;

bx.prop=1;
console.log(ax,bx);

let ac=1;

function suma(n){
    n++;
}
suma(ac);
console.log(ac);

let ab={prop:1};

function suma(n){
    n.prop++;
}
suma(ab);
console.log(ab);

