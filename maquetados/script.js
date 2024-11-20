// Selección del botón y el menú
const dropdown = document.querySelector('.dropdown');
const dropdownButton = document.querySelector('.dropdown-button');

// Evento de clic para mostrar/ocultar el menú
dropdownButton.addEventListener('click', () => {
    dropdown.classList.toggle('active');
});

// Cierra el menú si se hace clic fuera
document.addEventListener('click', (event) => {
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove('active');
    }
});

function showTab(tabId) {
    // Oculta todos los formularios
    const forms = document.querySelectorAll('.form');
    forms.forEach(form => form.classList.remove('active'));

    // Desactiva todas las pestañas
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Muestra el formulario seleccionado
    document.getElementById(tabId).classList.add('active');

    // Activa la pestaña correspondiente
    document.querySelector(`[onclick="showTab('${tabId}')"]`).classList.add('active');
}

document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel");
    const images = document.querySelectorAll(".carousel-image");
    const prevButton = document.querySelector(".carousel-button.prev");
    const nextButton = document.querySelector(".carousel-button.next");

    let currentIndex = 0;

    function updateCarousel() {
        const offset = -currentIndex * 100; // Calcula la posición del carrusel
        carousel.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        updateCarousel();
    });

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });
});

// Referencias a los botones
const registeredBtn = document.getElementById("registeredBtn");
const notRegisteredBtn = document.getElementById("notRegisteredBtn");

// Acción cuando el usuario ya está registrado
registeredBtn.addEventListener("click", () => {
    // Simula verificar el registro (podrías usar fetch aquí para un backend real)
    const isRegistered = confirm("¿Confirmas que ya estás registrado?");

    if (isRegistered) {
        // Si el usuario está registrado, redirige al menú de anfitriones
        window.location.href = "behostmenu.html";
    }
});

// Acción cuando el usuario no está registrado
notRegisteredBtn.addEventListener("click", () => {
    alert("¡Regístrate para ser anfitrión!");
    // Redirigir a la página de registro
    window.location.href = "inicio_sesion.html";
});


function showTab(tabId) {
    // Quitar clase 'active' de todas las pestañas y formularios
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.form').forEach(form => form.classList.remove('active'));

    // Agregar clase 'active' a la pestaña seleccionada y al formulario correspondiente
    document.querySelector(`.tab[onclick="showTab('${tabId}')"]`).classList.add('active');
    document.getElementById(tabId).classList.add('active');
}

function showMessageTab(tabId) {
    // Remover clase 'active' de todas las pestañas y formularios
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.form').forEach(form => form.classList.remove('active'));

    // Agregar clase 'active' a la pestaña y formulario seleccionados
    document.querySelector(`.tab[onclick="showMessageTab('${tabId}')"]`).classList.add('active');
    document.getElementById(tabId).classList.add('active');
}

// Selecciona los elementos necesarios
const responseButtons = document.querySelectorAll('.response-button');

// Añade un evento de clic a cada botón
responseButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        // Obtén el contenedor del mensaje y el input asociado
        const messageContainer = e.target.closest('.message-container');
        const inputField = messageContainer.querySelector('.response-input');
        
        // Obtén el texto de la respuesta
        const replyText = inputField.value;

        // Asegúrate de que no esté vacío
        if (replyText.trim() !== '') {
            // Crea un nuevo elemento de párrafo para la respuesta
            const replyElement = document.createElement('p');
            replyElement.innerHTML = `<strong>Tú:</strong> ${replyText}`;
            replyElement.classList.add('reply');
            
            // Añade la respuesta al contenedor del mensaje
            messageContainer.querySelector('.message').appendChild(replyElement);

            // Limpia el campo de entrada
            inputField.value = '';
        } else {
            alert('Por favor, escribe una respuesta antes de enviar.');
        }
    });
});
