console.log("Hello!!");

class Employee {
    constructor(givenName, givenExperience, givenDivision) {
        this.name = givenName;
        this.experience = givenExperience;
        this.division = givenDivision;
    }
    slogan() {
        return ` I am ${this.name} and this company is the best!!`
    }
}

exam = new Employee("Chinmay", 4, "Division");
console.log(exam);