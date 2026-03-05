// Script para funcionalidades interactivas
document.addEventListener('DOMContentLoaded', function() {
    
    // Obtener todos los botones del menú
    const botones = document.querySelectorAll('.button');
    const mensajeFlotante = document.getElementById('mensaje-flotante');
    
    // Array con diferentes mensajes para cada botón
    const mensajes = {
        btnInicio: '🏠 ¡Bienvenido a casa! 🏠',
        btnInfo: '📢 Toda la info aquí 📢',
        btnRifa: '🎫 ¡Participa y gana! 🎫',
        btnContacto: '📱 ¡Contáctanos! 📱'
    };
    
    // Agregar evento click a cada botón
    botones.forEach(boton => {
        boton.addEventListener('click', function() {
            const nombreBoton = this.name;
            
            // Cambiar el mensaje según el botón presionado
            if (mensajes[nombreBoton]) {
                mensajeFlotante.style.opacity = '0';
                setTimeout(() => {
                    mensajeFlotante.textContent = mensajes[nombreBoton];
                    mensajeFlotante.style.opacity = '1';
                }, 200);
            }
            
            // Efecto de feedback visual
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
            
            // Mostrar en consola qué botón se presionó
            console.log(`Botón presionado: ${this.textContent}`);
        });
    });
    
    // Efecto de bienvenida al cargar la página
    setTimeout(() => {
        mensajeFlotante.style.animation = 'none';
        mensajeFlotante.offsetHeight; // Forzar reflow
        mensajeFlotante.style.animation = 'pulse 2s infinite';
    }, 100);
    
    // Cambiar el mensaje cada 5 segundos automáticamente
    const mensajesAutomaticos = [
        '🎁 ¡Sorteo este mes! 🎁',
        '⭐ No te lo pierdas ⭐',
        '💝 Para ti, jefita 💝',
        '✨ Premios espectaculares ✨'
    ];
    
    let indiceMensaje = 0;
    setInterval(() => {
        mensajeFlotante.style.opacity = '0';
        setTimeout(() => {
            mensajeFlotante.textContent = mensajesAutomaticos[indiceMensaje];
            mensajeFlotante.style.opacity = '1';
            indiceMensaje = (indiceMensaje + 1) % mensajesAutomaticos.length;
        }, 200);
    }, 5000);
});