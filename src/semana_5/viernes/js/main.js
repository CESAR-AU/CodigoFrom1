let computadora = {
    marca: "acer",
    procesador: "intel",
    anio: 2020,
    getMarca: function() {return this.marca},
    getAnio:()=>this.anio,
    getProcesador:()=>this.procesador,
    setMarca:(marca)=>{this.marca = marca},
}

let alumnosPro = {
    alumnos:[],
    setAlumno:function(alumno){this.alumnos.push(alumno)},
    getAlumno:function(nombre){return this.alumnos.find((alumno)=>alumno.nombre == nombre)},
    getAlumno2:function(nombre){return this.alumnos.find((alumno)=>{return alumno.nombre == nombre})},
}

alumnosPro.setAlumno({
    nombre: "Juan",
    apellidos: "marona",
    edad: 26,
    pais: "Pais"
});

alumnosPro.setAlumno({
    nombre: "Rosa",
    apellidos: "marona",
    edad: 26,
    pais: "Pais"
});

alumnosPro.setAlumno({
    nombre: "Roberto",
    apellidos: "marona",
    edad: 26,
    pais: "Pais"
});

let celular = {
    nombre: "Iphone",
    modelo: 11,
    marca: "Apple",
    numeroSerie: 123456,
    procedencia: "usa",
    getInfo:function(){
        return `El nombre del producto es: ${this.nombre} el modelo es ${this.modelo}`;
    },
}
