var months = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"];
        var name = prompt("Enter your name","e.g. Shahzad");
        var date = prompt("Enter you date of birth","e.g. 07");
        var month = prompt("Enter your month of birth","e.g. 08");
        var year = prompt("Enter your year of ","e.g. 1992");
        
        
        //Getting current date + specifying date of birth
        var currDate = new Date();
        var d = new Date();
        var n = d.getHours();
        if (n > 0 && n < 12)
        {
            console.log("Hello " + name +" Good Morning")
        }
        else if (n >=12 && n < 17)
        {
            console.log("Hello " + name +" Good After Noon")
        }
        else if( n >= 17 && n < 21)
        {
            console.log("Hello " + name +" Good Evening")
        }
        else
        {
            console.log("Hello " + name +" Good Night")
        }

        //console.log("Hello " +name +", Good Morning!");



        var birthDate = new Date("" +months[month-1] +" " +date + ", " +year);
        //Converting date into string
        var birthDateString = birthDate.toString();
        //Extracting timezone from string
        var timeZone = birthDateString.indexOf("(");
        timeZone = birthDateString.slice(timeZone + 1,birthDateString.length -1);
        timeZone = timeZone.toLowerCase();
        console.log("Your DOB is " +birthDate );
        
//-------------------------------------------------------------
// -------------------------- Differnce b/w dates --------------------------
//-------------------------------------------------------------
        //calculating diference between 2 dates
        var diffMS = currDate.getTime() - birthDate.getTime();
        var totalDays = Math.floor(diffMS / (1000 * 60 * 60 * 24));
        
        var years = Math.floor(diffMS / (1000 * 60 * 60 * 24 * 365 ));
        diffMS = diffMS % (1000 * 60 * 60 * 24 * 365);
        var months = Math.floor(diffMS / (1000 * 60 * 60 * 24 * 30)) % 12;
        diffMS = diffMS % (1000 * 60 * 60 * 24 * 26);
        var days = Math.floor(diffMS / (1000 * 60 * 60 * 24));
        diffMS = diffMS % (1000 * 60 * 60 * 24);
        var hours = Math.floor(diffMS / (1000 * 60 * 60));
        diffMS = diffMS % (1000 * 60 * 60);
        var minutes = Math.floor(diffMS / (1000 * 60));
        diffMS = diffMS % (1000 * 60);
        var seconds = Math.floor(diffMS / 1000);
        diffMS = diffMS % 1000;
        var milliseconds = diffMS;
        console.log("You are " +years +" years "+months +" months " +days +" days " +hours +" hours " +minutes +" minutes " +seconds +" seconds " +milliseconds +" milliseconds old")
        console.log("Your age in days " +totalDays); 
//-------------------------------------------------------------
// -------------------------- Part 8 --------------------------
//-------------------------------------------------------------
        var nextBDay = new Date("Marchi 13, 2020");
        diffMS = nextBDay.getTime() - currDate.getTime();
        var nextDays = Math.floor(diffMS / (1000 * 60 * 60 * 24));
        diffMS = diffMS % (1000 * 60 * 60 * 24);
        var nextHours = Math.floor(diffMS / (1000 * 60 * 60));
        diffMS = diffMS % (1000 * 60 * 60);
        var nextMinutes = Math.floor(diffMS / (1000 * 60));
        diffMS = diffMS % (1000 * 60);
        var nextSeconds = Math.floor(diffMS / 1000);
        diffMS = diffMS % 1000;
        var nextMilliseconds = diffMS;
        if (currDate.getDay() === nextBDay.getDay() && currDate.getMonth() === nextBDay.getMonth()) {
            console.log("Happy Birth Day " +name +". Today is Your " +years +"th Birthday");
        }
        else{
            console.log("How much time left in your next birthday? " +nextDays +" days " +nextHours +" hours " +nextMinutes +" minutes " +nextSeconds +" seconds " +nextMilliseconds +" milliseconds.");
        }
