const boton = document.getElementById("botonDescubre");
const textoBoton = document.getElementById("textoBoton");
const sorpresa = document.getElementById("sorpresa");
const efectos = document.getElementById("efectos");

const corazones = ["♥", "❤", "💗", "💕", "💖"];
let primeraVez = true;

boton.addEventListener("click", () => {
  // Reinicia la animación para que pueda verse otra vez en cada clic.
  sorpresa.classList.remove("visible");
  void sorpresa.offsetWidth;
  sorpresa.classList.add("visible");

  textoBoton.textContent = primeraVez ? "Te amo" : "Otra vez";
  primeraVez = false;

  crearLluviaDeCorazones(30);
  crearDestellos(18);

  // Lleva suavemente la sorpresa al centro en pantallas pequeñas.
  setTimeout(() => {
    sorpresa.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }, 450);
});

function crearLluviaDeCorazones(cantidad) {
  for (let i = 0; i < cantidad; i += 1) {
    const corazon = document.createElement("span");
    corazon.className = "corazon";
    corazon.textContent = corazones[Math.floor(Math.random() * corazones.length)];

    const tamano = numeroAleatorio(18, 42);
    corazon.style.left = `${numeroAleatorio(2, 96)}%`;
    corazon.style.fontSize = `${tamano}px`;
    corazon.style.setProperty("--duracion", `${numeroAleatorio(4.5, 7.5)}s`);
    corazon.style.setProperty("--desplazamiento", `${numeroAleatorio(-120, 120)}px`);
    corazon.style.setProperty("--giro", `${numeroAleatorio(-80, 80)}deg`);
    corazon.style.animationDelay = `${numeroAleatorio(0, 1.3)}s`;

    efectos.appendChild(corazon);
    corazon.addEventListener("animationend", () => corazon.remove());
  }
}

function crearDestellos(cantidad) {
  for (let i = 0; i < cantidad; i += 1) {
    const destello = document.createElement("span");
    destello.className = "destello";
    destello.style.left = `${numeroAleatorio(8, 92)}%`;
    destello.style.top = `${numeroAleatorio(8, 90)}%`;
    destello.style.animationDelay = `${numeroAleatorio(0, 1.1)}s`;

    efectos.appendChild(destello);
    destello.addEventListener("animationend", () => destello.remove());
  }
}

function numeroAleatorio(minimo, maximo) {
  return Math.random() * (maximo - minimo) + minimo;
}
