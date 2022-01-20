function showMessage(arg) { console.log(arg) }
function suma(a, b) { return a + b; }

showMessage(`La suma es: ${suma(12, 45)}`);

//Ejercicio 2 
/*Registrar el ingreso de notas de 4 examenes y calcular el promedio de estos.*/

function calcularPromedio() {
    let notas = [
        Number(prompt("Ingresar 1ra nota:")),
        Number(prompt("Ingresar 2da nota:")),
        Number(prompt("Ingresar 3ra nota:")),
        Number(prompt("Ingresar 4ta nota:")),
    ];

    showMessage(`Su promedio es: ${(notas[0] + notas[0] + notas[0] + notas[0]) / notas.length}`);
}

//calcularPromedio();

//Ejercicio 3 : 
/*
Calcular el área de un rectángulo
Calcular el área de un triángulo
Calcular el área de una circunferencia
 */

function calcularAreas() {
    let calcular = prompt("CALCULAR AREA DE:\nSeleccione una opción de 1 al 3 \n1.- rectángulo. \n2.- triángulo. \n3.- circunferencia.");
    let areas = { base: 0, altua: 0, radio: 0 };
    switch (Number(calcular)) {
        case 1:
            areas = {
                base: Number(prompt("Ingrese base:")),
                altura: Number(prompt("Ingrese altura:")),
            }
            showMessage(`El area del restangulo es: ${areas.base * areas.altura}`);
            break;
        case 2:
            areas = {
                base: Number(prompt("Ingrese base:")),
                altura: Number(prompt("Ingrese altura:")),
            }
            showMessage(`El area del triángulo es: ${(areas.base * areas.altura) / 2}`);
            break;
        case 3:
            areas = {
                radio: Number(prompt("Ingrese radio:")),
            }
            showMessage(`El area del circunferencia es: ${Math.PI * Math.pow(areas.radio, 2)}`);
            break;

        default:
            showMessage(`Opción no existe`);
            break;
    }
}

//calcularAreas();

/**
 * Determinar el sueldo semanal de un trabajador basándose en sus horas trabajadas y su salario de hora hombre
 */

function calcularSuelsoSemanal() {
    let trabajador = { salario: 0, horasTrabajadas: 0, diasTrabajados: 0, diasFalta: 0 }
    trabajador.salario = prompt("Cual es su salario semanal?");
    trabajador.horasTrabajadas = prompt("Cunatas horas trabaja diariamente?");
    trabajador.diasTrabajados = prompt("Cunatos días trabajó?");
    trabajador.diasFalta = prompt("Cunatos días faltó?");
    let sueldo = trabajador.

        showMessage(``);
}

/** 7 
 * Una modista, para realizar sus prendas de vestir, encarga las telas al extranjero. Para cada pedido, tiene que proporcionar las medidas de la tela en pulgadas, pero ella generalmente las tiene en metros. Realice un algoritmo para ayudar a resolver el problema, determinando cuantas pulgadas debe pedir con base en los metros que requiere. (1 pulgada = 0.0254 m).
 */

function convertirMetrosPulgadas() {
    let metros = Number(prompt("Metros de tela a pedir:"));
    const pulgada = 0.0254;
    let pulagas = metros * pulgada;
    showMessage(``)
}

/**
 * Realice un algoritmo para leer las calificaciones de N alumnos y determine el número de aprobados y reprobados.
 */

function calcularAprobadosDesaprobados() {
    let cantidadAlumnos = Number(prompt("Cantidad de alumnos"));
    let notas = [];
    let alumnos = { aprobados: 0, desaprobados: 0 };

    for (let index = 0; index < cantidadAlumnos; index++) { 
        notas[index] = Number(prompt(`Ingrese nota: ${index}`));
    }
 
    for (let index = 0; index < notas.length; index++) {
        (notas[index] > 12) ? alumnos.aprobados +=1:alumnos.desaprobados +=1
    }

    console.log(`%c Aprobados: ${alumnos.aprobados}`, "background: #d2a; color: #bada55; width: 150px; padding: 100px;");
    console.log(`%c Aprobados: ${alumnos.desaprobados}`, "background: #d2a; color: #bada55; width: 150px; padding: 100px;");
    
}

calcularAprobadosDesaprobados();