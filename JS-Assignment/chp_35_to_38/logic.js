var value = multiply(4, 3, 6);

        console.log("value", value); // The result is 36 , As in the function multiply 
                                     // function add acts as function in expression, So, 
                                     // When we set arguments to function multiply the first 
                                     // argument will be a second will be b and thirst will be c.
                                     // So, first function multiply calls function add which will 
                                     // return the sum of b and c to function multiply then  it will 
                                     // multiply with a and return the product to variable value  

        function add(a, b) {
            var z = a + b;
            return z; 
        };

        function multiply(a, b, c) {
             var z = a * add(b, c);
            return z;
        };

        

        console.log("course", course); // The result is (course undefined, Besause of the concept of hoisting.
                                       // Hoisting moves the declaration to the top but not the initializaition 
                                       // that is why variable course is undefined ) 
        console.log("z", z);        // The result is in error (z in not defined because z in 
                                    // initialized as a function local variable so, It is cannot be accessible globally 

        var course = "cloud native computing";