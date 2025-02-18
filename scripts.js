// Navegación entre páginas
const pages = document.querySelectorAll("main");
const showPage = (pageId) => {
  pages.forEach((page) => page.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");
};

// Interacción en la página 1
const buttonNo = document.querySelector("#no");
const buttonYes = document.querySelector("#yes");

let fontSize = 1;
const messages = [
  "¿Estás segura?", "Piénsalo bien", "Mira el otro botón", 
  "No te apresures", "Reflexiónalo bien"
];

buttonNo.addEventListener("click", () => {
  fontSize += 0.2;
  buttonYes.style.fontSize = `${fontSize}rem`;
  buttonNo.textContent = messages[Math.floor(Math.random() * messages.length)];
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