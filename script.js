document.addEventListener("DOMContentLoaded", () => {
  // 1. Effetto visibile sulla sezione titolo
  const sectionTitle = document.querySelector(".section-title");
  if (sectionTitle) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            sectionTitle.classList.add("visible");
          } else {
            sectionTitle.classList.remove("visible");
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(sectionTitle);
  }

  // 2. Configurazione del carosello Swiper
  new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // 3. Generazione bottoni dinamici
  document.addEventListener("DOMContentLoaded", function () {
    const path = window.location.pathname;
    const currentPage = path.substring(path.lastIndexOf("/") + 1);

    const pagesWithButtons = {
        "antipasti.html": "Antipasti",
        "primi.html": "Primi Piatti",
        "secondi.html": "Secondi Piatti",
        "dolci.html": "Dolci",
        "bevande.html": "Bevande",
        "vini-rossi.html": "Vini Rossi",
        "vini-bianchi.html": "Vini Bianchi",
        "bollicine.html": "Bollicine"
    };

    if (pagesWithButtons[currentPage]) {
        const container = document.createElement("div");
        container.classList.add("button-container", "text-center", "my-4");

        const menuButton = document.createElement("a");
        menuButton.href = "./menu.html";
        menuButton.classList.add("btn", "btn-primary", "mx-2");
        menuButton.textContent = "Torna al Menu";

        const homeButton = document.createElement("a");
        homeButton.href = "./index.html";
        homeButton.classList.add("btn", "btn-secondary", "mx-2");
        homeButton.textContent = "Torna alla Home";

        container.appendChild(menuButton);
        container.appendChild(homeButton);

        const footer = document.querySelector("footer");
        if (footer) {
            footer.parentNode.insertBefore(container, footer);
        }
    }
});
