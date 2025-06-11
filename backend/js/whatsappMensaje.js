document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.whatsapp-button').forEach(button => {
        button.addEventListener('click', function() {
            let numeroWhatsApp = "5218117389778"; // Número en formato internacional sin el "+"
            let mensaje = `Hola, ¿Podrías darme más información acerca de el servicio y costo?`;
            let enlace = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
            window.open(enlace, '_blank');
        });
    });
});
