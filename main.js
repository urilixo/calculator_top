let previous = 0;
let current = 0;
let result = 0;
function operate(operator){
    switch(operator){
        case "add":
            result = previous + current;
            previous = result;
            return result
        case "subtract":
            
            result = previous - current;
            previous = result;
            console.log(result);
            return result
        case "multiply":
            result = previous * current;
            previous = result;
            return result
        case "divide":
            result = previous / current;
            previous = result;
            return result
        case "equal":
            return result;  
    }
}
function updateValue(number){
    previous = current;
    current = number;
}
//Numerical buttons
const Button1 = document.getElementById("1");
const Button2 = document.getElementById("2");
const Button3 = document.getElementById("3");
const Button4 = document.getElementById("4");
const Button5 = document.getElementById("5");
const Button6 = document.getElementById("6");
const Button7 = document.getElementById("7");
const Button8 = document.getElementById("8");
const Button9 = document.getElementById("9");
const Button0 = document.getElementById("0");

const numericalButtons = document.getElementsByClassName("numerical");
for(i = 0; i<numericalButtons.length;i++){
    numericalButtons[i].addEventListener('click', updateValue.bind(null, parseInt(numericalButtons[i].textContent)));
}
//function buttons
const subtractionButton = document.getElementById("subtract");
const addButton = document.getElementById("add");
const multiplyButton = document.getElementById("multiply");
const divisionButton = document.getElementById("divide");
const powerButton = document.getElementById("power");
const percentageButton = document.getElementById("percent");
const minusplusButton = document.getElementById("invert");
const clearButton = document.getElementById("clear");
const equalsButton = document.getElementById("equal");
const decimalButton = document.getElementById("comma");
//function binds
subtractionButton.addEventListener('click', operate.bind(null, "subtract"));
addButton.addEventListener('click', operate.bind(null, "add"));
multiplyButton.addEventListener('click', operate.bind(null, "multiply"));
divisionButton.addEventListener('click', operate.bind(null, "divide"));
powerButton.addEventListener('click', operate.bind(null, "power"));
percentageButton.addEventListener('click', operate.bind(null, "percent"));
minusplusButton.addEventListener('click', operate.bind(null, "invert"));
clearButton.addEventListener('click', operate.bind(null, "clear"));
equalsButton.addEventListener('click', operate.bind(null, "equals"));
decimalButton.addEventListener('click', operate.bind(null, "comma"));

subtractionButton.addEventListener('click', operate.bind(null, "subtract"));