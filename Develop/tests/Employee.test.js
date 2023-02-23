const Employee = require('../lib/Employee');


describe('Employee', () => {
    describe('Initialization', () => {
        it('should construct an object with name, id and email', () => {
            const employee = new Employee('Bia', 1, 'bia@gmail.com');
            expect(employee).toEqual(expect.any(Object));
            expect(employee.name).toEqual('Bia');
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual('bia@gmail.com')
        })
    })
})

describe('getName', () => {
    it("it should return the employe's name", () => {
        const employee = new Employee('Bia', 01, 'bia@gmail.com');
        expect(employee.name).toEqual('Bia');
    })


})