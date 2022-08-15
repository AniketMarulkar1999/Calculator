var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");

var operand1 = 0;
var operand2 = 0;
var operator = null;

for(var i = 0; i < buttons.length; i++)
{
    buttons[i].addEventListener('click', function(){
        var value = this.getAttribute('data-value');
        switch(value)
        {
            case "0":
                display.innerText += value;
                break;
            case "1":
                display.innerText += value;
                break;
            case "2":
                display.innerText += value;
                break;
            case "3":
                display.innerText += value;
                break;
            case "4":
                display.innerText += value;
                break;
            case "5":
                display.innerText += value;
                break;
            case "6":
                display.innerText += value;
                break;
            case "7":
                display.innerText += value;
                break;
            case "8":
                display.innerText += value;
                break;
            case "9":
                display.innerText += value;
                break;
            case "+":
                operand1 = parseFloat(display.innerText);
                operator = "+";
                display.innerText += value;
                break;
            case "-":
                operand1 = parseFloat(display.innerText);
                operator = "-";
                display.innerText += value;
                break;
            case "*":
                operand1 = parseFloat(display.innerText);
                operator = "*";
                display.innerText += value;
                break;
            case "/":
                operand1 = parseFloat(display.innerText);
                operator = "/";
                display.innerText += value;
                break;
            case "=":
                let str = display.innerText;
                str = str.substring(str.indexOf(operator) + 1);
                operand2 = parseFloat(str);
                var ans = eval(operand1 + " " + operator + " " + operand2);
                display.innerText = ans;
                operand1 = 0;
                operand2 = 0;
                operator = null;
                break;
            case "AC":
                display.innerHTML = "";
                operand1 = 0;
                operand2 = 0;
                operator = null;
                break;
            case "Del":
                display.innerHTML = display.innerText.substring(0, display.innerText.length-1);
                break;
        }
    });
}