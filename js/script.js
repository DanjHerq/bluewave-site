document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");
  const sections = document.querySelectorAll(".section");

  links.forEach(link => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // Evita saltos raros

      const target = link.getAttribute("data-section");

      // Cambia color del menú
      links.forEach(l => l.classList.remove("active"));
      link.classList.add("active");

      // Cambia sección visible
      sections.forEach(sec => {
        sec.classList.remove("active");
        if (sec.id === target) sec.classList.add("active");
      });

      // Sube la página arriba
      window.scrollTo(0, 0);
    });
  });
});
