var cupos = 50;
let ingreso = parseInt(prompt("Ingresa el número de aprendices que entran al auditorio"));
let cuposRestantes = cupos - ingreso;

if (ingreso > cupos) {
    document.write("No puedes ingresar más aprendices de los que hay disponibles. Cupos disponibles: " + cupos);
} else {
    while (ingreso < cupos) {
        document.write("Has ingresado " + ingreso + " aprendices. ");
        document.write("Cupos restantes: " + cuposRestantes + ".<br>");

        if (cuposRestantes > 0) {
            let nuevoIngreso = parseInt(prompt("Ingresa el número de aprendices adicionales que ingresan al auditorio, quedan " + cuposRestantes + " cupos disponibles"), 10);
            
            if (nuevoIngreso > cuposRestantes) {
                alert("No puedes ingresar más aprendices de los cupos disponibles. Cupos restantes: " + cuposRestantes);
            } else {
                ingreso += nuevoIngreso;
                cuposRestantes = cupos - ingreso;
            }
        }

        if (ingreso >= cupos) {
            document.write("Has completado el auditorio. Gracias por tu ingreso.");
            break;
        }
    }
}


        





//cuposRestantes=cupos-ingreso
//document.write("faltan "+cuposRestantes+" para completar el auditorio")

