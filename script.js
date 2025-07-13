// Clase para manejar las animaciones de fondo
class BackgroundAnimation {
  constructor() {
    this.particlesContainer = document.getElementById("particlesContainer");
    this.gamingElements = document.getElementById("gamingElements");
    this.animeEffects = document.getElementById("animeEffects");
    this.constellationLines = document.getElementById("constellationLines");

    // Elementos gaming con SVG
    this.gamingIcons = [
      { id: "controller-icon", class: "controller" },
      { id: "gaming-sword", class: "sword" },
      { id: "gaming-shield", class: "shield" },
    ];

    // Elementos anime con SVG
    this.animeIcons = [
      { id: "anime-star", class: "star" },
      { id: "anime-heart", class: "heart" },
      { id: "anime-lightning", class: "lightning" },
    ];

    // Tipos de efectos de energía
    this.energyTypes = ["electric", "fire", "magic"];

    this.isActive = true;
    this.init();
  }

  init() {
    this.createPermanentParticles();
    this.createPermanentGamingElements();
    this.createPermanentAnimeEffects();
    this.createPermanentEnergyOrbs();
    this.createPermanentConstellationLines();
  }

  createPermanentParticles() {
    // Crear partículas permanentes que se animan infinitamente
    for (let i = 0; i < 25; i++) {
      setTimeout(() => this.createInfiniteParticle(i), i * 200);
    }
  }

  createInfiniteParticle(index) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.id = `particle-${index}`;

    // Tipos de partículas mejorados
    const types = ["golden", "blue", "pink", "anime", "electric"];
    const type = types[Math.floor(Math.random() * types.length)];
    particle.classList.add(type);

    // Tamaño aleatorio
    const size = Math.random() * 6 + 3;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    // Posición inicial aleatoria
    particle.style.left = `${Math.random() * 100}%`;

    // Duración aleatoria pero consistente
    const duration = Math.random() * 12 + 8;
    particle.style.setProperty("--duration", `${duration}s`);

    // Retraso inicial escalonado para efecto continuo
    particle.style.animationDelay = `${index * 0.3}s`;

    // Animación infinita
    particle.style.animation = `floatUp ${duration}s linear infinite`;

    this.particlesContainer.appendChild(particle);
  }

  createPermanentGamingElements() {
    // Crear elementos gaming permanentes
    for (let i = 0; i < 12; i++) {
      setTimeout(() => this.createInfiniteGamingElement(i), i * 400);
    }
  }

  createInfiniteGamingElement(index) {
    const element = document.createElement("div");
    element.className = "gaming-element";
    element.id = `gaming-element-${index}`;

    // Seleccionar icono aleatorio
    const icon =
      this.gamingIcons[Math.floor(Math.random() * this.gamingIcons.length)];
    element.classList.add(icon.class);

    // Crear SVG
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 24 24");

    const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
    use.setAttribute("href", `#${icon.id}`);
    svg.appendChild(use);
    element.appendChild(svg);

    // Posición inicial aleatoria
    element.style.left = `${Math.random() * 100}%`;

    // Duración aleatoria pero consistente
    const duration = Math.random() * 15 + 12;
    element.style.setProperty("--duration", `${duration}s`);

    // Retraso inicial escalonado
    element.style.animationDelay = `${index * 0.8}s`;

    // Efectos especiales aleatorios
    if (Math.random() < 0.4) {
      element.classList.add("electric");
    }

    // Animación infinita
    element.style.animation = `elementFloat ${duration}s ease-in-out infinite`;

    this.gamingElements.appendChild(element);
  }

  createPermanentAnimeEffects() {
    // Crear efectos anime permanentes
    for (let i = 0; i < 10; i++) {
      setTimeout(() => this.createInfiniteAnimeEffect(i), i * 500);
    }
  }

  createInfiniteAnimeEffect(index) {
    const effect = document.createElement("div");
    effect.className = "anime-effect";
    effect.id = `anime-effect-${index}`;

    // Seleccionar icono aleatorio
    const icon =
      this.animeIcons[Math.floor(Math.random() * this.animeIcons.length)];
    effect.classList.add(icon.class);

    // Crear SVG
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 24 24");

    const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
    use.setAttribute("href", `#${icon.id}`);
    svg.appendChild(use);
    effect.appendChild(svg);

    // Posición inicial aleatoria
    effect.style.left = `${Math.random() * 100}%`;

    // Duración aleatoria pero consistente
    const duration = Math.random() * 14 + 10;
    effect.style.setProperty("--duration", `${duration}s`);

    // Retraso inicial escalonado
    effect.style.animationDelay = `${index * 0.6}s`;

    // Efectos especiales aleatorios
    if (Math.random() < 0.5) {
      effect.classList.add("magic");
    }

    // Animación infinita
    effect.style.animation = `animeFloat ${duration}s ease-in-out infinite`;

    this.animeEffects.appendChild(effect);
  }

  createEnergyOrb() {
    const orb = document.createElement("div");
    orb.className = "energy-orb";

    // Tipo de energía aleatorio
    const type =
      this.energyTypes[Math.floor(Math.random() * this.energyTypes.length)];
    orb.classList.add(type);

    // Tamaño aleatorio
    const size = Math.random() * 15 + 10;
    orb.style.width = `${size}px`;
    orb.style.height = `${size}px`;

    // Posición inicial aleatoria
    orb.style.left = `${Math.random() * 100}%`;

    // Duración aleatoria
    const duration = Math.random() * 9 + 6;
    orb.style.setProperty("--duration", `${duration}s`);

    this.particlesContainer.appendChild(orb);

    // Eliminar después de la animación
    setTimeout(() => {
      if (orb.parentNode) {
        orb.parentNode.removeChild(orb);
      }
    }, duration * 1000);
  }

  createConstellationLines() {
    // Crear líneas iniciales
    for (let i = 0; i < 4; i++) {
      setTimeout(() => this.createConstellationLine(), i * 500);
    }
  }

  createConstellationLine() {
    const line = document.createElement("div");
    line.className = "constellation-line";

    // Efectos mejorados aleatorios
    if (Math.random() < 0.6) {
      line.classList.add("animated");
    }

    // Posición vertical aleatoria
    line.style.top = `${Math.random() * 100}%`;

    // Ancho aleatorio
    const width = Math.random() * 200 + 100;
    line.style.width = `${width}px`;

    // Duración aleatoria
    const duration = Math.random() * 8 + 5;
    line.style.setProperty("--duration", `${duration}s`);

    this.constellationLines.appendChild(line);

    // Eliminar después de la animación
    setTimeout(() => {
      if (line.parentNode) {
        line.parentNode.removeChild(line);
      }
    }, duration * 1000);
  }

  createPermanentEnergyOrbs() {
    // Crear orbes de energía permanentes
    for (let i = 0; i < 8; i++) {
      setTimeout(() => this.createInfiniteEnergyOrb(i), i * 600);
    }
  }

  createInfiniteEnergyOrb(index) {
    const orb = document.createElement("div");
    orb.className = "energy-orb";
    orb.id = `energy-orb-${index}`;

    // Tipo de energía aleatorio
    const type =
      this.energyTypes[Math.floor(Math.random() * this.energyTypes.length)];
    orb.classList.add(type);

    // Tamaño aleatorio
    const size = Math.random() * 15 + 10;
    orb.style.width = `${size}px`;
    orb.style.height = `${size}px`;

    // Posición inicial aleatoria
    orb.style.left = `${Math.random() * 100}%`;

    // Duración aleatoria pero consistente
    const duration = Math.random() * 11 + 8;
    orb.style.setProperty("--duration", `${duration}s`);

    // Retraso inicial escalonado
    orb.style.animationDelay = `${index * 0.7}s`;

    // Animación infinita
    orb.style.animation = `energyPulse ${duration}s ease-in-out infinite`;

    this.particlesContainer.appendChild(orb);
  }

  createPermanentConstellationLines() {
    // Crear líneas permanentes
    for (let i = 0; i < 6; i++) {
      setTimeout(() => this.createInfiniteConstellationLine(i), i * 700);
    }
  }

  createInfiniteConstellationLine(index) {
    const line = document.createElement("div");
    line.className = "constellation-line";
    line.id = `constellation-line-${index}`;

    // Efectos mejorados aleatorios
    if (Math.random() < 0.7) {
      line.classList.add("animated");
    }

    // Posición vertical aleatoria
    line.style.top = `${Math.random() * 100}%`;

    // Ancho aleatorio
    const width = Math.random() * 250 + 120;
    line.style.width = `${width}px`;

    // Duración aleatoria pero consistente
    const duration = Math.random() * 10 + 6;
    line.style.setProperty("--duration", `${duration}s`);

    // Retraso inicial escalonado
    line.style.animationDelay = `${index * 0.9}s`;

    // Animación infinita
    line.style.animation = `lineMove ${duration}s linear infinite`;

    this.constellationLines.appendChild(line);
  }

  // Método para pausar/reanudar animaciones
  toggle() {
    this.isActive = !this.isActive;
    const allElements = [
      ...this.particlesContainer.children,
      ...this.gamingElements.children,
      ...this.animeEffects.children,
      ...this.constellationLines.children,
    ];

    allElements.forEach((element) => {
      if (this.isActive) {
        element.style.animationPlayState = "running";
      } else {
        element.style.animationPlayState = "paused";
      }
    });
  }

  // Método para limpiar todas las animaciones
  cleanup() {
    this.isActive = false;
    [
      this.particlesContainer,
      this.gamingElements,
      this.animeEffects,
      this.constellationLines,
    ].forEach((container) => {
      if (container) {
        container.innerHTML = "";
      }
    });
  }
}

// Inicializar las animaciones cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  const backgroundAnimation = new BackgroundAnimation();

  // Opcional: Pausar animaciones cuando la página no esté visible (para rendimiento)
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      backgroundAnimation.toggle();
    } else {
      backgroundAnimation.toggle();
    }
  });
});
