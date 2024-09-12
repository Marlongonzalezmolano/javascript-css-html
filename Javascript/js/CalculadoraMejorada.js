function mostrarResultado(resultado,n1,n2){
    var res=document.getElementById("resultado")
    var respuesta=document.getElementById("respuesta")

    if(n1>0 && n2>0){
        respuesta.style.display="block"
        res.innerHTML = `Total : ${resultado}`;
        res.style.color="black";
     }else {
        respuesta.style.display="block";
        res.innerHTML = `verifica tus datos`;
        res.style.color="red";
    }

}






function sumar(n1,n2){
    var resultado=n1+n2;
    var res=document.getElementById("resultado")
   mostrarResultado(resultado, n1, n2);

 }
 


function restar(){
    let n1=parseInt(document.getElementById("n1").value)
    let n2=parseInt(document.getElementById("n2").value)
    resultado=n1-n2;
    mostrarResultado(resultado, n1, n2);
}
function multiplicar(){
    let n1=parseInt(document.getElementById("n1").value)
    let n2=parseInt(document.getElementById("n2").value)
    resultado=n1*n2;
    mostrarResultado(resultado, n1, n2);
}
function dividir(){
    let n1=parseInt(document.getElementById("n1").value)
    let n2=parseInt(document.getElementById("n2").value)
    resultado=n1/n2;
    mostrarResultado(resultado, n1, n2);
}
function potencia(){
    let n1=parseInt(document.getElementById("n1").value)
    let n2=parseInt(document.getElementById("n2").value)
    let resultado=Math.pow(n1,n2)
    mostrarResultado(resultado, n1, n2);
}

function mostrar(){
    

let n1=parseInt(document.getElementById("n1").value)
let n2=parseInt(document.getElementById("n2").value)
let opc=parseInt(document.getElementById("opc").value)
switch(opc){
    case 1:
        sumar(n1,n2)
        break;
    case 2:
        restar()
        break;
    case 3:
        multiplicar()
        break; 
    case 4:
        dividir()
        break;
    case 5:
        potencia()
        break;             
    default: 
        alert("la opcion no es valida")   
}
}