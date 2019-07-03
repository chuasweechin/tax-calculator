import calculatorService from "./../../src/client/service/calculator";

test('calculate tax should return 0 when annual income is 0', () => {
    expect(calculatorService.calculate(0)).toBe(0);
});

test('calculate tax should return 250,000 when annual income is 5,000,000', () => {
    expect(calculatorService.calculate(5000000)).toBe(250000);
});

test('calculate tax should return 10,000,000 when annual income is 100,000,000', () => {
    expect(calculatorService.calculate(100000000)).toBe(10000000);
});

test('calculate tax should return 45,000,000 when annual income is 300,000,000', () => {
    expect(calculatorService.calculate(300000000)).toBe(45000000);
});

test('calculate tax should return 125,000,000 when annual income is 600,000,000', () => {
    expect(calculatorService.calculate(600000000)).toBe(125000000);
});