document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('confetti-btn');
    const colors = ['#ff0a54', '#ff477e', '#ffb9f6', '#00f5d4', '#00a3e0', '#fee440']; // Paleta de colores

    button.addEventListener('click', () => {
        // Ejecutar la animación
        createConfetti();
    });

    function createConfetti() {
        // Obtener la posición y tamaño del botón para saber dónde lanzar el confetti
        const rect = button.getBoundingClientRect();
        const numPieces = 50; // Cantidad de confetti
        
        for (let i = 0; i < numPieces; i++) {
            const piece = document.createElement('div');
            piece.classList.add('confetti-pieza');
            
            // Asignar color aleatorio
            piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            
            // Posicionar la pieza en el centro del botón
            piece.style.left = `${rect.left + rect.width / 2}px`;
            piece.style.top = `${rect.top + rect.height / 2}px`;
            
            document.body.appendChild(piece);

            // Calcular valores aleatorios para el movimiento (dirección y velocidad)
            const angle = Math.random() * 360; // Dirección
            const velocity = Math.random() * 15 + 15; // Velocidad de 15 a 30
            const rotation = Math.random() * 360; // Rotación inicial

            // Usar la API de Web Animations (más eficiente que CSS puro para esto)
            const animation = piece.animate([
                {
                    opacity: 1,
                    transform: `translate(0, 0) rotate(${rotation}deg)` // Posición inicial
                },
                {
                    opacity: 0,
                    // Trasladar a una posición aleatoria (simulando explosión y caída)
                    transform: `translate(${Math.cos(angle) * velocity}vw, ${Math.sin(angle) * velocity}vh) rotate(${rotation + 720}deg)`
                }
            ], {
                duration: 2000, // Duración de la animación en ms
                easing: 'cubic-bezier(0.2, 1, 0.7, 1)', // Curva de aceleración/desaceleración
                delay: Math.random() * 200 // Pequeño retraso aleatorio
            });

            // Eliminar la pieza del DOM cuando la animación termine
            animation.onfinish = () => {
                piece.remove();
            };
        }
    }
});