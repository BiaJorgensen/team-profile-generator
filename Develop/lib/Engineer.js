const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getGitHub() {
        return this.github
    }
    getRole() {
        return "Engineer"
    }
    getExtraInfo() {
        return `<p>GitHub: <a target="_blank" href="https://github.com/${this.github}">${this.github}</a></p>`
    }
}

module.exports = Engineer