const Manager = require('../lib/manager');

test("Can get office number", () => {
    const officeNumber = 1;
    const e = new Manager("Mon", "Manson", 3, officeNumber);
    expect(e.officeNumber).toBe(1);
  });