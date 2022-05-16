//Engineer constructor test
const Engineer = require("../lib/Engineer");

//gets github
test("set office number to constructor function", ()=>{
    const github = "university 1";
    const employee = new Engineer("Gene", 01, "GeneBelcher@bobsburger.com", github);

    expect(employee.github).toBe(github);
});

//gets roll
test("getRole() should return 'Engineer' as role", ()=> {
    const role = 'Engineer';
    const employee = new Engineer('Gene', 01, 'GeneBelcher@bobburgers.com', 'Engineer');

    expect(employee.getRole()).toBe(role);
});