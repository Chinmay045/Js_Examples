const students = [
    {name : "harry", subject:"Javascript"},
    {name :"Rohan", subject:"Machine Learning"}
]

function enrollStudent(student){
    setTimeout(function(){
        students.push(student)
console.log("success");
    },3000)
}

function getStudents(){
    setTimeout(function(){
        let str = "";
        students.forEach(function(student){
            str += `<li> ${student.name} </li>`
        });
        document.getElementById('students').innerHTML = str;
    },1000);
}

let newStudent = {name:"Sunny", Subject: "Python"}
enrollStudent(newStudent);
getStudents();