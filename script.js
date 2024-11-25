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

