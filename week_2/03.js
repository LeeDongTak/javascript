// 단축속성명 : property shorthand
const name = "nbc"
const age = 30

//key = value가 같으면 하나 생략
const obj = { name, age}

// 전개 구문 =  spread operator
// destructuring과 가장 많이 사용되는 es6 문법중 하나
let arr = [1,2,3]

let newArr = [...arr , 4]
console.log(arr)
console.log(newArr)

let user = {
    name: 'nbc',
    age: 20
}
let user2 = {...user}
console.log(user2)

// 나머지 매개변수(rest parameter)
function exampleFunc (a,b,c, ...args){
    console.log(a,b,c)
    console.log(...args)
}
exampleFunc(1,2,3,4,5,6,7)

// 탬플릿 리터럴(Template Literal)
//문자열과 수식을 같이 사용 가능
console.log(`Hello world ${3+3}`)

// 줄바꿈 가능
console.log(
 `Hello
  world
 ${3+3}`
 )





