let cantidad = 1


function cambiar(valor) {
  cantidad = cantidad + valor;
  if (cantidad < 1) cantidad = 1;
  document.getElementById("numero").innerText = cantidad;
}

const carta = document.getElementById("carta");
const menu = document.querySelector(".menu");

carta.addEventListener("click", function () {
  menu.classList.toggle("activo");
});