const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('Initialization', () => {
        it('should return an object construction with name, id, email and office number', () => {
            const manager = new Manager ('Bia', 1, 'bia@gmail.com', 1);
            expect(manager).toEqual(expect.any(Object));
            expect(manager.name).toEqual('Bia');
            expect(manager.id).toEqual(1);
            expect(manager.email).toEqual('bia@gmail.com');
            expect(manager.officeNumber).toEqual(1);
        });
    });
});

describe('getRole', () => {
    it("should return 'Manager'", () => {
        const manager = new Manager ('Bia', 1, 'bia@gmail.com', 1);
        expect(manager.getRole()).toEqual('Manager');
    });
});

describe('getExtraInfo', () => {
    it("should return an HTML <p> with manager's office number", () => {
        const manager = new Manager ('Bia', 1, 'bia@gmail.com', 1);
        expect(manager.getExtraInfo()).toEqual('<p>Office #: 1</p>');
    });
});
