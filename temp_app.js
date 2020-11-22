 //variable declarations
 const celsiusInput = document.querySelector("#celsius > input");
 const fahrenheitInput = document.querySelector("#fahrenheit > input");
 const kelvinInput = document.querySelector("#kelvin > input");
 const centimeterInput = document.querySelector("#centimeter >input");
 const meterInput = document.querySelector("#meter >input");
 const feetInput = document.querySelector("#feet >input");
 const kilogramInput = document.querySelector("#kilogram >input");
 const poundsInput = document.querySelector("#pounds >input");
 
 

 function roundNum(num){
    return Math.round(num*100)/100;
}
//Temperature conversion
 function celsiusToFahrenheitAndKelvin(){
    const cel = Math.round(celsiusInput.value);
    const far = (cel * (9/5) + 32);
    const kel = cel + 273;
    fahrenheitInput.value = roundNum(far);
    kelvinInput.value = roundNum(kel); 
};
 function farenheitToCelsiusAndKelvin(){
    const far = Math.round(fahrenheitInput.value);
    const cel = (far - 32) * (5/9);
    const kel = (far + 459) * 5/9;
    celsiusInput.value = roundNum(cel);
    kelvinInput.value = roundNum(kel);
 };

 function kelvinToCelsiusAndFahrenheit(){
    const kel = Math.round(kelvinInput.value);
    const cel = (kel - 273);
    const far = 9/5 * (kel - 273) + 32;
    celsiusInput.value = roundNum(cel);
    fahrenheitInput.value = roundNum(far); 
 };

 //lenth conversion
 function centimeterToMeterAndFeet(){
     const cm = Math.round(centimeterInput.value);
     const met = (cm /100);
     const feet = (cm/ 30.48);
     meterInput.value = roundNum(met);
     feetInput.value = roundNum(feet);
 };

 function meterToCentimeterAndFeet(){
    const met = Math.round(meterInput.value);
    const cm = (met *100);
    const feet = (met /0.3048);
    centimeterInput.value = roundNum(cm);
    feetInput.value = roundNum(feet);
};

function feetToCentimeterAndMeter(){
    const feet = Math.round(feetInput.value);
    const cm = (feet * 30.48);
    const met = (feet * 0.3048);
    meterInput.value = roundNum(met);
    centimeterInput.value = roundNum(cm);
};

// //Weight conversion
// function kilogramToPounds(){
//     const kilogram = Math.round(kilogramInput.value);
//     const pounds = (kilogram* 2.2046226218);
//     kilogramInput.value = roundNum(kilogram);
// };

// function poundsToKilogram(){
//     const pounds = Math.round(poundsInput.value);
//     const kilogram = (pounds / 2.2046226218);
//     poundsInput.value = roundNum(pounds);
// };


function final(){
    celsiusInput.addEventListener("input", celsiusToFahrenheitAndKelvin);
    fahrenheitInput.addEventListener("input",farenheitToCelsiusAndKelvin);
    kelvinInput.addEventListener("input", kelvinToCelsiusAndFahrenheit);
    meterInput.addEventListener("input", meterToCentimeterAndFeet);
    centimeterInput.addEventListener("input", centimeterToMeterAndFeet)
    feetInput.addEventListener("input", feetToCentimeterAndMeter);
    kilogramInput.addEventListener("input", kilogramToPounds);
    poundsInput.addEventListener("input", poundsToKilogram);
}

final();