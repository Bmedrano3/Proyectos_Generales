// Navegación entre páginas
const pages = document.querySelectorAll("main");
const showPage = (pageId) => {
  pages.forEach((page) => page.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");
};

// Interacción en la página 1
const buttonNo = document.querySelector("#no");
const buttonYes = document.querySelector("#yes");

let fontSizeYes = 1; // Tamaño inicial del botón "Sí"
let fontSizeNo = 1; // Tamaño inicial del botón "No"
const minWidthNo = 7; // Ancho mínimo del botón "No" en píxeles
const minHeightNo = 5; // Alto mínimo del botón "No" en píxeles
const messages = [
  "¿Estás segura?", "Piénsalo bien", "Mira el otro botón", 
  "No te apresures", "Reflexiónalo bien"
];

buttonNo.addEventListener("click", () => {
  // Reducir el tamaño del botón "No"
  if (buttonNo.offsetWidth > minWidthNo && buttonNo.offsetHeight > minHeightNo) {
    fontSizeNo -= 0.1; // Reducimos el tamaño del botón "No"
    buttonNo.style.fontSize = `${fontSizeNo}rem`;
    buttonNo.style.padding = `${fontSizeNo * 0.5}rem ${fontSizeNo * 0.8}rem`; // Ajustar el padding
  }

  // Cambiar el texto del botón "No"
  buttonNo.textContent = messages[Math.floor(Math.random() * messages.length)];

  // Aumentar el tamaño del botón "Sí"
  fontSizeYes += 0.2;
  buttonYes.style.fontSize = `${fontSizeYes}rem`;
});

buttonYes.addEventListener("click", () => showPage("page2"));

// Interacción en la página 2
document.querySelector("#go_to_letter").addEventListener("click", () => showPage("page3"));

// Interacción en la página 3 (Sobre de la carta)
const btnOpen = document.querySelector("#open");
const btnClose = document.querySelector("#close");

btnOpen.addEventListener("click", () => {
  document.querySelector(".cover").classList.add("open-cover");
  document.querySelector(".letter").classList.add("open-letter");
  btnOpen.disabled = true;
  btnClose.disabled = false;
});

btnClose.addEventListener("click", () => {
  document.querySelector(".cover").classList.remove("open-cover");
  document.querySelector(".letter").classList.remove("open-letter");
  btnOpen.disabled = false;
  btnClose.disabled = true;
});

document.querySelector("#read_me").addEventListener("click", () => showPage("page4"));

// Interacción en la página 4 (Carta escrita)
document.querySelector("#accept").addEventListener("click", () => showPage("page5"));
document.querySelector("#reject").addEventListener("click", () => showPage("page6"));