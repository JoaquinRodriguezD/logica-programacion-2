// Función para validar que sea un número
function esNumero(valor) {
  return !isNaN(parseFloat(valor)) && isFinite(valor);
}

// Función para convertir de Celsius a Fahrenheit
function celsiusAFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// Función para convertir de Celsius a Kelvin
function celsiusAKelvin(celsius) {
  return celsius + 273.15;
}

// Función principal
function convertirTemperatura() {
  const inputElement = document.getElementById("grados");
  const entrada = inputElement.value;

  if (!esNumero(entrada)) {
    alert("Error: Por favor ingrese un valor numérico válido.");
    inputElement.value = "";
    inputElement.focus();
    return;
  }

  const celsius = parseFloat(entrada);

  // Realizar conversiones
  const kelvin = celsiusAKelvin(celsius);
  const fahrenheit = celsiusAFahrenheit(celsius);

  // Mostrar resultados en consola
  console.log(`Grados Kelvin: ${kelvin}`);
  console.log(`Grados Fahrenheit: ${fahrenheit}`);

  // Mostrar resultados en el DOM
  // Buscar si ya existe un div de resultados
  let resultadoDiv = document.getElementById("resultado");

  resultadoDiv.innerHTML = `
      <h3>Resultados:</h3>
      <p>Grados Kelvin: ${kelvin}</p>
      <p>Grados Fahrenheit: ${fahrenheit}</p>
    `;
}
