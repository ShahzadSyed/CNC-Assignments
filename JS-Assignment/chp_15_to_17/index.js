var courses = [];

var course1 = prompt("First Course");
var course2 = prompt("Second Course");
var course3 = prompt("Third Course");
var course4 = prompt("Forth Course");
var course5 = prompt("Fifth Course");
        
courses.push(course1,course2,course3,course4,course5);
alert(courses);

course1 = prompt("First Course",courses[0]);
course2 = prompt("Second Course",courses[1]);
course3 = prompt("Third Course",courses[2]);
course4 = prompt("Forth Course",courses[3]);
course5 = prompt("Fifth Course",courses[4]);

courses.splice(0,courses.length,course1,course2,course3,course4,course5);
alert(courses);