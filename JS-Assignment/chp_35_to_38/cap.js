function capataliseSentence(userInput){
    var splitUserInput = userInput.split(" ");
    var sentence = "";
    var space = " ";
    for (let i = 0;  i< splitUserInput.length; i++) {
        sentence += splitUserInput[i].charAt(0).toUpperCase() + splitUserInput[i].slice(1).toLowerCase() + space;
        
    }
    return sentence
}
var userInput = prompt("Enter a sentence that you want to capatalize");
var result = capataliseSentence(userInput);
console.log(result);