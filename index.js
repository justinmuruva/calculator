let num1 = 8;
let num2 = 2;

document.getElementById("num1_el").textContent = num1;
document.getElementById("num2_el").textContent = num2;

function add(){
    let results = num1 + num2;
    document.getElementById("span_el").textContent = "sum: " + results;
}

function subtract(){
    let results = num1 - num2;
    document.getELementById("span_el").textContent = "sum: " + results;
}
function divide(){
    let results = num1 / num2;
    document.getELementById("span_el").textContent = "sum: " + results;
}

function multiply(){
    let results = num1 * num2;
    document.getElementById("span_el").textContent = "sum: " + results;
}