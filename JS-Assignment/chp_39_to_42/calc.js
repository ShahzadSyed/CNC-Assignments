var course1 = Number(prompt("Please enter your course1 marks"));
        var course2 = Number(prompt("Please enter your course2 marks"));
        var course3 = Number(prompt("Please enter your course3 marks"));
        var course4 = Number(prompt("Please enter your course4 marks"));
        var course5 = Number(prompt("Please enter your course5 marks"));
        var totMarks = 500;

        var marksObtained = course1+course2+course3+course4+course5;

        var percentage = ((marksObtained / totMarks) * 100).toFixed(2);
        console.log(percentage);

        var grade;

        switch(true){
            case(percentage >=90 && percentage<=100):
                grade = "A+";
                alert("Grade= " + grade);
                break;
            case(percentage >=75 && percentage<=89):
                grade = "A";
                alert("Grade= " + grade);
                break;
            case(percentage >=60 && percentage<=74):
                grade = "B";
                alert("Grade= " + grade);
                break;
            case(percentage >=45 && percentage<=59):
                grade = "C";
                alert("Grade= " + grade);
                break;
            case(percentage >=30 && percentage<=44):
                grade = "D";
                alert("Grade= " + grade);
                break;
            case(percentage >=0 && percentage<=29):
                grade = "F";
                alert("Grade= " + grade);
                break;
            default:
                alert("Invalid Marks")
        }
    