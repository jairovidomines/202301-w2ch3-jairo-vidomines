const num1 = Number(prompt("Introduce un número"));
const num2 = Number(prompt("Introduce otro número"));

function suma() {
  return "Suma: " + num1 + " + " + num2 + " = " + (num1 + num2);
}

function resta() {
  return "Resta: " + num1 + " - " + num2 + " = " + (num1 - num2);
}

function multiplica() {
  return "Multiplicación: " + num1 + " x " + num2 + " = " + num1 * num2;
}

function divide() {
  return "División: " + num1 + " / " + num2 + " = " + (num1 / num2).toFixed(3);
}

const calculadora = [suma(), resta(), multiplica(), divide()];

if (num1 === 0 && num2 > 0) {
  console.log(Math.sqrt(num2));
} else if (num1 > 0 && num2 === 0) {
  console.log(Math.sqrt(num1));
} else if (isNaN(num1) || isNaN(num2)) {
  console.log("Aviso: debes indicar un número");
} else {
  console.log(calculadora);
}
