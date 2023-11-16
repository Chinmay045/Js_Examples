console.log("Hello!!");

class Employee {
    constructor(givenName, givenExperience, givenDivision) {
        this.name = givenName;
        this.experience = givenExperience;
        this.division = givenDivision;
    }
}

exam = new Employee("Chinmay", 4, "Division");
console.log(exam);