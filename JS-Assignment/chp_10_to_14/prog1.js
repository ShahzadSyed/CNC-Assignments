var num1 = Number(prompt("Please enter your first number"));
var operator = prompt("Please enter the operator");
var num2 = Number(prompt("Please enter your second number"));

if(operator === "+"){
    var sum = num1 + num2;
    alert("sum = " + sum);
}else if(operator === "-"){
            var minus = num1 - num2;
            alert ("minus = " + minus);
        }else if(operator === "/"){
            var division = num1 / num2;
            alert ("division = " + division);
        }else if(operator === "*"){
            var product = num1 * num2;
            alert ("product = " + product);
        }else if(operator === "%"){
            var modulus = num1 % num2;
            alert ("modulus = " + modulus);
        }else{
            alert("Please fill the boxes properly");
        }