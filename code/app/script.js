document.getElementById("sumForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtener los valores ingresados por el usuario
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    // Calcular la suma
    let suma = num1 + num2;

    // Mostrar el resultado en la página
    document.getElementById("result").textContent = "El resultado es: " + suma;
  });