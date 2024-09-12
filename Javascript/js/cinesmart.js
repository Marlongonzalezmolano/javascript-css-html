var cupos = 50;
let ingreso = parseInt(prompt("Ingresa el número de cupos han comprado cupos"));
let cuposRestantes = cupos - ingreso;

if (ingreso > cupos) {
    document.write("No puedes ingresar más personas de los que hay disponibles. Cupos disponibles: " + cupos);
} else {
    while (ingreso < cupos) {
        document.write("Has ingresado " + ingreso + " cupos. ");
        document.write("Cupos restantes: " + cuposRestantes + ".<br>");

        if (cuposRestantes > 0) {
            let nuevoIngreso = parseInt(prompt("Ingresa el número de cupos adicionales que ingresan al cineSmart, quedan " + cuposRestantes + " disponibles"), 10);
            
            if (nuevoIngreso > cuposRestantes) {
                alert("No puedes ingresar más personas de los cupos disponibles. Cupos restantes en el cineSmart: " + cuposRestantes);
            } else {
                ingreso += nuevoIngreso;
                cuposRestantes = cupos - ingreso;
            }
        }

        if (ingreso >= cupos) {
            document.write("se ha completado el cineSmart. Gracias por tu compra.");
            break;
        }
    }
}