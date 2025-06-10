document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.whatsapp-button').forEach(button => {
        button.addEventListener('click', function() {
            let numeroWhatsApp = "528184764030"; // Número en formato internacional sin el "+"
            let mensaje = `Hola, ¿Podrías darme más información acerca de el servicio y costo?`;
            let enlace = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
            window.open(enlace, '_blank');
        });
    });
});
