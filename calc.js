const operationDisp = document.getElementById('operation')
const equalsDisp = document.getElementById('equals')
const numBtns = document.getElementsByClassName('num')

for(let button of numBtns) {
    button.addEventListener('click', () => {
        operationDisp.innerHTML += button.dataset.value;
    })
}




function add(a, b) {
    if(!Number.isInteger(a) || !Number.isInteger(b)) {
        console.log("Not an integer")
        return
    }

    return a + b;
}

function sub(a, b) {
    if(!Number.isInteger(a) || !Number.isInteger(b)) {
        console.log("Not an integer")
        return
    }

    return a - b;

}

function mult(a, b) {
    if(!Number.isInteger(a) || !Number.isInteger(b)) {
        console.log("Not an integer")
        return
    }

    return a * b;
}

function div(a, b) {
    if(!Number.isInteger(a) || !Number.isInteger(b)) {
        console.log("Not an integer")
        return
    }

    return a / b;
}

function operate(operator, a, b) {
    var result;
    switch(operator) {
        case "add":
            result = add(a, b);
            break;
        case "sub":
            result = sub(a, b)
            break;
        case "mult":
            result = mult(a, b)
            break;
        case "div":
            result = div(a, b);
            break;
        default:
            console.log("Not an operation")
    }

    return result
}
