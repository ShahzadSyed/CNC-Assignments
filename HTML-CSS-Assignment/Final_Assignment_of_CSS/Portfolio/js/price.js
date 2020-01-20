
        function order()
        {
        var courses = ["Basic","$ 9.99 / year", "10GB Storage", "10 Emails", "10Domains","1GB Bandwith"]
        for ( var i=0; i < courses.length; i++)
        {
             var a = prompt("",courses[i])
             courses.splice(i,1,a)
             
        }        
            console.log(courses)
            alert("Please Check your order in Console!")
        }

        function basicOrder()
        {
        var courses = ["Basic Plus","$ 15.99 / year", "20GB Storage", "30 Emails", "30Domains","2GB Bandwith"]
        for ( var i=0; i < courses.length; i++)
        {
             var a = prompt("",courses[i])
             courses.splice(i,1,a)
        }        
            console.log(courses)
            alert("Please Check your order in Console!")
        }

        function premium()
        {
        var courses = ["Premium","$ 20.99 / year", "100GB Storage", "100 Emails", "Unlimited Domains","50GB Bandwith"]
        for ( var i=0; i < courses.length; i++)
        {
             var a = prompt("",courses[i])
             courses.splice(i,1,a)
        }        
            console.log(courses)
            alert("Please Check your order in Console!")
        }

