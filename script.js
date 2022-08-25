const displayText = document.querySelector(".display-text");
const displayOperation = document.querySelector(".display-operation");
const inputButtons = document.querySelectorAll(".input");
const operationButtons = document.querySelectorAll(".operation");
const clearButton = document.querySelector(".clear");
const equalsButton = document.querySelector(".equals")
let lastValue = "";
let operation = "";

const addZero = () => {
    displayText.textContent += (/^0$/.test(displayText.textContent) ? '' : '0');
}

const addPoint = () => {
    displayText.textContent += (/\./.test(displayText.textContent) ? '' : '.')
}

const addInput = (event) => {

    if (lastValue && displayOperation.textContent) {
        operation = displayOperation.textContent;
        displayText.textContent = '';
        displayOperation.textContent = '';
    }

    if (event.target.id == '0') {
        addZero();
    }

    else if (event.target.id == '.') {
        addPoint();
    }

    else {
        displayText.textContent = displayText.textContent === "0" ? event.target.id : displayText.textContent + event.target.id 
    }
}

const addOperation = (event) => {
    displayOperation.textContent = event.target.id;
    lastValue = displayText.textContent;
}

const clearAll = () => {
    displayOperation.textContent = '';
    displayText.textContent = '';
    lastValue = '';
}

const equalsOperation = () => {
    if (lastValue && operation && displayText.textContent) {
        console.log("Hello!");
        displayText.textContent = operate(parseInt(lastValue), parseInt(displayText.textContent), operation);
        console.log(displayText.textContent);
    }
}

const populateButtonFunctions = () => {
    inputButtons.forEach(button => {
        button.addEventListener("click", addInput); 
    });
    operationButtons.forEach(button => {
        button.addEventListener("click", addOperation);
    });
    clearButton.addEventListener("click", clearAll);
    equalsButton.addEventListener("click", equalsOperation);
}

const addition = (num1, num2) => {
    return num1+num2;
}

const subtraction = (num1, num2) => {
    return num1-num2;
}

const multiplication = (num1, num2) => {
    return num1*num2;
}

const division = (num1, num2) => {
    return num1/num2;
}

const operate = (num1, num2, operation) => {
    if (operation === '+') {
        return addition(num1, num2);
    }

    else if (operation === '-') {
        return subtraction(num1, num2);
    }

    else if (operation === '×') {
        return multiplication(num1, num2);
    }

    else if (operation == '÷') {
        return division(num1, num2);
    }
}

window.addEventListener('load', function() {
    populateButtonFunctions();
}, false);