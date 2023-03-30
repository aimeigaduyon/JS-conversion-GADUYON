let input = document.getElementById("inputValue");
let output = document.getElementById("outputValue");
let inputType = document.getElementById("inputType");
let outputType = document.getElementById("outputType");

let inputTypeValue, outputTypeValue;

input.addEventListener ("keyup", conversionOutput);
inputType.addEventListener("change", conversionOutput);
outputType.addEventListener("change", conversionOutput);

function conversionOutput() {

    inputTypeValue = inputType.value;
    outputTypeValue = outputType.value;


    // FROM AMPERES


    // This is for Amperes to MilliAmperes
    if (inputTypeValue === "amperes" && outputTypeValue === "milliAmperes") {
        output.value = parseFloat(input.value) * 1000;
    }

    // This is for Amperes to KiloAmperes
    else if (inputTypeValue === "amperes" && outputTypeValue === "kiloAmperes") {
        output.value = parseFloat(input.value) * 0.001;
    }

    // This is for Amperes to MegaAmperes
    else if (inputTypeValue === "amperes" && outputTypeValue === "megaAmperes") {
        output.value = parseFloat(input.value) * 0.000001;
    }
  

    // FROM MILLIAMPERES

    
    // This is for MilliAmperes to Amperes
     if (inputTypeValue === "milliAmperes" && outputTypeValue === "amperes") {
        output.value = parseFloat(input.value) * 0.001;
    }

    // This is for MilliAmperes to KiloAmperes
    else if (inputTypeValue === "milliAmperes" && outputTypeValue === "kiloAmperes") {
        output.value = parseFloat(input.value) * 0.000001;
    }

    // This is for MilliAmperes to MegaAmperes 
    else if (inputTypeValue === "milliAmperes" && outputTypeValue === "megaAmperes") {
        output.value = parseFloat(input.value) * 0.000000001;
    }


     // FROM KILOAMPERES

    
    // This is for KiloAmperes to Amperes
     if (inputTypeValue === "kiloAmperes" && outputTypeValue === "amperes") {
        output.value = parseFloat(input.value) * 1000;
    }

    // This is for KiloAmperes to MilliAmperes
    else if (inputTypeValue === "kiloAmperes" && outputTypeValue === "milliAmperes") {
        output.value = parseFloat(input.value) * 1000000;
    }

    // This is for KiloAmperes to MegaAmperes 
    else if (inputTypeValue === "kiloAmperes" && outputTypeValue === "megaAmperes") {
        output.value = parseFloat(input.value) * 0.001;
    }


    // FROM MEGAAMPERES

    
    // This is for MegaAmperes to Amperes
     if (inputTypeValue === "megaAmperes" && outputTypeValue === "amperes") {
        output.value = parseFloat(input.value) * 1000000;
    }

    // This is for MegaAmperes to MilliAmperes
    else if (inputTypeValue === "megaAmperes" && outputTypeValue === "milliAmperes") {
        output.value = parseFloat(input.value) * 1000000000;
    }

    // This is for MegaAmperes to KiloAmperes 
    else if (inputTypeValue === "megaAmperes" && outputTypeValue === "kiloAmperes") {
        output.value = parseFloat(input.value) * 0.000001;
    }
}



