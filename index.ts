const number1 = document.getElementById("num1") as HTMLInputElement;
const number2 = document.getElementById("num2") as HTMLInputElement;

const addbtn = document.getElementById("Addition") as HTMLButtonElement;
const subbtn = document.getElementById("Subtraction") as HTMLButtonElement;
const multbtn = document.getElementById("Multiplication") as HTMLButtonElement;
const divbtn = document.getElementById("Division") as HTMLButtonElement;

const printresult = document.getElementById("ans") as HTMLOutputElement;

function add(){
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    let result = a+b;
    printresult.textContent = result.toString();
}
addbtn.addEventListener("click", add);

function subtract(){
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    let result = a-b;
    printresult.textContent = result.toString();
}
subbtn.addEventListener("click", subtract);

function multiply(){
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    let result = a*b;
    printresult.textContent = result.toString();
}
multbtn.addEventListener("click", multiply);

function div(){
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    let result = a/b;
    printresult.textContent = result.toString();
}
divbtn.addEventListener("click", div);