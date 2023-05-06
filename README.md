# 숙제 12

```jsx
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
        // validataIntegers 메서드?? 값이 정수일 때만 값을 return해줌
        // this._a = this.~~ 이부분이 이해가 가지 않음
        this._a = this.validateIntegers(a);
        this._b = this.validateIntegers(b);
    }
help() {
    return typeof this._a;
    // return typeof(this._a)
    // return parseInt(this._a);
}

validateIntegers(value) {
    if(Number.isInteger(value)) {
        return value;
    } else {
        throw new Error("인자는 정수여야 합니다")
    }
}

add() {
    let result = this._a + this._b;
    return result;
 }

minus() {
    let result = this._a - this._b;
    return result;
}

divide() {
    let result = this._a / this._b;
    return result;
}

multiply() {
    let result = this._a * this._b;
    return result;
}
}
const calculator = new Calculator(a,b);
console.log(calculator.help())
console.log(calculator.add());
console.log(calculator.minus());
console.log(calculator.divide());
console.log(calculator.multiply());
console.log(calculator.help());
// Q2. Class에서 작성 될 메서드는 모두 '정수'로 된 두개의
// 인자를 받아서 결과를 반환하게 제한하려면
// 어떤 helper function을 사용해야 할까요?
// helper function을 사용하면 어떤 장점이 있을까요
// 버그 해결 및 방지 가능할 것 같습니다
// helper function을 사용하지 않고 구현할 수 있는 방법이 있을까요?
```

모듈을 따로 불러서 사용했을 때의 이점도 있지만

같은 인자 값으로 처리해야 할 로직이 다를 때는 클래스를 사용 하는 것이 좋다.

클래스를 생성함으로서 코드를 구조화 하고 재사용성을 높이며

 유지보수를 용이하게 할 수 있다.

위 코드는 Calculator라는 클래스를 작성해서 

그 안에 덧셈, 뺄셈, 나눗셈, 곱셈을 처리하는 메서드를 만들어

필요한 메서드를 호출해 사용한다.

추가 조건으로 ‘정수’만을 인자로 받아서 결과를 출력하게 하기 위해 

help()라는 메서드를 생성했다.

validateIntegers 는 인자가 정수일 때만 값을 return하게 하는 메서드이며 

```jsx
this._a = this.validateIntegers(a);
this._b = this.validateIntegers(b);
```

위 부분은 인자로 전달 된 a, b를 validateIntegers() 메서드를 사용해 정수로 반환한 후 

멤버 변수인 _a와 _b에 할당하는 역할을 수행한다.

```jsx
validateIntegers(value) {
    if(Number.isInteger(value)) {
        return value;
    } else {
        throw new Error("인자는 정수여야 합니다")
    }
}
```

그 후에 Number.isInteger() 메서드를 사용해 값이 정수인지 아닌지 확인하고 정수라면 

그대로 값을 반환, 아니라면 Error를 발생시켜 인자로 오직 정수만 받음을 알려줍니다.