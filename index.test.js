// Requirements
// TDD - create tests for a module that will:
// obscure credit card number except the last 4 digits
// Test make sure the function obscure credit card numbers that are between the length of 12 and 16 digits

// positive and negative unit tests
// positive -> credit card is correct in size
// negative -> "Invalid Credit Card" if under 12 or above 16
const creditCardObscurer = require('./index');

describe("Credit Card Module tests", ()=> {
    // Test if credit card number is under 12 or above 16
    test("As a user I want to be notified if my credit card number is the incorrect number of expected digits", () => {
        expect(creditCardObscurer(901)).toEqual("Invalid Credit Card");
    })
    // Test if credit card is obscured 
    test("As a user I want my credit card details obscured except the last 4 digits", () => {
        expect(creditCardObscurer(9284234533426)).toEqual("xxxxxxxxx3426");
    })
})