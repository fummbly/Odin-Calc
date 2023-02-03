let firstOperand = ''
let secondOperand = ''
let currentOperation = null;
let shouldResetScreen = false;


const numberBtns = document.querySelectorAll('[data-value]')
const operatorBtns = document.querySelectorAll('[data-operator]')

const equalsBtn = document.getElementById('equal')
const clearBtn = document.getElementById('clear')
const deleteBtn = document.getElementById('delete')
const lastOp  = document.getElementById('lastOp')
const currOp = document.getElementById('currOp')

window.addEventListener('keydown' , handleKeyboardInput)
equalsBtn.addEventListener('click', evaluate)
clearBtn.addEventListener('click', clear)
deleteBtn.addEventListener('click', deleteNumber)

numberBtns.forEach((button) => 
    button.addEventListener('click', () => appendNumber(button.textContent))
)

operatorBtns.forEach((button) => 
    button.addEventListener('click', () => setOperation(button.textContent))
)

function appendNumber(number) {
    if(currOp.textContent === "0" || shouldResetScreen) 
        resetScreen()
    currOp.textContent += number
}

function resetScreen() {
    currOp.textContent = ""
    shouldResetScreen = false;
}

function clear() {
    currOp.textContent = "0"
    lastOp.textContent = ""
    firstOperand = ""
    secondOperand = ""
    currentOperation = null;
}

function appendPoint() {
    if (shouldResetScreen) resetScreen()
    if (currOp.textContent === "")
        currOp.textContent = "0"
    if (currOp.textContent.includes('.')) return
    currOp.textContent += '.'
}


function deleteNumber() {
    currOp.textContent = currOp.textContent
        .toString()
        .slice(0, -1);
}


function setOperation(operator) {
    if (currentOperation !== null) evaluate()
    firstOperand = currOp.textContent
    currentOperation = operator
    lastOp.textContent = `${firstOperand} ${currentOperation}`
    shouldResetScreen = true
}

function evaluate() {
    if (currentOperation === null || shouldResetScreen) return
    if (currentOperation === "÷" && currOp.textContent === "0") {
        alert("You can't divide by 0!")
        return
    }
    secondOperand = currOp.textContent
    currOp.textContent = roundResult(
        operate(currentOperation, firstOperand, secondOperand)
    )
    lastOp.textContent = `${firstOperand} ${currentOperation} ${secondOperand} =`
    currentOperation = null;
}

function roundResult(number) {
    return Math.round(number * 1000) / 1000
}

function handleKeyboardInput(e) {
    if (e.key >= 0 && e.key <= 9) appendNumber(e.key)
    if (e.key === ".") appendPoint()
    if (e.key === "=" || e.key === 'Enter') evaluate()
    if (e.key === 'Backspace') deleteNumber()
    if (e.key === "Escape") clear()
    if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/")
        setOperation(convertOperator(e.key)) 
}

function convertOperator(keyOperator) {
    if (keyOperator === "/") return "÷"
    if (keyOperator === "*") return "*"
    if (keyOperator === "+") return "+"
    if (keyOperator === "-") return "-"
}

function add(a, b) {
    return a + b;
}

function sub(a, b) {

    return a - b;

}

function mult(a, b) {

    return a * b;
}

function div(a, b) {

    return a / b;
}

function operate(operator, a, b) {
    a = Number(a)
    b = Number(b)
    var result;
    switch(operator) {
        case "+":
            result = add(a, b);
            break;
        case "-":
            result = sub(a, b)
            break;
        case "*":
            result = mult(a, b)
            break;
        case "÷":
            result = div(a, b);
            break;
        default:
            console.log("Not an operation")
    }

    return result
}
