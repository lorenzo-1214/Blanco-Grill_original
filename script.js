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
  