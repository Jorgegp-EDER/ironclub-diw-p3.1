import "./styles/main.scss";

const formulario = document.querySelector("#formulario-registro");
const mensaje = document.querySelector("#mensaje");

if (formulario) {
  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    mensaje.textContent = "Gracias, hemos recibido tu solicitud.";
    formulario.reset();
  });
}
