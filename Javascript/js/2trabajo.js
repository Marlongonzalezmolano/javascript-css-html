var nombre_1=prompt("ingrese su nombre")

const sueldo_1=parseInt(prompt("ingrese su sueldo"))
var nombre_2=prompt("ingrese su nombre")

const sueldo_2=parseInt(prompt("ingrese su sueldo"))

if (sueldo_1 >sueldo_2){
    document.write("la persona "+nombre_1+" gana mas")
}
else if(sueldo_2 >sueldo_1){
    document.write("la persona "+nombre_2+" gana mas")
}
else{
    document.write("la persona "+nombre_1+" y la persona "+nombre_2+" gana el mismo sueldo")
}