 
    function findFactorial(number){
        var facorial = 1;
        while(number !== 1 ){
            facorial = number * facorial;
            number--;
        }
        return facorial
    }

    var userInput = Number(prompt("Enter a number"));
    var result = findFactorial(userInput);
    console.log(`Factorial of ${userInput} is "${result}"`);