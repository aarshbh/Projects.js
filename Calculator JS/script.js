// Initialize a variable to track if the decimal has been added
let decimalAdded = false;

// Function to add characters to the display
function addToDisplay(value) {
    const display = document.getElementsByName('display')[0];
    
    // Check if the value is a decimal
    if (value === '.') {
        // If decimal has already been added, return
        if (decimalAdded) return;
        // Set decimalAdded to true
        decimalAdded = true;
    }

    // Add the value to the display
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    const display = document.getElementsByName('display')[0];
    // Clear the display
    display.value = '';
    // Reset decimalAdded to false
    decimalAdded = false;
}

// Function to delete the last character from the display
function deleteLastCharacter() {
    const display = document.getElementsByName('display')[0];
    // Remove the last character from the display
    display.value = display.value.slice(0, -1);
    // Reset decimalAdded if the last character removed was a decimal
    if (display.value.slice(-1) !== '.') {
        decimalAdded = false;
    }
}

// Function to calculate the expression in the display
function calculate() {
    const display = document.getElementsByName('display')[0];
    // Calculate the expression
    display.value = eval(display.value);
    // Reset decimalAdded to false
    decimalAdded = false;
}
