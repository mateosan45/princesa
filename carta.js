document.addEventListener('DOMContentLoaded', function () {
    const floresContainer = document.getElementById('flores');
    const btnMusica = document.getElementById('btnMusica');
    const musica = document.getElementById('musica');
    const sobre = document.querySelector('.sobre');

    // 🎵 Control de música
    btnMusica.addEventListener('click', function () {
        if (musica.paused) {
            musica.play().then(() => {
                btnMusica.innerText = '⏸️ Pausar música';
            }).catch(error => {
                console.warn("No se pudo reproducir automáticamente:", error);
                alert("Toca la pantalla primero para permitir la música 🎵");
            });
        } else {
            musica.pause();
            btnMusica.innerText = '🎵 Reproducir música';
        }
    });

    // 💌 Click en el sobre
    sobre.addEventListener('click', function () {
        sobre.classList.toggle('abierto');
    });

    // 🌸 Corazones animados
    function crearFlores() {
        const flor = document.createElement('div');
        flor.classList.add('flor');

        const left = Math.random() * 100;
        const size = Math.random() * 20 + 10;
        const duracion = Math.random() * 5 + 5;
        const delay = Math.random() * 5;

        flor.style.left = `${left}%`;
        flor.style.width = `${size}px`;
        flor.style.height = `${size}px`;
        flor.style.animationDuration = `${duracion}s`;
        flor.style.animationDelay = `${delay}s`;

        floresContainer.appendChild(flor);

        setTimeout(() => flor.remove(), 15000);
    }

    setInterval(crearFlores, 300);
});
