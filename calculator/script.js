let display = document.querySelector("#display"); //Access from the HTML

// Function to append a value to the display.
const appendToDisplay = (value) => {
    display.value += value;
}

// Function to clear the display.
const clearDisplay = () => {
    display.value = '';
}

// Function to delete the last character from the display.
const deleteLastCharacter = () => {
    display.value = display.value.slice(0, -1);
}

// Function to toggle the sign of the number displayed.
const toggleSign = () => {
    if (display.value.startsWith('-')) {
        display.value = display.value.slice(1);
    } else {
        display.value = '-' + display.value;
    }
}

let isOpen = false; 
// Function to toggle parentheses.
const toggleParentheses = () => {
    if (isOpen) {
        display.value += ')';
        isOpen = false;
    } else {
        display.value += '(';
        isOpen = true;
    }
}

// Function to calculate percentage.
const percentage = () => {
    if (display.value !== '') {
        let num = parseFloat(display.value);
        let percent = num / 100;
        display.value = percent;
    } else {
        display.value += '%';
    }
}

// Function to calculate the expression displayed.
const calculate = () => {
    try {
        let result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = 'error';
    }
}

// Function to make the placeholder text of the display element blink.
const blinkPlaceholder = () => {
    let placeholder = document.querySelector("#display").getAttribute('placeholder');
    let isBlink = true;

    setInterval(() => {
        if (isBlink) {
            document.querySelector('#display').setAttribute('placeholder', '');
        } else {
            document.querySelector('#display').setAttribute('placeholder', placeholder);
        }
        isBlink = !isBlink;
    }, 500);
};
blinkPlaceholder();