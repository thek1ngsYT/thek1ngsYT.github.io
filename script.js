// TARJETAS DEL MENÚ: muestra cada producto con una animación suave al aparecer en pantalla.
// No necesitas modificar esta parte para añadir, editar o borrar productos.
const cards = document.querySelectorAll(".drink-card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

cards.forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(18px)";
  card.style.transition = "opacity .6s ease, transform .6s ease, border-color .35s ease, background .35s ease";
  observer.observe(card);
});

// AMPLIACIÓN DE FOTOS: crea la ventana que se abre al pulsar cualquier imagen de producto.
const modal = document.createElement("div");
modal.className = "image-modal";
modal.setAttribute("role", "dialog");
modal.setAttribute("aria-modal", "true");
modal.setAttribute("aria-label", "Imagen ampliada de la bebida");
modal.innerHTML = `
  <div class="image-modal__content">
    <button class="image-modal__close" type="button" aria-label="Cerrar imagen">&times;</button>
    <img class="image-modal__image" src="" alt="">
  </div>`;
document.body.appendChild(modal);

const modalImage = modal.querySelector(".image-modal__image");
const closeModalButton = modal.querySelector(".image-modal__close");
let lastFocusedElement;

function closeImageModal() {
  modal.classList.remove("is-open");
  document.body.classList.remove("modal-open");
  lastFocusedElement?.focus();
}

document.querySelectorAll(".drink-photo img").forEach((image) => {
  image.parentElement.setAttribute("tabindex", "0");
  image.parentElement.setAttribute("role", "button");
  image.parentElement.setAttribute("aria-label", `Ampliar imagen de ${image.alt}`);

  const openImageModal = () => {
    lastFocusedElement = document.activeElement;
    modalImage.src = image.src;
    modalImage.alt = image.alt;
    modal.classList.add("is-open");
    document.body.classList.add("modal-open");
    closeModalButton.focus();
  };

  image.parentElement.addEventListener("click", openImageModal);
  image.parentElement.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openImageModal();
    }
  });
});

closeModalButton.addEventListener("click", closeImageModal);
modal.addEventListener("click", (event) => {
  if (event.target === modal) closeImageModal();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) closeImageModal();
});

// TEMA CLARO/OSCURO: cambia los colores y guarda la elección en este navegador.
const themeToggle = document.querySelector(".theme-toggle");
const themeToggleText = themeToggle.querySelector(".theme-toggle__text");
const storedTheme = localStorage.getItem("menu-theme");

function setTheme(theme) {
  const isLight = theme === "light";
  document.body.classList.toggle("light-theme", isLight);
  themeToggle.setAttribute("aria-pressed", String(isLight));
  themeToggle.setAttribute("aria-label", isLight ? "Activar tema oscuro" : "Activar tema claro");
  themeToggle.querySelector("span[aria-hidden]").textContent = isLight ? "☾" : "☀";
  themeToggleText.textContent = isLight ? "TEMA ESCURO" : "TEMA CLARO";
}

setTheme(storedTheme === "light" ? "light" : "dark");

themeToggle.addEventListener("click", () => {
  const nextTheme = document.body.classList.contains("light-theme") ? "dark" : "light";
  setTheme(nextTheme);
  localStorage.setItem("menu-theme", nextTheme);
});

// MÚSICA DE FUNDO: o navegador só permite iniciar som após uma ação da pessoa.
// Coloque o arquivo MP3 em audio/ambiente.mp3 para que este botão tenha áudio.
const backgroundMusic = document.querySelector("#background-music");
const musicToggle = document.querySelector(".music-toggle");
const musicToggleText = musicToggle.querySelector(".music-toggle__text");

musicToggle.addEventListener("click", async () => {
  if (backgroundMusic.paused) {
    try {
      await backgroundMusic.play();
      musicToggle.setAttribute("aria-pressed", "true");
      musicToggle.setAttribute("aria-label", "Desativar música de fundo");
      musicToggleText.textContent = "MÚSICA ON";
    } catch {
      musicToggleText.textContent = "ADICIONE O MP3";
    }
    return;
  }

  backgroundMusic.pause();
  musicToggle.setAttribute("aria-pressed", "false");
  musicToggle.setAttribute("aria-label", "Ativar música de fundo");
  musicToggleText.textContent = "MÚSICA OFF";
});

// PARTÍCULAS MÁGICAS: cria pequenos brilhos dourados no ponto em que um produto foi clicado.
function createMagicParticles(x, y) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  for (let index = 0; index < 18; index += 1) {
    const particle = document.createElement("span");
    const angle = Math.random() * Math.PI * 2;
    const distance = 25 + Math.random() * 75;

    particle.className = "magic-particle";
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    particle.style.setProperty("--sparkle-x", `${Math.cos(angle) * distance}px`);
    particle.style.setProperty("--sparkle-y", `${Math.sin(angle) * distance}px`);
    particle.style.animationDelay = `${Math.random() * .08}s`;
    document.body.appendChild(particle);
    particle.addEventListener("animationend", () => particle.remove());
  }
}

document.querySelectorAll(".drink-card").forEach((card) => {
  card.addEventListener("click", (event) => createMagicParticles(event.clientX, event.clientY));
});
