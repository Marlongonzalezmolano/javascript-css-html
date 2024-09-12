var nombre=prompt("ingrese su nombre")
let apellido=prompt("ingresa el apellido ")
const año_nacimiento=parseInt(prompt("ingrese el año de nacieminto"))

const fecha=new Date ();
const fechaActual=fecha.getFullYear();
let edad=fechaActual-año_nacimiento

if (edad<=5){
    document.write("niño "+nombre+" con apellido "+apellido+" tiene  "+edad)
}
else if(edad<=18){
    document.write("joven " +nombre+ " con apellido " +apellido+ " tiene " +edad)

}else{
    document.write("señor(A) " +nombre+ " con apellido " +apellido+ " tiene " +edad)
}  
