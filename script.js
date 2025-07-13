class ImageCarousel {
  constructor() {
    this.images = [
      "Stickers/1.jpeg",
      "Stickers/2.png",
      "Stickers/3.png",
      "Stickers/4.png",
      "Stickers/5.png",
      "Stickers/6.png",
      "Stickers/7.png",
      "Stickers/8.png",
      "Stickers/9.png",
      "Stickers/10.png",
      "Stickers/11.png",
      "Stickers/12.png",
      "Stickers/13.webp",
    ];

    this.currentIndex = 0;
    this.isAutoPlay = false;
    this.autoPlayInterval = null;
    this.autoPlaySpeed = 3000; // 3 segundos

    this.init();
  }

  init() {
    this.createSlides();
    this.createIndicators();
    this.bindEvents();
    this.showSlide(0);
  }

  createSlides() {
    const wrapper = document.getElementById("carouselWrapper");
    wrapper.innerHTML = "";

    this.images.forEach((src, index) => {
      const slide = document.createElement("div");
      slide.className = "carousel-slide";
      slide.innerHTML = `<img src="${src}" alt="Sticker ${
        index + 1
      }" loading="lazy">`;
      wrapper.appendChild(slide);
    });
  }

  createIndicators() {
    const indicatorsContainer = document.getElementById("indicators");
    indicatorsContainer.innerHTML = "";

    this.images.forEach((_, index) => {
      const indicator = document.createElement("div");
      indicator.className = "indicator";
      indicator.addEventListener("click", () => this.goToSlide(index));
      indicatorsContainer.appendChild(indicator);
    });
  }

  bindEvents() {
    document
      .getElementById("prevBtn")
      .addEventListener("click", () => this.previousSlide());
    document
      .getElementById("nextBtn")
      .addEventListener("click", () => this.nextSlide());
    document
      .getElementById("autoPlayBtn")
      .addEventListener("click", () => this.toggleAutoPlay());

    // Navegación con teclado
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") this.previousSlide();
      if (e.key === "ArrowRight") this.nextSlide();
      if (e.key === " ") {
        e.preventDefault();
        this.toggleAutoPlay();
      }
    });

    // Pausar autoplay cuando el usuario interactúa
    const wrapper = document.getElementById("carouselWrapper");
    wrapper.addEventListener("mouseenter", () => {
      if (this.isAutoPlay) this.pauseAutoPlay();
    });

    wrapper.addEventListener("mouseleave", () => {
      if (this.isAutoPlay) this.startAutoPlay();
    });
  }

  showSlide(index) {
    const slides = document.querySelectorAll(".carousel-slide");
    const indicators = document.querySelectorAll(".indicator");

    // Remover clases activas
    slides.forEach((slide) => slide.classList.remove("active"));
    indicators.forEach((indicator) => indicator.classList.remove("active"));

    // Agregar clase activa al slide e indicador actual
    if (slides[index]) {
      slides[index].classList.add("active");
    }
    if (indicators[index]) {
      indicators[index].classList.add("active");
    }

    this.currentIndex = index;
  }

  nextSlide() {
    const nextIndex = (this.currentIndex + 1) % this.images.length;
    this.showSlide(nextIndex);
  }

  previousSlide() {
    const prevIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.showSlide(prevIndex);
  }

  goToSlide(index) {
    this.showSlide(index);
  }

  toggleAutoPlay() {
    if (this.isAutoPlay) {
      this.stopAutoPlay();
    } else {
      this.startAutoPlay();
    }
  }

  startAutoPlay() {
    this.isAutoPlay = true;
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, this.autoPlaySpeed);

    const btn = document.getElementById("autoPlayBtn");
    btn.innerHTML = '<i class="fas fa-pause"></i> Pausar';
  }

  pauseAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
  }

  stopAutoPlay() {
    this.isAutoPlay = false;
    this.pauseAutoPlay();

    const btn = document.getElementById("autoPlayBtn");
    btn.innerHTML = '<i class="fas fa-play"></i> Auto Play';
  }
}

// Inicializar el carrusel cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  new ImageCarousel();
});
