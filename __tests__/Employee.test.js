//Employee co0nstructor test
const Employee = require('../lib/Employee')

//gets name
test('set name to constructor function', () =>{
    const name = "Bob Belcher";
    const employee = new Employee(name);

    expect(employee.name).toBe(name);
})

//gets id
test('set id to constructor function', () =>{
    const id = '01';
    const employee = new Employee('Bob Belcher', id, 'BobBelcher@bobsburgers.com');

    expect(employee.id).toBe(id);
})


//gets email
test('getMail() should return the inputed email', ()=>{
    const email = 'BobBelcher@bobsburgers.com';
    const employee = new Employee('Bob Belcher', 1, email);

    expect(employee.getEmail()).toBe(email);
})

//gets role
test('getRole() should return "Employee"', ()=>{
    const role = "Employee";
    const employee = new Employee('Bob Belcher', 1, 'BobBelcher@bobsburgers.com');

    expect(employee.getRole()).toBe(role);
});