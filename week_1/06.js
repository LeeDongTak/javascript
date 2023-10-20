// 연산자 (+,-,*,/)

// 1. 더하기 연산자(+)
console.log(1+1) // 2
console.log(1+"1") // 11

// 2. 빼기 연산자(-)
console.log(1 - "2") // -1
console.log(1 - 2) // -1

// 3. 곱하기 연산자(*)
console.log(2 * 3) // 6
console.log("2" * 3) // 6

// 4. 나누기 연산자(/)
console.log("4" / 2) // 2
console.log(4 / 2) // 2

// 4. 나누기 연산자(/) vs 나머지 연산자(%)
console.log(5 / 2) // 2
console.log(5 % 2) // 2

// 할당 연산자(assignment)
// 6-1 등호 연산자 
let x = 10
console.log(x)

// 6-2. 더하기 등호 연산자(+=)
x += 5
console.log(x)

// 빼기 등호 연산자 (-=)
x -= 5
console.log(x)

// x를 -10으로 
x -= 20
console.log(x)

let a = 10
a *= 2
console.log(a)

// 비교 연산자
// 1. 일치 연산자(===)
// 타입까지 일치해아 true를 반환하는 연산자

console.log(1 === 1) //true
console.log("1" === 1) //false
console.log(1 === "1") //false

// 2. 불일치 연산자(!==)
// 타입까지 일치해아 false 반환하는 연산자
console.log(1 === 1) //false
console.log("1" === 1) //true
console.log(1 === "1") //true

// 3. 작다 연산자
console.log(2 < 3) //true
console.log(2 <= 3) //true
console.log(3 <= 3) //true
console.log(4 <= 3) //false

// 4. 논리연산자 : true와 false를 비교하는 연산자
// 4-1. 논리곱 연산자(&&) 모두 true일때 true를 반환
console.log("---------------")
console.log(true && true) // true
console.log(true && false) //false
console.log(false && true) //false
console.log(false && false) //false

// 4-2. 논리합 연산자(||) : 두 값중 하나라도 true면 ture를 반환 
console.log("---------------")
console.log(true || true) // true
console.log(true || false) //true
console.log(false || true) //true
console.log(false || false) //false

// 4-3. 논리부정 연산자(!)
console.log("---------------")
console.log(!true) // false
let aa = true
console.log(!aa)

// 5. 3항연산자
// 조건에 따라 값을 선택한다.
let xx = 10
let result = xx > 5 ? "크다" : "작다"
console.log(result)

let yy = 20
let result01 = yy > 10 ? "크다" : "작다"
console.log(result01)

// 타입 연산자(typeof)
console.log(typeof("123"))






