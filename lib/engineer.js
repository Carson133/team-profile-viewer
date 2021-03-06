const Employee = require('./employee');

class Engineer extends Employee {
    constructor(firstName, lastName, id, github) {
        super(firstName, lastName, id)

        this.github = github;
        this.role = 'Enigineer';
        this.icon = 'fas fa-glasses';
    }

    getGithub(){
        return `<span class="has-text-weight-bold">GitHub:</span> <a href="https://github.com/${this.github}"target="_blank" class="has-text-info">${this.github}</a>`
    };
};

module.exports = Engineer;