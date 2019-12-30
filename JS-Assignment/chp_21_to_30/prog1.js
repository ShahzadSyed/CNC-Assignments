var userInput = parseFloat(Math.ceil(prompt("Enter a Decimal Point value.","i.e 4.6")));
var dummyText = "Quick brown fox jumps over a lazy dog";

alert("Your entered number is now " + userInput );
alert("Dummy text " + dummyText );

var text = dummyText.slice(0,userInput);

text = text.split("");
var textRev = "";
        
for (let i = text.length - 1; i >= 0; i--)
{
   textRev +=  text[i];
            
}
alert(`"${text.join("")}"`);
alert(`"${textRev}"`);