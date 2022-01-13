function ejemplo1() {
  let edad = prompt("ingrese edad");
  if (edad > 18) {
    alert("Bienbenido al club");
  } else {
    alert("eres menor de edad");
  }
}
//ejemplo1();

function ejemplo2() {
  let saborHelado = prompt("Sabor de helado");
  alert(`El sabor es: ${saborHelado}`);
}
//ejemplo2();

function ejemplo3(){
  let vehiculo = ["auto", "moto", "bicicleta", "otros"];
  let seleccionado = prompt(`Elige tu vehiculo: ${vehiculo[0]} ${vehiculo[1]} ${vehiculo[2]} ${vehiculo[3]}`);
  vehiculo.forEach(vehiculoSelecto => {
    if(vehiculoSelecto == seleccionado){
      alert(`Su eleccion es: ${vehiculoSelecto}`);
    }
  });
}

ejemplo3();