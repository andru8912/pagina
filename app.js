const textoDias = document.getElementsByClassName("dias");
const textoHoras = document.getElementsByClassName("horas");
const textoMinutos = document.getElementsByClassName("minutos");
const textoSegundos = document.getElementsByClassName("segundos");

const fechaLanzamiento = new Date("April 30, 2024 12:00:00");

const button = document.getElementById("Send");

button.addEventListener("click", function() {
  alert("Registrado con exito");
});

function actualizarContador() {
  const fechaActual = new Date();

  const diferencia = fechaLanzamiento - fechaActual;

  if (diferencia <= 0) {
    contador.innerHTML = "¡Launcher ya está disponible!";
    return;
  }

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);


  if (dias > 0) {
    textoDias[0].innerHTML = dias;
  }

 
  if (horas > 0) {
    textoHoras[0].innerHTML = horas;
  }

  if (minutos > 0) {
    textoMinutos[0].innerHTML = minutos;
  }

  if (segundos > 0) {
    textoSegundos[0].innerHTML =segundos;
  }

}

actualizarContador();

setInterval(actualizarContador, 1000);