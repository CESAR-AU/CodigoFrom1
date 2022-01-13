

function sumar(a,b){
    return a+b;
}
function restar(a,b){
    return a-b;
}
function multiplicar(a,b){
    return a*b;
}
function dividir(a,b){
    return a/b;
}

const sumando = (a,b)=>{return a+b}

const funciones = [sumar, restar, multiplicar, dividir, sumando];

const objFunciones = {
    suma: sumar,
    restar: restar,
    multiplicar: multiplicar,
}

console.log(funciones[3](12,30));
console.log(objFunciones.multiplicar(12, 15));