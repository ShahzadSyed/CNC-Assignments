
var totalMarks =500;
var linux,docker,git,javscript,Kubernetes;
var marksObtain,per;

linux = parseInt(prompt("Enter your Linux marks: "));
docker = parseInt(prompt("Enter your Docker marks: "));
git = parseInt(prompt("Enter your GIT marks: "));
javscript = parseInt(prompt("Enter your Javascript marks: "));
Kubernetes = parseInt(prompt("Enter your Kubernetes marks: "));

marksObtain = parseInt(linux + docker + git );
per = (marksObtain/totalMarks)*100;
alert("Marks obtained " + marksObtain + " out of " + totalMarks)
alert("Percentage is " + per + " % ")