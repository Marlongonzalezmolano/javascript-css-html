var cantidadNotas=prompt("ingrese la cantidad de notas")
var sumaNotas=0
cantidad=0
while (cantidad<cantidadNotas) {
    var nota=parseFloat(prompt("ingrese la nota"))
    sumaNotas+=nota
    cantidad+=1
}
const promedioNotas=sumaNotas/cantidadNotas
document.write("el promedio de la nota es "+promedioNotas.toFixed(2))