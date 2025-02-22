const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

const nomeElemento = document.getElementById("nome");
const texto = "Bruno Oliveira";
let index = 0;

function escrever() {
  if (index < texto.length) {
    nomeElemento.innerHTML += texto.charAt(index);
    index++;
    setTimeout(escrever, 150);
  }
}

window.onload = () => {
  escrever();
};
