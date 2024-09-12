var cantidadnotas=parseInt(prompt("cuantas notas saco profesor"))
var sumanota=0
for(i=0; i<cantidadnotas; i++){
        var notas=parseFloat(prompt("ingrese su nota"))
        sumanota+=notas   
    }
    promedio=sumanota/cantidadnotas
    if (promedio<3.4){
        document.write("Ha perdido la materia")
    }
    else if (promedio>3.5 && promedio<3.7){
        document.write("van para plan de mejoramiento por tener el promedio "+promedio)
    }
    else{
        document.write("ha aprobado la materia por tener el promedio de "+promedio)
}

    