let ambiente1=0
let ambiente2=0
let continuar= true;
while(continuar){
    let numero=parseInt(prompt("ingrese la opcion 1 ambiente 4102, ingresa la opcion 2 Ambiente 2108 y 3 para salir "))
    //ambiente 1//
    if(numero=== 1 ){
        alert("los cupos que estan comprados son "+ambiente1)
        if (ambiente1<25){
            var nombre=prompt("ingrese el nombre")
            ambiente1+=1

            if(ambiente1>=25){
                alert("se han acabado los cupos")
                break;
            }
        }
    }
    //ambiente 2//
    if(numero=== 2){
        alert("los cupos que estan comprados son "+ambiente2)
        if(ambiente2<20){
            var nombre=prompt("ingrese el nombre")
            ambiente2+=1
            if (ambiente2>=20){
                alert("se han acabado los cupos ")
                break;
            }
        }
    }
    // salir //
    if(numero=== 3){
        continuar=false
        break;
    }

}
document.write("los cupos del ambiente 4102 son "+ambiente1+" y los cupos del ambiente 2108 son "+ambiente2)
