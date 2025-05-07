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


document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggle-mode");
  const body = document.body;

  toggleButton.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    localStorage.setItem("theme", body.classList.contains("light-mode") ? "light" : "dark");
  });

  if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-mode");
  }
});

