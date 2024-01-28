function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

function celsiusToRankine(celsius) {
    return (celsius + 273.15) * 9/5;
}

function celsiusToNewton(celsius) {
    return celsius * 33/100;
}

function celsiusToDelisle(celsius) {
    return (100 - celsius) * 3/2;
}

function celsiusToRéaumur(celsius) {
    return celsius * 4/5;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function fahrenheitToKelvin(fahrenheit) {
    return (fahrenheit + 459.67) * 5/9;
}

function fahrenheitToRankine(fahrenheit) {
    return fahrenheit + 459.67;
}

function fahrenheitToNewton(fahrenheit) {
    return (fahrenheit - 32) * 11/60;
}

function fahrenheitToDelisle(fahrenheit) {
    return (212 - fahrenheit) * 5/6;
}

function fahrenheitToRéaumur(fahrenheit) {
    return (fahrenheit - 32) * 4/9;
}

function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

function kelvinToFahrenheit(kelvin) {
    return (kelvin * 9/5) - 459.67;
}

function kelvinToRankine(kelvin) {
    return kelvin * 9/5;
}

function kelvinToNewton(kelvin) {
    return (kelvin - 273.15) * 33/100;
}

function kelvinToDelisle(kelvin) {
    return (373.15 - kelvin) * 3/2;
}

function kelvinToRéaumur(kelvin) {
    return (kelvin - 273.15) * 4/5;
}

function rankineToCelsius(rankine) {
    return (rankine - 491.67) * 5/9;
}

function rankineToFahrenheit(rankine) {
    return rankine - 459.67;
}

function rankineToKelvin(rankine) {
    return rankine * 5/9;
}

function rankineToNewton(rankine) {
    return (rankine - 491.67) * 33/100;
}

function rankineToDelisle(rankine) {
    return (671.67 - rankine) * 3/2;
}

function rankineToRéaumur(rankine) {
    return (rankine - 491.67) * 4/9;
}

function newtonToCelsius(newton) {
    return newton * 100/33;
}

function newtonToFahrenheit(newton) {
    return (newton * 60/11) + 32;
}

function newtonToKelvin(newton) {
    return (newton * 100/33) + 273.15;
}

function newtonToRankine(newton) {
    return (newton * 100/33) * 9/5 + 491.67;
}

function newtonToDelisle(newton) {
    return (33 - newton) * 50/11;
}

function newtonToRéaumur(newton) {
    return newton * 80/33;
}

function delisleToCelsius(delisle) {
    return 100 - (delisle * 2/3);
}

function delisleToFahrenheit(delisle) {
    return 212 - (delisle * 6/5);
}

function delisleToKelvin(delisle) {
    return 373.15 - (delisle * 2/3);
}

function delisleToRankine(delisle) {
    return 671.67 - (delisle * 6/5);
}

function delisleToNewton(delisle) {
    return 33 - (delisle * 11/50);
}

function delisleToRéaumur(delisle) {
    return 80 - (delisle * 8/15);
}

function réaumurToCelsius(réaumur) {
    return réaumur * 5/4;
}

function réaumurToFahrenheit(réaumur) {
    return (réaumur * 9/4) + 32;
}

function réaumurToKelvin(réaumur) {
    return (réaumur * 5/4) + 273.15;
}

function réaumurToRankine(réaumur) {
    return (réaumur * 9/4) + 491.67;
}

function réaumurToNewton(réaumur) {
    return (réaumur * 33/80);
}

function réaumurToDelisle(réaumur) {
    return 80 - (réaumur * 15/8);
}

function temperatureConverter() {
    console.log("Temperature Converter");

    // Get user input for temperature, input scale, and output scale
    let temperature = parseFloat(prompt("Enter the temperature:"));
    let inputScale = prompt("Enter the input scale (C, F, K, R, N, D, Re):").toUpperCase();
    let outputScale = prompt("Enter the output scale (C, F, K, R, N, D, Re):").toUpperCase();

    // Perform conversion based on user input
    let convertedTemperature;
    switch (inputScale) {
        case 'C':
            convertedTemperature = temperature;
            break;
        case 'F':
            convertedTemperature = fahrenheitToCelsius(temperature);
            break;
        case 'K':
            convertedTemperature = kelvinToCelsius(temperature);
            break;
        case 'R':
            convertedTemperature = rankineToCelsius(temperature);
            break;
        case 'N':
            convertedTemperature = newtonToCelsius(temperature);
            break;
        case 'D':
            convertedTemperature = delisleToCelsius(temperature);
            break;
        case 'RE':
            convertedTemperature = réaumurToCelsius(temperature);
            break;
        default:
            console.log("Invalid input scale. Please enter C, F, K, R, N, D, or Re.");
            return;
    }

    switch (outputScale) {
        case 'C':
            // Do nothing, already in Celsius
            break;
        case 'F':
            convertedTemperature = celsiusToFahrenheit(convertedTemperature);
            break;
        case 'K':
            convertedTemperature = celsiusToKelvin(convertedTemperature);
            break;
        case 'R':
            convertedTemperature = celsiusToRankine(convertedTemperature);
            break;
        case 'N':
            convertedTemperature = celsiusToNewton(convertedTemperature);
            break;
        case 'D':
            convertedTemperature = celsiusToDelisle(convertedTemperature);
            break;
        case 'RE':
            convertedTemperature = celsiusToRéaumur(convertedTemperature);
            break;
        default:
            console.log("Invalid output scale. Please enter C, F, K, R, N, D, or Re.");
            return;
    }

    console.log(`${temperature} ${inputScale} is equal to ${convertedTemperature} ${outputScale}.`);
}

// Call the temperatureConverter function
temperatureConverter();
