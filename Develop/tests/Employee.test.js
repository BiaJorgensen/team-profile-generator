const Employee = require('../lib/Employee');


describe('Employee', () => {
    describe('Initialization', () => {
        it('should construct an object with name, id and email', () => {
            const employee = new Employee('Bia', 1, 'bia@gmail.com');
            expect(employee).toEqual(expect.any(Object));
            expect(employee.name).toEqual('Bia');
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual('bia@gmail.com');
        });
    });
});

describe('getName', () => {
    it("it should return the employee's name", () => {
        const employee = new Employee('Bia', 1, 'bia@gmail.com');
        expect(employee.getName()).toEqual('Bia');
    });
});

describe('getId', () => {
    it("it should return the employee's id", () => {
        const employee = new Employee('Bia', 1, 'bia@gmail.com');
        expect(employee.getId()).toEqual(1);
    });
});

describe('getEmail', () => {
    it("it should return the employee's email", () => {
        const employee = new Employee('Bia', 1, 'bia@gmail.com');
        expect(employee.getEmail()).toEqual('bia@gmail.com');
    });
});
describe('getRole', () => {
    it("it should return 'Employee'", () => {
        const employee = new Employee('Bia', 1, 'bia@gmail.com');
        expect(employee.getRole()).toEqual('Employee');
    });
});