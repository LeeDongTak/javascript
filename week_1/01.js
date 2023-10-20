// 변수, 상수
// 메모리에 저장한다. 읽어들여서 재사용한다. => 변수

// 변수의 5가지 주요개념 

// 1. 변수 이름 : 저장된 값의 고유 이름 
// 2. 변수 값 : 변수에 저장된 값
// 3. 변수 할당 : 변수에 값을 저장하는 행위 
// 4. 변수 선언 : 변수를 사용하기 위해 컴퓨터에 알리는 행위
// 5. 변수 참조 : 변수에 할당된 값을 읽어오는 것

// 변수를 선언할 수 있는 3가지 방법 : var let const
// 1. var 다시 선언 가능, 재할당 가능 
var myVar = "Hello world!";
var myVar = "Test 1";
myVar = "Good Bye"
console.log(myVar)

// 2. let 다시 선언 불가 , 제할당 가능 
let myLet = "Hello world!";
// let myLet = "Test 1";
myLet = "Good Bye"
console.log(myLet)

// 3. const 다시 선언 불가, 제할당 불가
const myConst = "Hello world!";
// const myConst = "Test 1";
myConst = "Good Bye"
console.log(myConst)