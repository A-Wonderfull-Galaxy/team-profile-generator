//Intern constructor test
const Intern = require("../lib/Intern");

//gets school
test("set office number to constructor function", ()=>{
    const school = "university 1";
    const employee = new Intern("Tina", 01, "TinaBelcher@bobsburger.com", school);

    expect(employee.school).toBe(school);
});

//gets role
test("getRole() should return 'Intern' as role", ()=> {
    const role = 'Intern';
    const employee = new Intern('Tina', 01, 'TinaBelcher@bobburgers.com', 'Intern');

    expect(employee.getRole()).toBe(role);
});