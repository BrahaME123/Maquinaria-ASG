document.addEventListener('DOMContentLoaded', function(){
    const inicio = document.querySelectorAll('.hero');

    const opciones = {
        root:null,
        r00tNargin:'0px',
        threshold: 0.5
    }
     const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, options);

    articulos.forEach(articulo => {
      observer.observe(articulo);
    });
})