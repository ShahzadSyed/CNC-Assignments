var courses = [];
var counter = ["First","Second","Third","Fourth","Fifth"]

for (let i = 0; i < 5; i++)
{
    courses.push(prompt(counter[i]+" Course"));
}
alert(courses);
            
for (let i = 0; i < courses.length; i++)
{
    courses[i] = prompt(counter[i]+" Course",courses[i]);
    courses.splice(i,1,courses[i]);
}
alert(courses)