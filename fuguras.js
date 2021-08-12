//Código del cuadrado
console.group("Cuadrado");
// const ladoCuadrado = 5;

// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
  return lado * 4;
}
perimetroCuadrado();

// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado){
  return lado * lado
}
areaCuadrado();

// console.log("El área del cuadrado es: " + areaCuadrado + "cm²");

console.groupEnd();

//Código del triángulo
console.group("Triángulo");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(
//   "Los lados del triángulo miden: "
//   + ladoTriangulo1
//   + "cm, "
//   + ladoTriangulo2
//   + "cm, "
//   + baseTriangulo
//   + "cm"
//   );
  
  // const alturaTriangulo = 5.5;
  // console.log("La altura triángulo es: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base){
  return (Number(lado1) + Number(lado2) + Number(base));
}
perimetroTriangulo();

// console.log("El perimetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura){
  return (base * altura) / 2;
}
areaTriangulo();

// console.log("El área del Triángulo es: " + areaTriangulo + "cm²");
function AlturaIsoceles (ladoA, ladoB, base){
  if (ladoA == ladoB && ladoA != base) {
    alert("Muy bien es un triangulo isósceles");
    const cateto = (base / 2) ** 2;
    const hipotenusa = (ladoA) ** 2;
    const altura = Math.sqrt((hipotenusa - cateto));
    return(altura);

  } else {
    alert("No es un triángulo isósceles");
  }
}

console.groupEnd();

//Código del círculo
console.group("Círculo");

// radio
// const radioCirculo = 4;
// console.log("El radio del Círculo es " + radioCirculo + "cm");

// Diámetro
function diametroCirculo(radio){
  return radio * 2;
}
diametroCirculo();

// console.log("El diámetro del Círculo es: " + diametroCirculo + "cm");

//PI
const PI = Math.PI;
console.log("PI es igual a: " + PI);

// Perímetro o Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}
perimetroCirculo();

// console.log("El perímetro de círculo es: " + perimetroCirculo + "cm");

// Área
function areaCirculo(radio){
  return (radio * radio) * PI;
}
areaCirculo();

// console.log("El área del círculo es: "+ areaCirculo + "cm²");
console.groupEnd();

// aqui interactiamos con HTML

function calcularPerimetroCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro + " cm");
}




function calcularAreaCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area + " cm²");
}


function calcularPerimetroTriangulo() {
  const inputLado1 = document.getElementById("inputLado1T");
  const inputLado2 = document.getElementById("inputLado2T");
  const inputBase = document.getElementById("inputBaseT");

  const value1 = inputLado1.value;
  const value2 = inputLado2.value;
  const valueB = inputBase.value;

  

  const perimetro = perimetroTriangulo(value1, value2, valueB);
  alert(perimetro + " cm");
}


function calcularAreaTriangulo() {
  const inputLado1 = document.getElementById("inputLado1T");
  const inputLado2 = document.getElementById("inputLado2T");
  const inputBase = document.getElementById("inputBaseT");

  const value1 = inputLado1.value;
  const value2 = inputLado2.value;
  const valueB = inputBase.value;

  const area = areaTriangulo(value1, value2, valueB);
  alert(area + " cm²");
}

function calcularAlturaIsosceles() {
  const inputLado1 = document.getElementById("inputLado1T");
  const inputLado2 = document.getElementById("inputLado2T");
  const inputBase = document.getElementById("inputBaseT");

  const value1 = inputLado1.value;
  const value2 = inputLado2.value;
  const valueB = inputBase.value;

  const altura = AlturaIsoceles(value1, value2, valueB);
  alert(altura + " cm")
}

function calcularPerimetroCirculo() {
  const inputradio = document.getElementById("inputCirculo");

  const value1 = inputradio.value;

  const perimetro = perimetroCirculo(value1);
  alert(perimetro + " cm")
}

function calcularAreaCirculo() {
  const inputradio = document.getElementById("inputCirculo");

  const value1 = inputradio.value;

  const perimetro = areaCirculo(value1);
  alert(perimetro + " cm²")
}