document.addEventListener("DOMContentLoaded", function () {
    document.body.style.overflow = "hidden"; // Bloquea el scroll al cargar

    setTimeout(() => {
        document.body.style.overflow = "auto";
    }, 2500); // Espera el tiempo de la animación (1.5s de delay + 1s de animación)
});

document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".header");
    const test = document.querySelector(".interruptor_main");
    const body = document.querySelector("body");


    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                header.style.color = "var(--verde)"; // Expande cuando test aparece
                body.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue("--negro");
                }
            else{
                header.style.color = "var(--negro)";
                body.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue("--verde");
            }
        });
    }, { threshold: 0.1 }); // Detecta cuando al menos el 10% de test es visible

    observer.observe(test);
});

document.addEventListener("DOMContentLoaded", function () {
    const interruptores = document.querySelectorAll(".interruptor");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Encuentra la línea que contiene este interruptor
                const linea = entry.target.closest(".linea");
                const elementos = linea.querySelectorAll(".elemento");
                if (linea) {
                    // Encuentra todos los elementos dentro de esa línea y hazlos visibles
                    
                    elementos.forEach(elemento => {
                        elemento.style.opacity = "1";
                    });
                }
                else{
                    elemento.style.opacity = 0;
                }
            }
        });
    }, { threshold: 0.2 }); // Se activará cuando el 20% del interruptor sea visible

    // Observamos cada interruptor
    interruptores.forEach(interruptor => {
        observer.observe(interruptor);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const link = document.getElementById("stylesheet");

    // Función para cambiar los estilos dinámicamente según el tamaño de la ventana
    function actualizarEstilos() {
        if (window.innerWidth <= 768) { 
            link.href = "index_mobile.css";
        } else { 
            link.href = "index.css";
        }
    }

    // Ejecutar al cargar la página
    actualizarEstilos();

    // También cambiar cuando la ventana cambia de tamaño
    window.addEventListener("resize", actualizarEstilos)});

    const mostrarJuego = document.querySelector(".mostrar-juego");
    const main = document.querySelector(".main");
    const botonMostrar = document.querySelector(".boton-mostrar");
    const body = document.querySelector("body");

    // Función para aplicar el blur
    function aplicarBlur() {
        main.style.filter = 'blur(50px)';
        body.style.overflow = 'hidden';
        mostrarJuego.style.zIndex = '1000';
    }

    // Función para quitar el blur
    function quitarBlur() {
        main.style.filter = 'none';
        body.style.overflow = 'auto';
    }

    // Evento para mostrar la ventana de la clase 'mostrar-juego'
    botonMostrar.addEventListener("click", function (event) {
        event.stopPropagation(); // Evita que el evento llegue a document
        mostrarJuego.classList.add("activo");
        aplicarBlur();
    });

    // Detectar clics fuera de mostrar-juego para ocultarla
    document.addEventListener("click", function (event) {
        if (!mostrarJuego.contains(event.target) && event.target !== botonMostrar) {
            mostrarJuego.classList.remove("activo");
            quitarBlur();
        }
    });

    // Evitar que el clic dentro de mostrarJuego cierre la ventana
    mostrarJuego.addEventListener("click", function (event) {
        event.stopPropagation();
    });
