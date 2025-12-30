"use strict";

function sum() {
    const inputs = getInputs();
    document.getElementById("result").innerText = String(inputs[0] + inputs[1]);
}

function subtract() {
    const inputs = getInputs();
    document.getElementById("result").innerText = String(inputs[0] - inputs[1]);
}

function multiply() {
    const inputs = getInputs();
    document.getElementById("result").innerText = String(inputs[0] * inputs[1]);
}

function divide() {
    const inputs = getInputs();
    document.getElementById("result").innerText = String(inputs[0] / inputs[1]);
}

function getInputs() {
    try {
        const num1 = document.getElementById("num1").value;
        const num2 = document.getElementById("num2").value;
        document.getElementById("num1").value = "";
        document.getElementById("num2").value = "";

        if (num1 === "" || num2 === "") {
            alert("Please enter a valid number for both numbers");
        } else {
            return [parseInt(num1), parseInt(num2)];
        }


    } catch (error) {
        console.error("Error getting inputs:", error);
    }
}