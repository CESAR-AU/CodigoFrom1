/**
 * crear una funcion con 2 argumentos entrada nombre y apellido
 */

function fullName(nombre, apellido){
    console.log(`${Capitalize(nombre.toLowerCase())} ${apellido.toLowerCase()}`);
}

function Capitalize(text){
    return text[0].toUpperCase() + text.slice(1);
}

/**
 * Determinar cuantas veces se repite un caracter en un string
 */

function CountRepeatChar(text, char){
    let charRepeat = 0;
    for (let index = 0; index < text.length; index++) {
        if(text[index] == char ) charRepeat++;        
    }
    return charRepeat;
}

/**
 * 
 */

const multiploN = (col, num)=>{ return col.map((n) => n* num); }

/**
 * 
 */

let mascotas = [
    {
        name: "aronis",
        edad: 12,
        sexo: "m",
    },
    {
        name: "terry",
        edad: 4,
        sexo: "m",
    },
    {
        name: "juda",
        edad: 3,
        sexo: "h",
    },
    {
        name: "aronis",
        edad: 8,
        sexo: "m",
    },
]

const getInfoMascotas = (mascotas) => {
    let infoMascotas = {
        mayores: [],
        menores: [],
        machos: [],
        hembras: [],
    };
    infoMascotas.mayores = mascotas.filter((mascota) => mascota.edad > 4);
    infoMascotas.menores = mascotas.filter((mascota) => mascota.edad < 4);
    infoMascotas.hembras = mascotas.filter((mascota) => mascota.sexo === "h");
    infoMascotas.machos = mascotas.filter((mascota) => mascota.sexo === "m");

    console.log(`Info mascotas`, infoMascotas);
}

getInfoMascotas(mascotas);

/**
 * 
 */

let objRef = {
    name: "Juanm laddsf",
    apellido: "Barete",
}

let obj2 = objRef;
console.log(obj2);
let obj3 = objRef;
let obj4 = Object.assign(
    {}, 
    objRef,
    {age: 35},
    {country: "peru"},
    {age: 12},
    );
    
let obj5 = {
    ...objRef,
    age: 35,
    country: "peru",
    age: 12,
}

objRef.name = "Modificado";
console.log(obj2);

console.log(obj4);
console.log(obj5);