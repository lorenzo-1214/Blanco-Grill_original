document.addEventListener("DOMContentLoaded", () => {
    const sectionTitle = document.querySelector(".section-title");
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
  
    if (sectionTitle) {
      observer.observe(sectionTitle);
    }
  });
  

  const swiper = new Swiper('.mySwiper', {
    loop: true, // Rende il carosello ciclico
    autoplay: {
      delay: 3000, // Cambia slide ogni 3 secondi
      disableOnInteraction: false, // Continua l'autoplay anche dopo un'interazione
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  
  document.addEventListener("DOMContentLoaded", function () {
    // Ottieni il percorso dell'URL
    const path = window.location.pathname;
    const currentPage = path.substring(path.lastIndexOf("/") + 1);
  
    // Mappa delle pagine e dei relativi bottoni
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
  
    // Controlla se la pagina corrente è nella mappa
    if (pagesWithButtons[currentPage]) {
        const container = document.createElement("div");
        container.classList.add("button-container", "text-center", "my-4");
  
        // Crea i bottoni "Torna al Menu" e "Torna alla Home"
        const menuButton = document.createElement("a");
        menuButton.href = "./menu.html";
        menuButton.classList.add("btn", "btn-primary", "mx-2");
        menuButton.textContent = "Torna al Menu";
  
        const homeButton = document.createElement("a");
        homeButton.href = "./index.html";
        homeButton.classList.add("btn", "btn-secondary", "mx-2");
        homeButton.textContent = "Torna alla Home";
  
        // Aggiungi i bottoni al container
        container.appendChild(menuButton);
        container.appendChild(homeButton);
  
        // Aggiungi un observer per visualizzare i bottoni quando la pagina è visibile
        const footer = document.querySelector("footer");
        const sectionTitle = document.querySelector("h1");  // Usa il titolo o altro elemento per l'osservazione
  
        if (sectionTitle) {
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Aggiungi i bottoni prima del footer
                        if (footer) {
                            footer.parentNode.insertBefore(container, footer);
                        }
                    }
                });
            });
  
            observer.observe(sectionTitle); // Osserva l'elemento h1
        }
    }
  });
  