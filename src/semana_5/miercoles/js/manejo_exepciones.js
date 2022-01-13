function ejemplo1(){
    
    function suma(a,b){
        if(arguments.length > 2)
            throw console.error("Lafuncion no soporta mas de 2 argumentos");
    }

    suma(1,2,5,4,5,5);
}

ejemplo1();