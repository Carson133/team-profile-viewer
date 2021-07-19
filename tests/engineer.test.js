const Engineer = require('../lib/engineer')

test("Can get github username", () => {
    const gitHub = "rswanson"
    const e = new Engineer("Bon", "Banson", 1, gitHub)
    expect(e.github).toBe(gitHub);
})