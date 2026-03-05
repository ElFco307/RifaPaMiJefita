// Script para el modal de contacto (funciona en todas las páginas)
document.addEventListener('DOMContentLoaded', function() {
    console.log('Modal.js cargado');
    
    const modal = document.getElementById('modalContacto');
    const btnContacto = document.getElementById('btnContacto');
    const btnCerrar = document.querySelectorAll('.cerrar-modal');
    const btnCerrarFooter = document.querySelectorAll('.boton-cerrar');

    // Verificar que los elementos existan antes de usarlos
    if (modal && btnContacto) {
        // Abrir modal
        btnContacto.onclick = function(event) {
            event.preventDefault();
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }

        // Cerrar modal con cualquier elemento que tenga la clase cerrar-modal
        btnCerrar.forEach(boton => {
            boton.onclick = function() {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });

        // Cerrar modal con cualquier elemento que tenga la clase boton-cerrar
        btnCerrarFooter.forEach(boton => {
            boton.onclick = function() {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });

        // Cerrar modal haciendo clic fuera del contenido
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        }
    }

    // Cerrar cualquier modal con tecla ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            const modales = document.querySelectorAll('.modal');
            modales.forEach(modal => {
                if (modal.style.display === 'block') {
                    modal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }
            });
        }
    });
});