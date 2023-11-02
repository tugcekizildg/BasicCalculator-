const num1 = parseFloat(prompt('Enter first number: '));
const num2 = parseFloat(prompt('Enter second number: '));

document.getElementById("number1").textContent = num1
document.getElementById("number2").textContent = num2

let sumText = document.getElementById("resultOfNumbers")
function add(){
    sumText.textContent = (num1 + num2)
 
}

function subtract(){
    sumText.textContent = (num1 - num2)
}

function divide(){
    sumText.textContent = (num1 / num2)
}

function multiply(){
    sumText.textContent = (num1 * num2)
}
