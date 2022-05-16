//imports from /lib/Employee.js
const Employee = require("./Employee");

//engineer constructor extends to employee constructor
class Engineer extends Employee {
    constructor(name, id, email, github){
        //constructor extends the emplyee constructor by adding a github to Engineer
        super(name, id, email)
        this.github = github
    }
     
    //returns the roll of "ENgineer"
    getRole(){
        return "Engineer"
    }

    //returns github from input
    getGithub(){
        return this.github
    }
}

//exports as Engineer
module.exports = Engineer;