var cart = [];

// Configuración del Swiper
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    coverflowEffect: {
        depth: 500,
        modifier: 1,
        slideShadows: true
    }
});

// Lógica de los botones de más y menos
document.querySelectorAll('.btn-plus').forEach((btn) => {
    btn.addEventListener('click', () => {
        let quantityElement = btn.previousElementSibling;
        let quantity = parseInt(quantityElement.textContent, 10);
        quantityElement.textContent = quantity + 1;
    });
});

document.querySelectorAll('.btn-minus').forEach((btn) => {
    btn.addEventListener('click', () => {
        let quantityElement = btn.nextElementSibling;
        let quantity = parseInt(quantityElement.textContent, 10);
        if (quantity > 1) {
            quantityElement.textContent = quantity - 1;
        }
    });
});

// Agregar productos al carrito
function addToCart(price, name, quantity) {
    let existingProduct = cart.find(product => product.name === name);
    if (existingProduct) {
        existingProduct.quantity += quantity;
    } else {
        let product = { name, price, quantity };
        cart.push(product);
    }
    updateCartItems();
}

// Actualizar la lista de productos pedidos
function updateCartItems() {
    let cartItemsList = document.getElementById("cart-items");
    cartItemsList.innerHTML = '';
    cart.forEach(product => {
        let listItem = document.createElement("li");
        listItem.textContent = `${product.name} - $${product.price} x ${product.quantity}`;
        cartItemsList.appendChild(listItem);
    });
    calculateTotal();
}

// Calcular total de productos
function calculateTotal() {
    let total = cart.reduce((acc, product) => acc + (product.price * product.quantity), 0);
    document.getElementById("total").textContent = `Total: $${total}`;
}

// Función para manejar el clic en el botón 'Comprar'
function handleBuyButton(event) {
    event.preventDefault();
    
    let productElement = event.target.closest('.swiper-slide');
    let priceText = productElement.querySelector('.product-txt span').textContent;
    let price = parseInt(priceText.replace('$', ''), 10);
    let name = productElement.querySelector('.product-txt h3').textContent;
    let quantityText = productElement.querySelector('.quantity').textContent;
    let quantity = parseInt(quantityText, 10);

    addToCart(price, name, quantity);
}

// Asignar el evento a todos los botones 'Comprar'
document.querySelectorAll('.btn-1').forEach((btn) => {
    btn.addEventListener('click', handleBuyButton);
});
