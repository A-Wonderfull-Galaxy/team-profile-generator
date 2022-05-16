//Manager constructor test
const Manager = require("../lib/Manager");

//gets office number
test("set office number to constructor function", ()=>{
    const officeNumber = "0000";
    const employee = new Manager("Bob", 01, "BobBelcher@bobsburger.com", officeNumber);

    expect(employee.officeNumber).toBe(officeNumber);
});


//gets role
test("getRole() should return 'Manager' as role", ()=> {
    const role = 'Manager';
    const employee = new Manager('Bob', 01, 'BobBelcher@bobburgers.com', 'Manager');

    expect(employee.getRole()).toBe(role);
});