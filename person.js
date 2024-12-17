//code step 2 for exercise 3
class student {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    // Method to return student information
    getPersonInfo() {
        return `Name: ${this.name}, Age: ${this.age}, Email: ${this.email}`;
    }
}

// Exporting the Student class
module.exports = student;