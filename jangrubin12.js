// const add = require('./utility-module/add.js');
// const minus = require('./utility-module/minus.js');
// const divide = require('./utility-module/divide.js');
// const multiply = require('./utility-module/multiply.js');

const a = 10;
const b = 20;

// console.log(add(a,b));
// console.log(minus(a,b));
// console.log(divide(a,b));
// console.log(multiply(a,b));

// Q1. 사칙연산 모듈 4개를 만들어서 import 후 호출 한 예시다.
// Q1. 아무래도 하나하나 가져오는 것은 가독성, 사용성이 떨어진다.
// Q1. 이것을 하나의 Class 형태의 모듈로 만들어 관리 할 수 있을까?

class Calculator {
    constructor(a,b) {
        this._a = a;
        this._b = b; 
    }

addCalculator() {
    let result = this._a + this._b;
    return result;
 }
}
const calculator = new Calculator(a,b);
console.log(calculator.addCalculator())