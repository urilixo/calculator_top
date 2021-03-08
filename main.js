
let lastOperator = "None";
let flagFirst = true;
let flagSecond = true;
let firstNumber = "";
let secondNumber = "";

function operate(operator){
    if(operator == "add" || operator == "subtract" || operator == "divide" || operator == "multiply"){
        updateOperationDisplay(secondNumber,operator);
    }
    
    if(operator != "equal" && operator !="power"){
        if(operator == "power" && lastOperator == "None"){
            lastOperator = "power";
        }
        operate("equal");
    }
    switch(operator){
        case "add":{
            flagFirst = false;
            lastOperator = "add";
            break;
        }
        case "subtract":{
            flagFirst = false;
            lastOperator = "subtract";
            break;
        }
        case "multiply":{
            flagFirst = false;
            lastOperator = 'multiply';
            break;
        }
        case "divide":{
            flagFirst = false;
            lastOperator = "divide";
            break;
        }
        case "comma":{
            setCurrent(".");
            updateDisplay(firstNumber);
            break;
        }
        case "power":{
            lastOperator = "power"
            firstNumber = firstNumber * firstNumber;            
            updateDisplay(firstNumber);
            break;
        }
        case 'clear':{           
            lastOperator = "None";
            flagFirst = true;
            flagSecond = true;
            firstNumber = "";
            secondNumber = "";
            updateDisplay(0);
            updateOperationDisplay()
        }
        

        case "equal":{
            switch(lastOperator){
                case "add":{
                    firstNumber = secondNumber + firstNumber;
                    flagSecond = true;
                    updateDisplay(firstNumber);
                    return;
                }
                case "subtract":{
                    firstNumber = (secondNumber - firstNumber)*-1;
                    flagSecond = true;
                    updateDisplay(firstNumber);
                    return;
                }
                case "multiply":{
                    flagSecond = true;
                    if(secondNumber == ""){
                        updateDisplay(firstNumber);
                    }else{
                        firstNumber = (secondNumber * firstNumber);
                        updateDisplay(firstNumber);
                    } 
                    return;
                }
                case "divide":{
                    flagSecond = true;
                    if(secondNumber == ""){
                        updateDisplay(firstNumber);
                    }else if(secondNumber == 0){
                        updateDisplay("no.");
                    }else{
                        firstNumber = firstNumber/ secondNumber;
                        updateDisplay(firstNumber);
                    }
                    return;
                }
            }
        }   
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
    number = parseFloat(number);
    number = number.toPrecision(15);
    number = number*1;
    display.textContent = number.toString();
}
function updateOperationDisplay(number, operation){
    console.log(firstNumber)
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

