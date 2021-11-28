let currentValue = 0
let lastValue = 0
let lastOperator = null
let setting = null

//LastValue = LastValue (LastOperator) CurrentValue 
//lv = null + 1  (1+2 = 3 . 2 + 5)
//lv = 1 + 2
//lv = 2 + 5


function operate(operator, type){
    if(type == "number"){
        if(operator == '.' && getCurrent().toString().includes('.') == true){
            return;
        }
        setCurrent(operator);
        updateHistory(operator);
    }else{
        if(operator != lastOperator && operator != "C"){
            setting = lastOperator;
        }else{
            setting = operator;
        }    
        switch (setting) {
            case "+":
                if(lastValue == 0){
                    lastValue = getCurrent();
                }else{
                    lastValue += getCurrent();
                }
                break;
            case "-":
                if(lastValue == 0){
                    lastValue = getCurrent();
                }else{
                    lastValue -= getCurrent();
                }
                break;
            case "×":
                if(lastValue == 0){
                    lastValue = getCurrent();
                }else{
                    lastValue *= getCurrent();
                }
                break;
            case "÷":
                if(lastValue == 0){
                    lastValue = getCurrent();
                }else{
                    lastValue /= getCurrent();
                }
                break;
            case "=":
                if(lastOperator == "="){
                    break;
                }
                if(lastValue == null){
                    lastValue = 0;
                }else{
                    operate(lastOperator);
                }
                break;
            case "C":
                currentValue = 0;
                lastValue = 0;
                lastOperator = null;
                setting = null;
                break;
            case ".":
                setCurrent
            case null:
                
                lastOperator = operator;
                if(operator != "=" &&  operator != "C" && operator != "." && operator != null){
                    operate(lastOperator)
                }                
                currentValue = "";
                resetHistory();
                updateHistory(lastValue);
                break;
            default:
                break;
        }
        if(operator != "=" && operator != "C" && operator != "."){
            lastOperator = operator;
        }
        resetHistory();
        updateHistory(lastValue);
        updateDisplay(lastValue)
        
        
        if(operator != "=" &&  operator != "C" && operator != "."){
            updateHistory(lastOperator);
        }
        if(operator == 'C'){
            resetHistory();
        }
    }
}
// Updates primary display to show current operation in pairs
function updateHistory(element){
    if(displayHistory.textContent == "0"){
        displayHistory.textContent == ""
    }
    displayHistory.textContent += element.toString();
}
// Receives user input and sets currentValue as a string of the user numbers.
function setCurrent(number){ 
    if(currentValue == null){
        currentValue = "";
    }
    currentValue += number.toString();
    updateDisplay(currentValue);
}
function getCurrent(){
    let value = currentValue;
    currentValue = 0;
    return parseFloat(value);
}
function resetHistory(number){
    displayHistory.textContent = "";
}

//
// Update secondary display to show user input
//
function updateDisplay(number){
    if(number == "Infinity"){
        display.textContent = 'Cannot divide by zero.';
        return;
    }
    number = parseFloat(number);
    number = number.toPrecision(15);
    number = number*1;
    display.textContent = number.toString();
}

const numericalButtons = document.getElementsByClassName("numbers");
for(i = 0; i<numericalButtons.length;i++){
    numericalButtons[i].addEventListener('click', operate.bind(null, numericalButtons[i].textContent, "number"));
}
const operationButtons = document.getElementsByClassName("operators");
for(i = 0; i<operationButtons.length;i++){
    operationButtons[i].addEventListener('click', operate.bind(null, operationButtons[i].textContent), null);
}


//keyboard binds
window.addEventListener("keydown", (e) =>{
    const NUMBERS = [0,1,2,3,4,5,6,7,8,9]
    if(e.key in NUMBERS){
        setCurrent(e.key);
    }else if (e.key == "/"){
        operate("÷", null);
        
    }else if (e.key == "+"){
        operate('+', null);
        
    }else if (e.key == "-"){
        operate('-', null);
        
    }else if (e.key == "*"){
        operate('×', null);
        
    }else if (e.key == "=" || e.key == "Enter"){
        operate('=', null);
        
    }else if (e.key == "." || e.key ==","){
        operate('.', "number");
    }else if (e.key == "c" || e.key == "C"){
        operate('C', null);
    }
    });
