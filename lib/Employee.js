//constructor for employee
class Employee {
    constructor (name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    
    //returns name from input
    getName(){
        return this.name
    }

    //returns ID from input
    getId(){
        return this.id
    }

    //returns email from input
    getEmail(){
        return this.email;
    }

    //returns the roll of "Employee"
    getRole(){
        return "Employee";
    }
}

//exports as Employee
module.exports = Employee;