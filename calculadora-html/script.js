let operandoA;
let operandoB;
let operacion;

const init = () => {
  const resultado = document.getElementById("resultado");
  const reset = document.getElementById("reset");
  const punto = document.getElementById("punto");
  const masMenos = document.getElementById("masmenos");
  const porcentaje = document.getElementById("porcentaje");
  const division = document.getElementById("division");
  const multiplicacion = document.getElementById("multiplicacion");
  const resta = document.getElementById("resta");
  const suma = document.getElementById("suma");
  const cero = document.getElementById("cero");
  const igual = document.getElementById("igual");
  const uno = document.getElementById("uno");
  const dos = document.getElementById("dos");
  const tres = document.getElementById("tres");
  const cuatro = document.getElementById("cuatro");
  const cinco = document.getElementById("cinco");
  const seis = document.getElementById("seis");
  const siete = document.getElementById("siete");
  const ocho = document.getElementById("ocho");
  const nueve = document.getElementById("nueve");

  uno.onclick = function () {
    if (resultado.textContent.length <= 7) {
      resultado.textContent += "1";
    }
  };

  dos.onclick = function () {
    if (resultado.textContent.length <= 7) {
      resultado.textContent += "2";
    }
  };

  tres.onclick = function () {
    if (resultado.textContent.length <= 7) {
      resultado.textContent += "3";
    }
  };

  cuatro.onclick = function () {
    if (resultado.textContent.length <= 7) {
      resultado.textContent += "4";
    }
  };

  cinco.onclick = function () {
    if (resultado.textContent.length <= 7) {
      resultado.textContent += "5";
    }
  };

  seis.onclick = function () {
    if (resultado.textContent.length <= 7) {
      resultado.textContent += "6";
    }
  };

  siete.onclick = function () {
    if (resultado.textContent.length <= 7) {
      resultado.textContent += "7";
    }
  };

  ocho.onclick = function () {
    if (resultado.textContent.length <= 7) {
      resultado.textContent += "8";
    }
  };

  nueve.onclick = function () {
    if (resultado.textContent.length <= 7) {
      resultado.textContent += "9";
    }
  };

  cero.onclick = function () {
    if (resultado.textContent.length <= 7) {
      resultado.textContent += "0";
    }
  };

  punto.onclick = function () {
    if (resultado.textContent.indexOf(".") === -1) {
      resultado.textContent += ".";
    }
  };

  masMenos.onclick = function () {
    if (
      resultado.textContent === "" &&
      resultado.textContent.indexOf("-") === -1
    ) {
      resultado.textContent += "-";
    }
  };

  reset.onclick = function () {
    resetear();
  };

  suma.onclick = function () {
    if (operacion !== "+") {
      operandoA = resultado.textContent;
      operacion = "+";
      limpiar();
    }
  };

  resta.onclick = function () {
    if (operacion !== "-") {
      operandoA = resultado.textContent;
      operacion = "-";
      limpiar();
    }
  };

  division.onclick = function () {
    if (operacion !== "/") {
      operandoA = resultado.textContent;
      operacion = "/";
      limpiar();
    }
  };

  multiplicacion.onclick = function () {
    if (operacion !== "*") {
      operandoA = resultado.textContent;
      operacion = "*";
      limpiar();
    }
  };

  porcentaje.onclick = function () {
    if (operacion !== "%") {
      operandoA = resultado.textContent;
      operacion = "%";
      limpiar();
    }
  };

  igual.onclick = function () {
    operandoB = resultado.textContent;
    resolver();
  };
};

init();

const limpiar = () => {
  resultado.textContent = "";
};

const resetear = () => {
  resultado.textContent = "";
  operandoA = 0;
  operandoB = 0;
  operacion = "";
};

const resolver = () => {
  let res = 0;
  switch (operacion) {
    case "+":
      res = parseFloat(operandoA) + parseFloat(operandoB);
      break;
    case "-":
      res = parseFloat(operandoA) - parseFloat(operandoB);
      break;
    case "*":
      res = parseFloat(operandoA) * parseFloat(operandoB);
      break;
    case "/":
      if (operandoB == 0) {
        res = "Error";
      } else {
        res = parseFloat(operandoA) / parseFloat(operandoB);
      }

      break;
    case "%":
      res = (parseFloat(operandoA) * parseFloat(operandoB)) / 100;
      break;
  }

  if (res.toString().length > 8) {
    resetear();
    resultado.textContent = res.toExponential(2);
  } else {
    resetear();
    resultado.textContent = res;
  }
};

const check = () => {
  if (operandoA.length > 3) {
    resultado.textcontent = operandoA("display error");
  }
};

check();
