/* User stories are crucial in breaking down the features of an application and structuring the development process. They are typically written as “As a user, I want to…”, which helps in focusing on user needs and experiences.         Preliminary Questions

When planning our code, we might consider the following:

1. How do we capture the “value” when a number button is clicked?
2. What steps are needed to achieve this?
3. Can we use existing attributes to tie events to our number button elements?


Here are the user stories for this lab:

As a user, I want to be able to select numbers so that I can perform operations with them.
As a user, I want to be able to add two numbers together.
As a user, I want to be able to subtract one number from another.
As a user, I want to be able to multiply two numbers together.
As a user, I want to be able to divide one number by another.
As a user, I want to be able to see the output of the mathematical operation.
As a user, I want to be able to clear all operations and start from 0. */


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
