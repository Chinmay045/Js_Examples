const students = [
    { name: "harry", subject: "Javascript" },
    { name: "Rohan", subject: "Machine Learning" }
]

function enrollStudent(student, callback) {
    setTimeout(function () {
        students.push(student)
        console.log("success");
        callback();
    }, 3000)
}

function getStudents() {
    setTimeout(function () {
        let str = "";
        students.forEach(function (student) {
            str += `<li> ${student.name} </li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log("Results fetched");
    }, 1000);
}

let newStudent = { name: "Sunny", Subject: "Python" }
enrollStudent(newStudent, getStudents());
// getStudents();