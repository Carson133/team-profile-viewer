const Intern = require('../lib/intern')

test("Can get intern school", () => {
    const schoolName = "University of Oregon"
    const e = new Intern("Jon", "Janson", 2, schoolName);
    expect(e.school).toBe(schoolName);
})