document.addEventListener('DOMContentLoaded', function () {
    const verCartaBtn = document.getElementById('verCartaBtn');
    const seccionInicio = document.querySelector('.seccion-inicio');
    const seccionCarta = document.querySelector('.seccion-carta');
    const floresContainer = document.getElementById('flores');


    // Control de música
    btnMusica.addEventListener('click', function () {
        if (musica.paused) {
            musica.play();
            btnMusica.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            musica.pause();
            btnMusica.innerHTML = '<i class="fas fa-music"></i>';
        }
    });

    // Girar tarjetas (función global)
    window.girarTarjeta = function (tarjeta) {
        tarjeta.classList.toggle('girada');
    };


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
