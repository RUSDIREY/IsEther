const {isEther} = require("../src/isEther")

test('Check some random address (not ethereum address)', () => {
    expect(isEther("0xffffff")).toBe(false)
})