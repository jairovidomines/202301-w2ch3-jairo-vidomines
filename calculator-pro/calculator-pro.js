let resultados = [];
let promptNumbers = [];

function calculadoraPro() {
  // Introducir números
  const getNumbers = () => {
    const givenNumbers = [];
    let number;
    do {
      number = Number(prompt("Enter a number"));
      if (isNaN(number)) {
        alert("Note: you must enter only numbers");
        return getNumbers();
      }

      if (givenNumbers.length < 1 && number === 0) {
        alert("Note: you must enter a number");
        return getNumbers();
      }

      if (number !== 0) {
        givenNumbers.push(number);
      }
    } while (number !== 0);

    return givenNumbers;
  };

  promptNumbers = getNumbers();

  // Calcular
  const calcular = () => {
    const calculos = [];
    if (promptNumbers.length > 1) {
      const suma = promptNumbers.reduce((sum, num) => sum + num);
      const resta = promptNumbers.reduce((rest, num) => rest - num);
      const multiplica = promptNumbers.reduce((mult, num) => mult * num);
      const divide = promptNumbers.reduce((div, num) => div / num).toFixed(3);

      calculos.push(
        "\nAdd: " +
          suma +
          "\nSubtract: " +
          resta +
          "\nMultiply: " +
          multiplica +
          "\nDivide: " +
          divide
      );
      return calculos;
    }

    const raizCuadrada = Math.sqrt(promptNumbers[0]);

    calculos.push(raizCuadrada.toFixed(3).replace());
    return calculos;
  };

  resultados = calcular();

  // Imprimir resultados
  const imprimirResultados = () => {
    if (promptNumbers.length > 2) {
      alert(
        "The entered numbers are " +
          promptNumbers +
          ", and the results are: " +
          resultados
      );
    } else {
      alert(
        "The entered number is: " +
          promptNumbers +
          ", and its square root is: " +
          resultados
      );
    }
  };

  imprimirResultados();

  // Preguntar si recalcular

  const reCalcular = () => {
    if (confirm("Do you want to enter another number?")) {
      return calculadoraPro();
    }

    alert("Have a nice day!");
  };

  reCalcular();
}

calculadoraPro();
