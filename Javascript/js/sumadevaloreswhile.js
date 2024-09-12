let suma=0
let continuar=true;
alert ("estoy en la pagina")
    while(continuar){
        var numero=parseFloat(prompt("ingrese el valor que desea sumar"))
        suma+=numero
        
        let respuesta=prompt("¿deseas seguir (Yes/No)?")
    if (respuesta !== "yes"){
        continuar=false;

    }

    }
document.write("las suma total es "+suma)