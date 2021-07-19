const Employee = require('../lib/employee')

test("Can retrieve Employee", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
})

test("Can get name", () => {
    const userFirstName = "Ron";
    const userLastName = "Swanson";
    const e = new Employee(userFirstName, userLastName);
    expect(e.getName()).toBe("Ron Swanson");
})

test("Can get id", () => {
    const userID = 0;
    const e = new Employee("first", "last", userID);
    expect(e.getID()).toBe(`<span class="has-text-weight-bold">ID:</span> ${userID}`);
})