let operandoA;
let operandoB;
let operacion;

const init = () => {
  let resultado = document.getElementById('resultado');
  let reset = document.getElementById('reset');
  let punto = document.getElementById('punto');
  let masMenos = document.getElementById('masmenos');
  let porcentaje = document.getElementById('porcentaje');
  let division = document.getElementById('division');
  let multiplicacion = document.getElementById('multiplicacion');
  let resta = document.getElementById('resta');
  let suma = document.getElementById('suma');
  let cero = document.getElementById('cero');
  let igual = document.getElementById('igual');
  let uno = document.getElementById('uno');
  let dos = document.getElementById('dos');
  let tres = document.getElementById('tres');
  let cuatro = document.getElementById('cuatro');
  let cinco = document.getElementById('cinco');
  let seis = document.getElementById('seis');
  let siete = document.getElementById('siete');
  let ocho = document.getElementById('ocho');
  let nueve = document.getElementById('nueve');

  uno.onclick = function () {
    if (resultado.textContent.length <= 7) {
      resultado.textContent = resultado.textContent + "1";
    }
  };
  dos.onclick = function () {
    if (resultado.textContent.length <= 7) {
      resultado.textContent = resultado.textContent + "2";
    }
  };
  tres.onclick = function () {
    if (resultado.textContent.length <= 7) {
      resultado.textContent = resultado.textContent + "3";
    }
  };
  cuatro.onclick = function () {
    if (resultado.textContent.length <= 7) {
      resultado.textContent = resultado.textContent + "4";
    }
  };
  cinco.onclick = function () {
    if (resultado.textContent.length <= 7) {
      resultado.textContent = resultado.textContent + "5";
    }
  };
  seis.onclick = function () {
    if (resultado.textContent.length <= 7) {
      resultado.textContent = resultado.textContent + "6";
    }
  };
  siete.onclick = function () {
    if (resultado.textContent.length <= 7) {
      resultado.textContent = resultado.textContent + "7";
    }
  };
  ocho.onclick = function () {
    if (resultado.textContent.length <= 7) {
      resultado.textContent = resultado.textContent + "8";
    }
  };
  nueve.onclick = function () {
    if (resultado.textContent.length <= 7) {
      resultado.textContent = resultado.textContent + "9";
    }
  };
  cero.onclick = function () {
    if (resultado.textContent.length <= 7) {
      resultado.textContent = resultado.textContent + "0";
    }
  };
  punto.onclick = function () {
    if (resultado.textContent.indexOf(".") === -1) {
      resultado.textContent = resultado.textContent + ".";
    }
  };
  masMenos.onclick = function () {
    if (resultado.textContent === "" && resultado.textContent.indexOf("-") === -1) {
      resultado.textContent = resultado.textContent + "-";
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
  switch(operacion) {
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
  };
};

const check = () => {
  if (operandoA.length > 3) {
    resultado.textcontent = operandoA("display error")
  }
};
check();
