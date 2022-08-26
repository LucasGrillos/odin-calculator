const displayText = document.querySelector(".display-text");
const displayOperation = document.querySelector(".display-operation");
const inputButtons = document.querySelectorAll(".input");
const operationButtons = document.querySelectorAll(".operation");
const clearButton = document.querySelector(".clear");
const equalsButton = document.querySelector(".equals")
let operationAfterEquals = false; //if operation is pressed after the equalsOperation function is run, performs operation on evaluated number
let inputAfterEquals = false; //if input is pressed after the equalsOperation function is run, performs the clear operation
let lastValue = "";
let operation = "";

const addZero = () => {
    displayText.textContent += (/^0$/.test(displayText.textContent) ? '' : '0');
}

const addPoint = () => {
    displayText.textContent += (/\./.test(displayText.textContent) ? '' : '.')
}

const addInput = (event) => {

    
    if (inputAfterEquals == true) {
        inputAfterEquals = false;
        operationAfterEquals = false;
        clearAll();
        //if input is pressed after the equalsOperation function is run, performs the clear operation
    }
    
    
    if (lastValue && displayOperation.textContent) {
        //checks if addOperation has been run, saves the operator in operation, and clears the displayOperation and displayText
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

    if (lastValue && displayText.textContent && operationAfterEquals == true) {
        inputAfterEquals = false;
        // if operation is clicked after equals is run, switch inputAfterEquals to false so that operation can be performed on evaluated number
    }

    else if (lastValue && displayText.textContent && inputAfterEquals == false) {
        equalsOperation(event)

        // if operation is called after already having an operator in play, run the equals function, below in the code a new operator is assigned
    }

    lastValue = displayText.textContent;
    displayOperation.textContent = event.target.id;
}

const clearAll = () => {
    displayOperation.textContent = '';
    displayText.textContent = '';
    lastValue = '';
    operation = '';
}

const equalsOperation = (event) => {
    
    if (event.target.id == "=") {
        inputAfterEquals = true;
        operationAfterEquals = true;
    }
    

    if (lastValue && operation && displayText.textContent) {
        displayText.textContent = operate(parseFloat(lastValue), parseFloat(displayText.textContent), operation);
        //console.log(displayText.textContent);
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