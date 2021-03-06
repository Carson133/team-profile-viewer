class Employee {
    constructor(firstName, lastName, id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.email = `${firstName}.${lastName}@compname.com`;
        this.role = 'Employee';
        this.icon = 'fas fa-briefcase'
    };

    getName(){
        return `${this.firstName} ${this.lastName}`
    };

    getID(){
        return `<span class="has-text-weight-bold">ID:</span> ${this.id}`
    };

    getEmail(){
        return `<span class="has-text-weight-bold">Email:</span> <a href="mailto:${this.email}" class="has-text-info">${this.email}</a>`
    };

    getRole(){
        return this.role
    };

    getIcon(){
        return `<i class="${this.icon} fa-3x"></i>`
    };

};

module.exports = Employee;