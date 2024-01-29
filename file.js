// Temperature conversion functions

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

// Temperature converter function

function temperatureConverter() {
    console.log("Temperature Converter");

    // Get user input for temperature, input scale, and output scale
    let temperature = parseFloat(prompt("Enter the temperature:"));
    let inputScale = prompt("Enter the input scale (C, F, K, R, N, D, Re):").toUpperCase();
    let outputScale = prompt("Enter the output scale (C, F, K, R, N, D, Re):").toUpperCase();

    // Perform conversion based on user input
    let convertedTemperature = convertTemperature(temperature, inputScale, outputScale);

    // Display the result
    console.log(`${temperature} ${inputScale} is equal to ${convertedTemperature} ${outputScale}.`);
}

// Temperature conversion helper function

function convertTemperature(temperature, inputScale, outputScale) {
    let convertedTemperature;

    switch (inputScale) {
        case 'C':
            convertedTemperature = celsiusConversion(temperature, outputScale);
            break;
        case 'F':
            convertedTemperature = fahrenheitConversion(temperature, outputScale);
            break;
        case 'K':
            convertedTemperature = kelvinConversion(temperature, outputScale);
            break;
        case 'R':
            convertedTemperature = rankineConversion(temperature, outputScale);
            break;
        case 'N':
            convertedTemperature = newtonConversion(temperature, outputScale);
            break;
        case 'D':
            convertedTemperature = delisleConversion(temperature, outputScale);
            break;
        case 'RE':
            convertedTemperature = réaumurConversion(temperature, outputScale);
            break;
        default:
            console.log("Invalid input scale. Please enter C, F, K, R, N, D, or Re.");
            return;
    }

    return convertedTemperature;
}

// Individual temperature conversion functions

function celsiusConversion(temperature, outputScale) {
    switch (outputScale) {
        case 'C':
            return temperature;
        case 'F':
            return celsiusToFahrenheit(temperature);
        case 'K':
            return celsiusToKelvin(temperature);
        case 'R':
            return celsiusToRankine(temperature);
        case 'N':
            return celsiusToNewton(temperature);
        case 'D':
            return celsiusToDelisle(temperature);
        case 'RE':
            return celsiusToRéaumur(temperature);
        default:
            console.log("Invalid output scale. Please enter C, F, K, R, N, D, or Re.");
            return;
    }
}

function fahrenheitConversion(temperature, outputScale) {
    switch (outputScale) {
        case 'C':
            return fahrenheitToCelsius(temperature);
        case 'F':
            return temperature;
        case 'K':
            return fahrenheitToKelvin(temperature);
        case 'R':
            return fahrenheitToRankine(temperature);
        case 'N':
            return fahrenheitToNewton(temperature);
        case 'D':
            return fahrenheitToDelisle(temperature);
        case 'RE':
            return fahrenheitToRéaumur(temperature);
        default:
            console.log("Invalid output scale. Please enter C, F, K, R, N, D, or Re.");
            return;
    }
}

function kelvinConversion(temperature, outputScale) {
    switch (outputScale) {
        case 'C':
            return kelvinToCelsius(temperature);
        case 'F':
            return kelvinToFahrenheit(temperature);
        case 'K':
            return temperature;
        case 'R':
            return kelvinToRankine(temperature);
        case 'N':
            return kelvinToNewton(temperature);
        case 'D':
            return kelvinToDelisle(temperature);
        case 'RE':
            return kelvinToRéaumur(temperature);
        default:
            console.log("Invalid output scale. Please enter C, F, K, R, N, D, or Re.");
            return;
    }
}

function rankineConversion(temperature, outputScale) {
    switch (outputScale) {
        case 'C':
            return rankineToCelsius(temperature);
        case 'F':
            return rankineToFahrenheit(temperature);
        case 'K':
            return rankineToKelvin(temperature);
        case 'R':
            return temperature;
        case 'N':
            return rankineToNewton(temperature);
        case 'D':
            return rankineToDelisle(temperature);
        case 'RE':
            return rankineToRéaumur(temperature);
        default:
            console.log("Invalid output scale. Please enter C, F, K, R, N, D, or Re.");
            return;
    }
}

function newtonConversion(temperature, outputScale) {
    switch (outputScale) {
        case 'C':
            return newtonToCelsius(temperature);
        case 'F':
            return newtonToFahrenheit(temperature);
        case 'K':
            return newtonToKelvin(temperature);
        case 'R':
            return newtonToRankine(temperature);
        case 'N':
            return temperature;
        case 'D':
            return newtonToDelisle(temperature);
        case 'RE':
            return newtonToRéaumur(temperature);
        default:
            console.log("Invalid output scale. Please enter C, F, K, R, N, D, or Re.");
            return;
    }
}

function delisleConversion(temperature, outputScale) {
    switch (outputScale) {
        case 'C':
            return delisleToCelsius(temperature);
        case 'F':
            return delisleToFahrenheit(temperature);
        case 'K':
            return delisleToKelvin(temperature);
        case 'R':
            return delisleToRankine(temperature);
        case 'N':
            return delisleToNewton(temperature);
        case 'D':
            return temperature;
        case 'RE':
            return delisleToRéaumur(temperature);
        default:
            console.log("Invalid output scale. Please enter C, F, K, R, N, D, or Re.");
            return;
    }
}

function réaumurConversion(temperature, outputScale) {
    switch (outputScale) {
        case 'C':
            return réaumurToCelsius(temperature);
        case 'F':
            return réaumurToFahrenheit(temperature);
        case 'K':
            return réaumurToKelvin(temperature);
        case 'R':
            return réaumurToRankine(temperature);
        case 'N':
            return réaumurToNewton(temperature);
        case 'D':
            return réaumurToDelisle(temperature);
        case 'RE':
            return temperature;
        default:
            console.log("Invalid output scale. Please enter C, F, K, R, N, D, or Re.");
            return;
    }
}

// Call the temperatureConverter function
temperatureConverter();
