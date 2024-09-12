let contador1 = 0;  
let contador2 = 0;  
let productosCarrito = 0; 
let totalCarrito = 0;

const valor1 = document.getElementById("valor1");
const valor2 = document.getElementById("valor2");
const productosCarritoElem = document.getElementById("productosCarrito");
const listaCarrito = document.getElementById("listaCarrito");
const totalCarritoElem = document.getElementById("totalCarrito");

function actualizarDisplayProducto1() {
    valor1.innerText = `${contador1} x $30,000`;
}

function incrementoProducto1() {
    contador1++;
    actualizarDisplayProducto1();
}

function decrementoProducto1() {
    if (contador1 > 0) {
        contador1--;
        actualizarDisplayProducto1();
    }
}

function actualizarDisplayProducto2() {
    valor2.innerText = `${contador2} x $25,000`;
}

function incrementoProducto2() {
    contador2++;
    actualizarDisplayProducto2();
}

function decrementoProducto2() {
    if (contador2 > 0) {
        contador2--;
        actualizarDisplayProducto2();
    }
}

function agregarCarrito(nombreProducto, cantidad, precio) {
    if (cantidad > 0) {
        productosCarrito++;
        productosCarritoElem.innerText = productosCarrito;
        
        const producto = document.createElement('li');
        producto.innerText = `${nombreProducto}: ${cantidad} x $${precio.toLocaleString()}`;
        listaCarrito.appendChild(producto);

        totalCarrito += cantidad * precio;
        totalCarritoElem.innerText = `$${totalCarrito.toLocaleString()}`;
    }
}
