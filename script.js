const boton = document.getElementById("botonDescubre");
const foto = document.getElementById("foto");

boton.addEventListener("click", () => {
  // Quitamos la clase para poder repetir la animación en cada clic.
  foto.classList.remove("mostrar");

  // Forzamos al navegador a reiniciar la animación.
  void foto.offsetWidth;

  foto.classList.add("mostrar");
});
