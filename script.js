const displayText = document.querySelector(".display-text")
const inputButtons = document.querySelectorAll(".input");

const addZero = () => {
    displayText.textContent += (/^0$/.test(displayText.textContent) ? '' : '0');
}

const addPoint = () => {
    displayText.textContent += (/\./.test(displayText.textContent) ? '' : '.')
}

const addInput = (event) => {
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

const populateButtonFunctions = () => {
    inputButtons.forEach(button => {
        button.addEventListener("click", addInput); 
    });
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
        addition(num1, num2);
    }

    else if (operation === '-') {
        subtraction(num1, num2);
    }

    else if (operation === '*') {
        multiplication(num1, num2);
    }

    else if (operation == '/') {
        division = (num1, num2);
    }
}

window.addEventListener('load', function() {
    populateButtonFunctions();
}, false);