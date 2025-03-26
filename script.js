const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

const nomeElemento = document.getElementById("nome");
const texto = "Bruno Oliveira";
let index = 0;

function escrever() {
  nomeElemento.innerHTML = "";
  index = 0;
  digitar();
}

function digitar() {
  if (index < texto.length) {
    nomeElemento.innerHTML += texto.charAt(index);
    index++;
    setTimeout(digitar, 150);
  }
}

window.onload = () => {
  escrever();
};
