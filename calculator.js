const display = document.querySelector("#display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const clearButton = document.querySelector("#clear");
const equal = document.querySelector("#equal");

//Declaration of display
let firstNumber = "";
let secondNumber = "";
let operator = "";

//When you click the button, its function
numbers.forEach(function(button){
    button.addEventListener("click", function(){
        if(operator === ""){
            firstNumber = firstNumber + button.textContent;
                display.textContent = firstNumber;
        } else {
            secondNumber = secondNumber + button.textContent;
            display.textContent = secondNumber;
        }
    })
})

operators.forEach(function(button){
button.addEventListener("click", function(){
    operator = button.textContent
    display.textContent = operator;
})
})

equal.addEventListener("click", function(){

    let num1 = Number(firstNumber);
    let num2 = Number(secondNumber);

    let answer;

    if (operator === "+"){
        answer = num1 + num2;
    }
    else if (operator === "-"){
        answer = num1 - num2;
    }
    else if (operator === "*"){
        answer = num1 * num2;
    }
    else if (operator === "/"){
        answer = num1 / num2;
    }

    display.textContent = answer
})

clearButton.addEventListener("click", function(){
    firstNumber = ""
    secondNumber = ""
    operator = ""

    display.textContent = "0"
})