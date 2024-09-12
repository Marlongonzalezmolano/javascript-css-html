const primernota=parseFloat(prompt("ingrese la primera nota"))
const segundanota=parseFloat(prompt("ingrese la segunda nota"))
const terceranota=parseFloat(prompt("ingrese la tercera nota"))

const promedioactual=(primernota+segundanota+terceranota)/3

if (promedioactual<=3.3){
    document.write("el promedio de las 3 notas es "+promedioactual+" no aprobo")
}
else if (promedioactual=>3.4 && promedioactual<=3.7){
    document.write("el promedio de las 3 notas es "+ promedioactual+" plan mejoramiento")
}
else if (promedioactual=>3.8 && promedioactual<=5){
    document.write("el promedio de las 3 notas es "+promedioactual+" plan mejoramiento")
}
else{
    document.write("el promedio de las 3 notas es "+promedioactual+" verifique sus datos ")
}