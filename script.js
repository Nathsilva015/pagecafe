let cantidad = 1


function cambiar(valor) {
  cantidad = cantidad + valor;
  if (cantidad < 1) cantidad = 1;
  document.getElementById("numero").innerText = cantidad;
}