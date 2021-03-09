
let lastOperator = "None";
let lastEqual = false;
let flagFirst = true;
let flagSecond = true;
let firstNumber = "";
let secondNumber = "";

function operate(operator){
    if(operator != "comma"){
        flagFirst = false;
    }else if(operator == "comma"){
        setCurrent(".");
        updateDisplay(firstNumber);
        return;
    }
    if(operator == "clear"){
        lastOperator = "None";
        lastEqual = false;
        flagFirst = true;
        flagSecond = true;
        firstNumber = "0";
        secondNumber = "";
        updateDisplay(0);
        updateOperationDisplay()
    }
    if(operator == "equal"){
        lastEqual = true;
    }
    if(operator == "add" || operator == "subtract" || operator == "divide" || operator == "multiply"){
        if(lastEqual == true){
            lastEqual == false;
            lastOperator = operator;
            return;
        }
        lastOperator = operator;
        updateOperationDisplay(secondNumber,operator);
    }
    switch(lastOperator){
        case "add":{
            firstNumber = secondNumber + firstNumber;        
            
            updateDisplay(firstNumber);
            if(operator == "equal"){
                lastEqual = true;
            }
            break;
        }
        case "subtract":{
            firstNumber = (secondNumber - firstNumber)*-1;
            
            updateDisplay(firstNumber);
            if(operator == "equal"){
                lastEqual = true;
            }
            break;
        }
        case "multiply":{
            
            if(secondNumber == ""){
                updateDisplay(firstNumber);
            }else{
                firstNumber = (secondNumber * firstNumber);
                updateDisplay(firstNumber);
            } 
            break;
        }
        case "divide":{
            
            if(secondNumber === ""){
                updateDisplay(firstNumber);
            }else if(secondNumber === 0){
                updateDisplay("no.");
            }else{
                firstNumber = firstNumber/ secondNumber;
                updateDisplay(firstNumber);
            }
            break;
        }
    }   
    firstNumber = parseFloat(firstNumber)
    if(flagFirst == false){
        flagSecond = true;
    }
}

//
// Sets the most recent input by user as firstNumber if 
//  it is the first input, or, as secondNumber if the flag is true.
//
function setCurrent(number){
    if(flagFirst == true){
        firstNumber = firstNumber.toString();
        firstNumber += number.toString();
        if(number != "."){
            firstNumber = parseFloat(firstNumber).toPrecision(15) * 1;
        }
        updateDisplay(firstNumber);
    }else{
        if(flagSecond == true){
            secondNumber = "";
            flagSecond = false;
        }
        secondNumber += number.toString();
        if(number != "."){
            secondNumber = parseFloat(secondNumber).toPrecision(15) * 1;
        }
        updateDisplay(secondNumber);            
    }    
}
//
// Function to update the display with a string containing the most recent input or most recent result.
//
function updateDisplay(number){
    if(number == "no."){
        display.textContent = 'Cannot divide by zero.';
        return;
    }
    number = parseFloat(number);
    number = number.toPrecision(15);
    number = number*1;
    display.textContent = number.toString();
}
function updateOperationDisplay(number, operation){
    operatorDisplay.textContent = "";
    if(operation == "add"){
        operatorDisplay.textContent += number.toString()+"+";

    }else if(operation == "multiply"){
        operatorDisplay.textContent += number.toString()+"x";

    }else if(operation == "subtract"){
        operatorDisplay.textContent += number.toString()+ "-";

    }else if(operation == 'divide'){
        operatorDisplay.textContent += number.toString()+"÷";
    }
}

//operation display element
const operatorDisplay = document.getElementById('operation-display');
//display element
const display = document.getElementById('result-display');

//Numerical buttons elements
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
    numericalButtons[i].addEventListener('click', setCurrent.bind(null, parseFloat(numericalButtons[i].textContent)));
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

//keyboard binds
window.addEventListener("keydown", (e) =>{
    const NUMBERS = [0,1,2,3,4,5,6,7,8,9]
    if(e.key in NUMBERS){
        setCurrent(e.key);
    }else if (e.key == "/"){
        operate("divide");
        
    }else if (e.key == "+"){
        operate('add');
        
    }else if (e.key == "-"){
        operate('subtract');
        
    }else if (e.key == "*"){
        operate('multiply');
        
    }else if (e.key == "=" || e.key == "Enter"){
        operate('equal');
        
    }else if (e.key == "." || e.key ==","){
        operate('comma');
    }else if (e.key == "c" || e.key == "C"){
        operate('clear');
    }
    });

//function binds
subtractionButton.addEventListener('click', operate.bind(null, "subtract"));
addButton.addEventListener('click', operate.bind(null, "add"));
multiplyButton.addEventListener('click', operate.bind(null, "multiply"));
divisionButton.addEventListener('click', operate.bind(null, "divide"));
powerButton.addEventListener('click', operate.bind(null, "power"));
percentageButton.addEventListener('click', operate.bind(null, "percent"));
minusplusButton.addEventListener('click', operate.bind(null, "invert"));
clearButton.addEventListener('click', operate.bind(null, "clear"));
equalsButton.addEventListener('click', operate.bind(null, "equal"));
decimalButton.addEventListener('click', operate.bind(null, "comma"));

