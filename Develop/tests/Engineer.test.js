const Engineer = require("../lib/Engineer");


describe('Engineer', () => {
    describe('Initialization', () => {
        it('should construct an object with name, id, email and github username', () => {
            const engineer = new Engineer('Bia', 1, 'bia@gmail.com', 'BiaJorgensen');
            expect(engineer).toEqual(expect.any(Object));
            expect(engineer.name).toEqual('Bia');
            expect(engineer.id).toEqual(1);
            expect(engineer.email).toEqual('bia@gmail.com');
            expect(engineer.github).toEqual('BiaJorgensen');
        });
    });
});

describe('getGitHub', () => {
    it("should return engineer's name", () => {
    const engineer = new Engineer('Bia', 1, 'bia@gmail.com', 'BiaJorgensen');
    expect(engineer.name).toEqual('Bia');  
    });
});

describe('getRole', () => {
    it("it should return 'Engineer'", () => {
        const engineer = new Engineer('Bia', 1, 'bia@gmail.com', 'BiaJorgensen');
        expect(engineer.getRole()).toEqual('Engineer');
    });
});

describe('getExtraInfo', () => {
    it("it should return an HTML <p> with URL to enginee's GitHub's page and username", () => {
        const engineer = new Engineer('Bia', 1, 'bia@gmail.com', 'BiaJorgensen');
        expect(engineer.getExtraInfo()).toEqual('<p>GitHub: <a target="_blank" href="https://github.com/BiaJorgensen">BiaJorgensen</a></p>');
    });
});