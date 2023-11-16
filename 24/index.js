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
    joiningYear() {
        return 2020 - this.experience;
    }

    static add(a, b) {
        return a + b;
    }

}

exam = new Employee("Chinmay", 4, "Division");
console.log(exam);

class Programmer extends Employee {
    constructor(givenName, givenExperience, givenDivision, Language, github) {
        super(givenName, givenExperience, givenDivision);
        this.Language = Language;
        this.github = github;
    }

    favouriteLanguage() {
        if (this.language == 'Python') {
            return "python"
        }
        else {
            return "Javascript";
        }
    }

    static multiply(a, b) {
        return a * b;
    }
}
rohan = new Programmer("Rohan", "3", "Lays", "Go", "Rohan420")
console.log(rohan);