//imports from /lib/Employee.js
const Manager = require("./Employee");

//manager coinstructor
class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        ////constructor extends the employee constructor by adding an office number to the Manager
        super(name, id, email)
        this.officeNumber = officeNumber
    }
        
    //returns the roll of "Manager"
    getRole(){
        return "Manager"
    }

    //returns the officeNumber input
    getOfficeNumber(){
        return this.officeNumber
    }
}

//exports as Manager
module.exports = Manager;