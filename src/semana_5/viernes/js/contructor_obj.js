//CONSTRUCTOR DE OBJETOS
function makeMoblie(props){
    this.nombre = props.nombre;
    this.modelo = props.modelo;
    this.marca = props.marca;
    this.numeroSerie = props.numeroSerie;
    this.procedencia = props.procedencia;
    this.getInfo = function(){
        return `El nombre del producto es: ${this.nombre} el modelo es ${this.modelo}`;
    };
}

let celular1 = new makeMoblie({
    nombre: "Celular uno",
});