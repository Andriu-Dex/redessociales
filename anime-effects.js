// Configuración para particles.js (efectos de sakura y partículas anime)
const particlesConfig = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: ["#ffb3d9", "#ffc0cb", "#ffb6c1", "#ffd1dc", "#e6e6fa"],
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
    },
    opacity: {
      value: 0.6,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: true,
        speed: 2,
        size_min: 0.5,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "bottom",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble",
      },
      onclick: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 100,
        size: 6,
        duration: 2,
        opacity: 0.8,
        speed: 3,
      },
      repulse: {
        distance: 150,
        duration: 0.4,
      },
    },
  },
  retina_detect: true,
};

// Clase para manejar animaciones anime
class AnimeBackgroundEffects {
  constructor() {
    this.sakuraContainer = document.getElementById("sakuraContainer");
    this.energyAuras = document.getElementById("energyAuras");
    this.animeSymbols = document.getElementById("animeSymbols");
    this.magicCircles = document.getElementById("magicCircles");
    this.floatingElements = document.getElementById("floatingElements");

    // Elementos anime
    this.animeIcons = [
      { id: "anime-star", class: "star" },
      { id: "anime-lightning", class: "lightning" },
      { id: "kawaii-cloud", class: "cloud" },
    ];

    this.magicTypes = ["fire", "ice", "nature"];
    this.energyTypes = ["blue", "pink", "purple"];
    this.sakuraVariants = ["variant-1", "variant-2", "variant-3"];

    this.isActive = true;
    this.init();
  }

  init() {
    // Inicializar particles.js
    if (typeof particlesJS !== "undefined") {
      particlesJS("particles-js", particlesConfig);
    }

    // Crear elementos anime permanentes
    this.createPermanentSakura();
    this.createPermanentEnergyAuras();
    this.createPermanentAnimeSymbols();
    this.createPermanentMagicCircles();
    this.createPermanentFloatingElements();

    // Animaciones con anime.js
    this.startAnimeJSAnimations();
  }

  // Crear pétalos de sakura
  createPermanentSakura() {
    for (let i = 0; i < 15; i++) {
      setTimeout(() => this.createSakuraPetal(i), i * 400);
    }
  }

  createSakuraPetal(index) {
    const petal = document.createElement("div");
    petal.className = "sakura-petal";
    petal.id = `sakura-${index}`;

    const variant =
      this.sakuraVariants[
        Math.floor(Math.random() * this.sakuraVariants.length)
      ];
    petal.classList.add(variant);

    // SVG para pétalo de sakura
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 24 28");

    const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
    use.setAttribute("href", "#sakura-petal");
    svg.appendChild(use);
    petal.appendChild(svg);

    // Posición y animación
    petal.style.left = `${Math.random() * 100}%`;
    const duration = Math.random() * 8 + 12;
    petal.style.setProperty("--duration", `${duration}s`);
    petal.style.animationDelay = `${index * 0.8}s`;
    petal.style.animation = `sakuraFall ${duration}s linear infinite`;

    this.sakuraContainer.appendChild(petal);
  }

  // Crear auras de energía
  createPermanentEnergyAuras() {
    for (let i = 0; i < 8; i++) {
      setTimeout(() => this.createEnergyAura(i), i * 700);
    }
  }

  createEnergyAura(index) {
    const aura = document.createElement("div");
    aura.className = "energy-aura";
    aura.id = `energy-aura-${index}`;

    const type =
      this.energyTypes[Math.floor(Math.random() * this.energyTypes.length)];
    aura.classList.add(type);

    // Tamaño aleatorio
    const size = Math.random() * 40 + 30;
    aura.style.width = `${size}px`;
    aura.style.height = `${size}px`;

    // Posición y animación
    aura.style.left = `${Math.random() * 100}%`;
    const duration = Math.random() * 6 + 8;
    aura.style.setProperty("--duration", `${duration}s`);
    aura.style.animationDelay = `${index * 1}s`;
    aura.style.animation = `energyPulse ${duration}s ease-in-out infinite`;

    this.energyAuras.appendChild(aura);
  }

  // Crear símbolos anime
  createPermanentAnimeSymbols() {
    for (let i = 0; i < 12; i++) {
      setTimeout(() => this.createAnimeSymbol(i), i * 500);
    }
  }

  createAnimeSymbol(index) {
    const symbol = document.createElement("div");
    symbol.className = "anime-symbol";
    symbol.id = `anime-symbol-${index}`;

    const icon =
      this.animeIcons[Math.floor(Math.random() * this.animeIcons.length)];
    symbol.classList.add(icon.class);

    // SVG
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 24 24");

    const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
    use.setAttribute("href", `#${icon.id}`);
    svg.appendChild(use);
    symbol.appendChild(svg);

    // Posición y animación
    symbol.style.left = `${Math.random() * 100}%`;
    const duration = Math.random() * 10 + 8;
    symbol.style.setProperty("--duration", `${duration}s`);
    symbol.style.animationDelay = `${index * 0.7}s`;

    // Efectos especiales aleatorios
    if (Math.random() < 0.4) {
      symbol.style.animation = `animeFloat ${duration}s ease-in-out infinite, sparkle 3s ease-in-out infinite`;
    } else {
      symbol.style.animation = `animeFloat ${duration}s ease-in-out infinite`;
    }

    this.animeSymbols.appendChild(symbol);
  }

  // Crear círculos mágicos
  createPermanentMagicCircles() {
    for (let i = 0; i < 6; i++) {
      setTimeout(() => this.createMagicCircle(i), i * 800);
    }
  }

  createMagicCircle(index) {
    const circle = document.createElement("div");
    circle.className = "magic-circle";
    circle.id = `magic-circle-${index}`;

    const type =
      this.magicTypes[Math.floor(Math.random() * this.magicTypes.length)];
    circle.classList.add(type);

    // SVG
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 24 24");

    const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
    use.setAttribute("href", "#magic-circle");
    svg.appendChild(use);
    circle.appendChild(svg);

    // Posición y animación
    circle.style.left = `${Math.random() * 100}%`;
    const duration = Math.random() * 12 + 15;
    circle.style.setProperty("--duration", `${duration}s`);
    circle.style.animationDelay = `${index * 1.2}s`;
    circle.style.animation = `magicRotate ${duration}s linear infinite`;

    this.magicCircles.appendChild(circle);
  }

  // Crear elementos flotantes kawaii
  createPermanentFloatingElements() {
    for (let i = 0; i < 10; i++) {
      setTimeout(() => this.createFloatingElement(i), i * 600);
    }
  }

  createFloatingElement(index) {
    const element = document.createElement("div");
    element.className = "floating-element";
    element.id = `floating-element-${index}`;

    // SVG para orbe de energía
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 24 24");

    const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
    use.setAttribute("href", "#energy-orb");
    svg.appendChild(use);
    element.appendChild(svg);

    // Color aleatorio kawaii
    const colors = ["#ffb3d9", "#b3d9ff", "#d9ffb3", "#ffb3b3", "#e6b3ff"];
    element.style.color = colors[Math.floor(Math.random() * colors.length)];

    // Posición y animación
    element.style.left = `${Math.random() * 100}%`;
    const duration = Math.random() * 8 + 10;
    element.style.setProperty("--duration", `${duration}s`);
    element.style.animationDelay = `${index * 0.6}s`;
    element.style.animation = `kawaiFloat ${duration}s ease-in-out infinite, kawaiGlow 4s ease-in-out infinite`;

    this.floatingElements.appendChild(element);
  }

  // Animaciones con Anime.js
  startAnimeJSAnimations() {
    if (typeof anime === "undefined") return;

    // Animación de entrada para el título
    anime({
      targets: ".header h1",
      scale: [0.8, 1],
      opacity: [0, 1],
      duration: 2000,
      easing: "easeOutElastic(1, .8)",
      delay: 500,
    });

    // Animación para las redes sociales
    anime({
      targets: ".social-links a",
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 1500,
      delay: anime.stagger(200, { start: 1000 }),
      easing: "easeOutExpo",
    });

    // Animación continua para elementos mágicos
    setInterval(() => {
      if (this.isActive) {
        anime({
          targets: ".magic-circle",
          scale: [1, 1.1, 1],
          duration: 2000,
          easing: "easeInOutSine",
        });
      }
    }, 5000);

    // Animación para los pétalos de sakura
    setInterval(() => {
      if (this.isActive) {
        anime({
          targets: ".sakura-petal",
          rotate: "+=180deg",
          duration: 3000,
          easing: "easeInOutQuad",
        });
      }
    }, 8000);
  }

  // Control de animaciones
  toggle() {
    this.isActive = !this.isActive;
    const allElements = [
      ...this.sakuraContainer.children,
      ...this.energyAuras.children,
      ...this.animeSymbols.children,
      ...this.magicCircles.children,
      ...this.floatingElements.children,
    ];

    allElements.forEach((element) => {
      if (this.isActive) {
        element.style.animationPlayState = "running";
      } else {
        element.style.animationPlayState = "paused";
      }
    });
  }

  // Limpiar todas las animaciones
  cleanup() {
    this.isActive = false;
    [
      this.sakuraContainer,
      this.energyAuras,
      this.animeSymbols,
      this.magicCircles,
      this.floatingElements,
    ].forEach((container) => {
      if (container) {
        container.innerHTML = "";
      }
    });
  }
}

// Inicializar cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  const animeBackground = new AnimeBackgroundEffects();

  // Control de visibilidad para optimizar rendimiento
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      animeBackground.toggle();
    } else {
      animeBackground.toggle();
    }
  });
});
