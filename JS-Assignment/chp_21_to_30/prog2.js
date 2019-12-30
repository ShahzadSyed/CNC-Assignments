var userInput = prompt("Write a sentence that you want to capatalize");
var splitUserInput = userInput.split(" "); 
var sentence = "";
var space = " ";

for (let i = 0; i < splitUserInput.length; i++)
{
    sentence += splitUserInput[i].charAt(0).toUpperCase() + splitUserInput[i].slice(1).toLowerCase() + space;
        
}
console.log(sentence);