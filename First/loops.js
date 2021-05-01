// for loop
var subjects = ["Maths", "Physics", "Chemistry"];
var marks = new Array();
var num1;
for (i = 0; i < subjects.length; i++) {
  num1 = parseFloat(prompt("enter your marks " + subjects[i]));
  marks[i] = num1;
  //  console.log("marks in"+ subjects[i]+ "is" + marks[i])
}

for (m in marks) {
  console.log(marks[m]);
}


