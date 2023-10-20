// 객체
// key - value pair
// 하나의 변수에 여려개의 값을 넣을 수 있다. 

// 1. 객체 생성 방법
// 1-1. 기본적인 객체 생성 방법
let person = {
    name: "홍길동",
    age: 20,
    gender: "남자"    
}

// 1-2. 생성자 함수를 이용한 객체 생성 방법
// function Person(name, age, gender){
//     this.name = name
//     this.age = age
//     this.gender = gender
// }

// let person1 = new Person("홍길동", 20, "남자")
// let person2 = new Person("홍길순", 20, "여자")

// 2. 접근하는 방법
console.log(person.name)
console.log(person.age)
console.log(person.gender)

// 3. .객체 메소드(객체가 가진 여러가지 기능 : Object.~~~)
// 3-1. Object.keys() : key를 가져오는 메소드
let keys = Object.keys(person)
console.log("key => " , keys)

// 3-2. Object.values() : value를 가져오는 메소드
let values = Object.values(person)
console.log("values => " , values)

// 3-3. entries
// 키와 벨류를 묶어서 배열로 만든 배열(2차원 배열)
let entries = Object.entries(person)
console.log("entries => " , entries)

// 3-4. assign
// 객체 복사
let newperson = {}
Object.assign(newperson, person, {age : 22})
console.log("newperson => " , newperson)

// 3-5. 객체 병합
// 크기가 상당히 커요 -> 메모리에 저장할 때 별도의 공간에 저장
// person01 별도공간에 대한 주소
let person01 = {
    name: "홍길동",
    age: 20,
    gender: "남자" 
}

// person02 별도공간에 대한 주소
let person02 = {
    name: "홍길동",
    age: 20,
    gender: "남자"   
}

let str1 = "aaa"
let str2 = "aaa"

console.log("answer => ", person01 === person02) // false
console.log("answer => ", str1 === str2) // true

// 3-6. 객체 병합
let person1 = {
    name: "홍길동",
    age: 20
}

let person2 = {
    gender: "남자"    
}

let perfecMen = {...person1, ...person2}
console.log("perfecMen => " , perfecMen)