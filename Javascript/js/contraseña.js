
const usuario=prompt("ingrese el usuario")

const contraseña=prompt("ingrese la contraseña")
intentos=0

while (intentos<4){
    if(contraseña=="12345678"){
    document.write("bienvenido al sistema!")
    break;
    }      
    else {
        intentos++
        if (intentos <4){
            contraseña=prompt("contraseña incorrecta, dijite otra vez la contrasela")

        }
        else{
            document.write("contraseña incorrecta ")
        }
        
    }
}
   
