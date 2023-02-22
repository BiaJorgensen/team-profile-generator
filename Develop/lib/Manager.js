const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return "Manager"
    }
    getExtraInfo() {
        return `<p>School: ${this.getSchool()}</p>`
    }
}

module.exports = Manager