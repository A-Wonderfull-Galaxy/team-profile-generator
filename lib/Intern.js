//imports from /lib/Employee.js
const Intern = require("./Employee");

//inern constructor
class Intern extends Employee {
    constructor(name, id, email, school){
        //constructor extends the employee constructor by adding a school to Intern
        super(name, id, email)
        this.school = school
    }
        
    //returns 'Intern' role
    getRole(){
        return "Intern"
    }
    //returns school input
    getSchool(){
        return this.school
    }
}

//exports as Intern
module.exports = Intern;