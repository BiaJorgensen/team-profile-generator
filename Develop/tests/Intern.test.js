const Intern = require('../lib/Intern');

describe('Intern', () => {
  describe('Initialization', () => {
    it('should return an object construction with name, id, email and school', () => {
        const intern = new Intern('Bia', 1, 'bia@gmail.com', 'UofM');
        expect(intern).toEqual(expect.any(Object));
        expect(intern.name).toEqual('Bia');
        expect(intern.id).toEqual(1);
        expect(intern.email).toEqual('bia@gmail.com');
        expect(intern.school).toEqual('UofM');
    });
  });
});

describe('getShcool', () => {
    it("should return the name of the intern's school", () => {
        const intern = new Intern('Bia', 1, 'bia@gmail.com', 'UofM');
        expect(intern.school).toEqual('UofM');
    });
});

describe('getRole', () => {
    it("should return 'Intern'", () => {
        const intern = new Intern('Bia', 1, 'bia@gmail.com', 'UofM');
        expect(intern.getRole()).toEqual('Intern');
    });
});

describe('getExtraInfo', () => {
    it("should return an HTML <p> with the intern's school", () => {
        const intern = new Intern('Bia', 1, 'bia@gmail.com', 'UofM');
        expect(intern.getExtraInfo()).toEqual('<p>School #: UofM</p>');
    });
})