//code step 1 for exercise 3

const dateOfBirth = "17/10/1990";


const getStudentName = () => {
    return " Rashmi";
};


const getCampusName = () => {
    return "UEL Campus";
};

// Exporting functions and variables outside the module
exports.getName = getStudentName;
exports.Location = getCampusName;
exports.dob = dateOfBirth;

// Exporting a function with parameters
exports.StudentGrade = (marks) => {
    if (marks > 50 && marks < 70) {
        return "B grade";
    } else {
        return "A grade";
    }
};