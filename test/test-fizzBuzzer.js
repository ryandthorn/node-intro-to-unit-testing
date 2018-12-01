const expect = require('chai').expect;
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
  it('should return "fizz" if a number is divisible by 3', function() {
    const normalCases = [
      {num: 3, expected: 'fizz'},
      {num: 6, expected: 'fizz'}
    ];
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      expect(answer).to.equal(input.expected);
    });
  });
  it('should return "buzz" if a number is divisible by 5', function() {
    const normalCases = [
      {num: 5, expected: 'buzz'},
      {num: 10, expected: 'buzz'}
    ];
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      expect(answer).to.equal(input.expected);
    });
  });
  it('should return "fizz-buzz" if a number is divisible by 15', function() {
    const normalCases = [
      {num: 15, expected: 'fizz-buzz'},
      {num: 30, expected: 'fizz-buzz'}
    ];
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      expect(answer).to.equal(input.expected);
    });
  });
  it('should throw an error if args are not numbers', function() {
    const badInputs = [
      {num: '3'},
      {num: null},
      {num: ''}
    ];
    badInputs.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input.num).to.throw(Error);
      })
    });
  });
});