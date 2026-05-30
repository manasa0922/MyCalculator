function appendValue(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    let display = document.getElementById("display");

    display.value = display.value.slice(0, -1);
}

function calculate() {

    let expression = document.getElementById("display").value;

    try {

        let result = eval(expression);

        document.getElementById("display").value =
            expression + " = " + result;

    }
    catch {

        document.getElementById("display").value = "Error";

    }
}

document.addEventListener("keydown", function(event) {

    let key = event.key;

    // Numbers
    if (!isNaN(key)) {
        appendValue(key);
    }

    // Operators
    else if (key === "+" || key === "-" || key === "*" || key === "/" || key === ".") {
        appendValue(key);
    }

    // Enter key
    else if (key === "Enter") {
        calculate();
    }

    // Backspace key
    else if (key === "Backspace") {
        deleteLast();
    }

    // Escape key
    else if (key === "Escape") {
        clearDisplay();
    }

});