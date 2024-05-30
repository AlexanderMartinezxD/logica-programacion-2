function convertirTem() {
    let celcius;
    
    while (true) {
        celcius = parseFloat(prompt("Ingrese la temperatura en grados Celsius a convertir"));

        if (!isNaN(celcius)) {
            break;
        }
        alert("Debe ingresar un número válido.");
    }

    let celciusElement = document.getElementById("celcius-c°");
    let resultadoFahrenheitElement = document.getElementById("resultado-c°-f°");
    let resultadoKelvinElement = document.getElementById("resultado-c°-k°");

    let fahrenheit = celcius * (9 / 5) + 32;
    let kelvin = celcius + 273.15;

    console.log("Los grados Celsius " + celcius + "°C convertidos a Fahrenheit son " + fahrenheit + "°F");
    console.log(`Los grados Celsius ${celcius} convertidos a Kelvin son: ${kelvin}°K`);

    celciusElement.textContent = `Grados Celsius ingresados: ${celcius}°C`;
    resultadoFahrenheitElement.textContent = `La temperatura en grados Fahrenheit es: ${fahrenheit}°F`;
    resultadoKelvinElement.textContent = `La temperatura en grados Kelvin es: ${kelvin}°K`;
}

convertirTem();