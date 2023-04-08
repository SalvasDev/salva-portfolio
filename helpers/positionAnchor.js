export function positionAnchor() {
  document.querySelectorAll('a[href^="#start"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      const targetPosition = target.getBoundingClientRect().top;
      const offsetPosition = targetPosition - 50; // Restar 50 píxeles para el margen superior personalizado
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    });
  });
}






