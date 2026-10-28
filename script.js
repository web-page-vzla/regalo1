document.addEventListener("DOMContentLoaded", () => {
    
    // 1. LÓGICA DEL CONTADOR DE TIEMPO
    // Fecha exacta de inicio: 27 de diciembre de 2024 a las 12:00 PM
    const startDate = new Date(2024, 11, 27, 12, 0, 0); // Nota: En JS los meses van de 0 a 11 (11 es Diciembre)

    function updateTimer() {
        const now = new Date();
        const difference = now - startDate;

        if (difference < 0) {
            document.getElementById("days").innerText = "0";
            document.getElementById("hours").innerText = "00";
            document.getElementById("minutes").innerText = "00";
            document.getElementById("seconds").innerText = "00";
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours < 10 ? '0' + hours : hours;
        document.getElementById("minutes").innerText = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById("seconds").innerText = seconds < 10 ? '0' + seconds : seconds;
    }

    setInterval(updateTimer, 1000);
    updateTimer();

    // 2. CREACIÓN DE CORAZONES Y PÉTALOS FLOTANTES
    const particlesContainer = document.getElementById("particles-container");
    const icons = ["🌻", "❤️", "🐱", "🌸", "✨", "💛"];

    function createParticle() {
        const particle = document.createElement("div");
        particle.classList.add("floating-element");
        
        // Selección aleatoria de icono
        particle.innerText = icons[Math.floor(Math.random() * icons.length)];
        
        // Posición y tamaño aleatorios
        particle.style.left = Math.random() * 100 + "vw";
        particle.style.fontSize = (Math.random() * 1.2 + 0.8) + "rem";
        
        // Duración de animación aleatoria (entre 6 y 12 segundos)
        const duration = Math.random() * 6 + 6;
        particle.style.animationDuration = duration + "s";

        particlesContainer.appendChild(particle);

        // Remover partícula después de que termine la animación
        setTimeout(() => {
            particle.remove();
        }, duration * 1000);
    }

    // Generar partículas continuamente
    setInterval(createParticle, 400);

    // 3. INTERACTIVIDAD DEL MODAL SORPRESA
    const btnSurprise = document.getElementById("btn-surprise");
    const modalSurprise = document.getElementById("modal-surprise");
    const closeModal = document.getElementById("close-modal");

    btnSurprise.addEventListener("click", () => {
        modalSurprise.style.display = "flex";
        createConfetti();
    });

    closeModal.addEventListener("click", () => {
        modalSurprise.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === modalSurprise) {
            modalSurprise.style.display = "none";
        }
    });

    // 4. EFECTO EXTRA DE CORAZONES AL HACER CLIC EN EL BOTÓN
    function createConfetti() {
        for (let i = 0; i < 20; i++) {
            setTimeout(createParticle, i * 50);
        }
    }
});