var number1 = document.getElementById("num1");
var number2 = document.getElementById("num2");
var addbtn = document.getElementById("Addition");
var subbtn = document.getElementById("Subtraction");
var multbtn = document.getElementById("Multiplication");
var divbtn = document.getElementById("Division");
var printresult = document.getElementById("ans");
function add() {
    var a = parseFloat(number1.value);
    var b = parseFloat(number2.value);
    var result = a + b;
    printresult.textContent = result.toString();
}
addbtn.addEventListener("click", add);
function subtract() {
    var a = parseFloat(number1.value);
    var b = parseFloat(number2.value);
    var result = a - b;
    printresult.textContent = result.toString();
}
subbtn.addEventListener("click", subtract);
function multiply() {
    var a = parseFloat(number1.value);
    var b = parseFloat(number2.value);
    var result = a * b;
    printresult.textContent = result.toString();
}
multbtn.addEventListener("click", multiply);
function div() {
    var a = parseFloat(number1.value);
    var b = parseFloat(number2.value);
    var result = a / b;
    printresult.textContent = result.toString();
}
divbtn.addEventListener("click", div);
