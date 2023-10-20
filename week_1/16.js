// 배열

// 1. 생성
// 1-1 기본생성
let fruits = ["사과", "바나나", "오렌지"]

// 1-2 크기 지정
let number = new Array(5)

console.log(number.length)
console.log(fruits.length)

// 2. 요소 접근
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])

// 3. 배열 메소드
// 3-1. push 요소를 맨끝에 추가
let fruits1 = ["사과", "바나나"]
console.log(fruits1)

fruits1.push("오렌지")
console.log(fruits1)

// 3-2. pop : 마지막 요소 삭제
fruits1.pop()
console.log(fruits1)

// 3-3. shift : 처음요소를 삭제
let fruits2 = ["사과", "바나나", "오렌지"]
fruits2.shift()
console.log(fruits2)

// 3-4. unshift : 요소를 맨처음에 추가
let fruits3 = ["사과", "바나나", "오렌지"]
fruits3.unshift("포도")
console.log(fruits3)

// 3-5. splice : 원하는 위치에 요소를 바꾸는 메소드
let fruits4 = ["사과", "바나나", "오렌지"]
fruits4.splice(1, 1, "키위")
console.log(fruits4)

// 3-6. slice : 원하는 위치에 있는 요소를 가져오기
let fruits5 = ["사과", "바나나", "오렌지"]
let fruitsSlice = fruits5.slice(0, 1)
console.log(fruitsSlice)

// forEach, Map, filter, find
let numbers = [1,2,3,4,5]

// (1) forEach
// 매개변수 자리에 함수를 넣는것 : 콜백함수
numbers.forEach(item => {
    console.log(item)
});

// (2) Map
// 기존에 있었던 배열을 가공해서 새로운 배열을 만든다
// return을 하지 않으면 배열은 반환됩니다.
// 그러나 값이 없이 undefined로 채워져서 반환됩니다. 
 let newNumbers = numbers.map((item)=>{
    return item * 2
})
console.log(newNumbers)

// (3) filter
// 조건을 걸어서 조건에 맞는 값만 배열로 반환
let filterNumbers = numbers.filter((item)=>{
    return item !== 2
})
console.log(filterNumbers)

// (4) find
// 조건에 맞는 값중 처음값만 반환
let result = numbers.find((item)=>{
    return item > 3
})
console.log(result)





