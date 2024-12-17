//code for the exercise 1 

//declaration of the EmployeeInfo function
function EmployeeInfo(empName, empSalary) {
    console.log("Welcome " + empName + ", your monthly salary is " + empSalary);
}

console.log("This is my first JavaScript program.");

var employeeName = "Rohnny";
var employeeSalary = 40000;

EmployeeInfo(employeeName, employeeSalary);


//Code for the exercise 2 
const employeeSkills = (skill) => {
    console.log("Proficient in " + skill);
};
employeeSkills("Java")
 






//Code step 3 for the exercise 3 

// Importing modules using 'require'

const student = require('./StudentInfo');
const person = require('./Person');

// Using the StudentInfo module
// Calling getName method 
console.log("Student Name: " + student.getName());

// Calling Location  
console.log(student.Location());

// calling dob  
console.log("Date of Birth: " + student.dob); 

// Calling Studentgrade
console.log("Grade: " + student.StudentGrade());
console.log("Grade is: " + student.StudentGrade(55));

// Creating a new Person
const person1 = new person("Jim", "20", "myemail@gmail.com");
console.log("Using Person Module:", person1.getPersonInfo());


console.log("Program end")


// C:\Users\kavee\OneDrive\Desktop\assignment\CN5006\index.js