const { test } = require('@jest/globals')
const subtract = require('./subtract')

test('Properly subtracts two numbers', () => {
    expect(subtract(2,2)).toBe(0)

})