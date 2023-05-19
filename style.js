let display = document.getElementById('display');

function press(x) {
    if(x == '+' || x == '-' || x == '*' || x == '/') {
        if(display.value == '') {
            return;
        }
        else if(display.value.includes('+') || display.value.includes('-') || display.value.includes('*') || display.value.includes('/')) {
            display.value = eval(display.value) + x;
        }
        else {
            display.value += x;
        }
    }
    else {
        display.value += x;
    }
    
}

function displayClear() {
    display.value = '';
}

function calc() {
    if(display.value == '') {
        return;
    }
    else {
        display.value = eval(display.value);
    }
}

function percent() {
    display.value = display.value / 100;
}

function degre() {
    if(display.value.includes('+', 1) || display.value.includes('-', 1) || display.value.includes('*', 1) || display.value.includes('/', 1)) {
        return;
    }
    else if(display.value > 0) {
        display.value = '-' + display.value;
    }
    else {
        display.value = display.value * (-1);
    }

}