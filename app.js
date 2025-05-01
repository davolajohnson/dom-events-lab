/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let equalsWasClicked = false;
let operatorWasClicked = false;

/*------------------------ Cached Element References ------------------------*/
const display = document.querySelector('div.display');
const buttons = document.querySelectorAll('.button');

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const buttonValue = button.innerText;
        if (buttonValue === 'C') {
            operatorWasClicked = false;
            clearDisplay();
        }
        else if (buttonValue === '=') {
            operatorWasClicked = false;
            calculateTotal();
        }
        else if (buttonValue === '/') {
            concatVal(buttonValue);
            operatorWasClicked = true;
        }
        else if (buttonValue === '*') {
            concatVal(buttonValue);
            operatorWasClicked = true;
        } 
        else if (buttonValue === '-') {
            concatVal(buttonValue);
            operatorWasClicked = true;
        } 
        else if (buttonValue === '+') {
            concatVal(buttonValue);
            operatorWasClicked = true;
        }
        else { // it's a number
            operatorWasClicked = false;
            concatVal(buttonValue); 
        };
    });
});

/*-------------------------------- Functions --------------------------------*/
const concatVal = (btnValue) => {
    if (equalsWasClicked === true) {
        display.textContent = '';
        equalsWasClicked = false;
    };
    if (operatorWasClicked === false) {
        display.textContent += btnValue;
    };
};

const clearDisplay = () => {
    display.textContent = '';
}

const calculateTotal = () => {
    display.textContent = eval(display.textContent);
    equalsWasClicked = true;
};
