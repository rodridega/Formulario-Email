//VARIABLES
const email = document.getElementById("email");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");
const formulario = document.querySelector("form");
const btnEnviar = document.getElementById("enviar");

addEventListeners();
function addEventListeners() {
  document.addEventListener("DOMContentLoaded", iniciarApp);

  email.addEventListener("blur", validarForm);
  asunto.addEventListener("blur", validarForm);
  mensaje.addEventListener("blur", validarForm);

  formulario.addEventListener('submit', enviarEmail)
}

//FUNCIONES

function iniciarApp() {
  btnEnviar.disabled = true;
}

function validarForm(e) {
  if (e.target.value.length === 0) {
    e.target.classList.remove("border", "border-success");
    e.target.classList.add("border", "border-danger");
    mensajeAlerta("Todos los campos son obligatorios");
  } else {
    e.target.classList.add("border", "border-success");
    const error = document.querySelector("p.error");
    if (error) {
      error.remove();
    }
  }
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (e.target.type === "email") {
    if (regex.test(e.target.value)) {
      const error = document.querySelector("p.error");
      if (error) {
      error.remove();
      }
      e.target.classList.remove("border", "border-danger");
      e.target.classList.add("border", "border-success");
    } else {
      e.target.classList.remove("border", "border-success");
      e.target.classList.add("border", "border-danger");
      btnEnviar.disabled = true;
      return mensajeAlerta("Email invalido");
    }
  }

  if (asunto.value !== "" && regex.test(email.value) && mensaje.value !== "") {
    btnEnviar.disabled = false;
  }
}

function mensajeAlerta(msj) {
  const error = document.querySelectorAll(".error");
  if (error.length === 0) {
    const mensaje = document.createElement("p");
    mensaje.textContent = msj;
    mensaje.classList.add(
      "border",
      "border-danger",
      "bg-danger",
      "bg-opacity-25",
      "text-center",
      "p-2",
      "error"
    );
    formulario.appendChild(mensaje);

    setTimeout(() => {
      mensaje.remove();
    }, 4000);
  }
}

function enviarEmail(e){
    e.preventDefault()
    const mensaje = document.createElement("p");
    mensaje.textContent = 'Email enviado!'
    mensaje.classList.add(
      "border",
      "border-success",
      "bg-success",
      "bg-opacity-25",
      "text-center",
      "p-2"
    );
    formulario.appendChild(mensaje);

    setTimeout(() => {
      mensaje.remove();
    }, 4000);
}
