// const precioOriginal = 120;
// const descuento = 18;

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajeConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajeConDescuento) / 100;

  return precioConDescuento;
}

function onClickButtonPrice() {
  const inputPrice = document.getElementById("InputPrecio");
  const priceValue = inputPrice.value;

  const inputDiscount = document.getElementById("InputDescuento");
  const discountValue = inputDiscount.value;

  const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

  const resultPrice = document.getElementById("resultPrice");
  resultPrice.innerText = "El valor de tu producto con descuento es: $" + precioConDescuento;
}
