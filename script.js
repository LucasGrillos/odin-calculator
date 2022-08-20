window.addEventListener('load', function() {
    
}, false);

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