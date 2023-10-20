// 구조분해 할당 : destructuring(de + structure + ing)
// de : not
// structure : 구조
// 배열이나 객체의 속성을 분해해서 할당

// (1) 배열의 경우
let [value1, value2] = [1, "new"]
console.log(value1)
console.log(value2)

let arr = ["value1", "value2", "value3"]
let [a,b,c,d=45] = arr

console.log(a)
console.log(b)
console.log(c)
console.log(d)

// (2) 객체인 경우
let{name, age} = {
    name: "abc",
    age: 39
}
console.log(name)
console.log(age)

// 새로운 이름으로 할당
let user = {
    name1: "abc",
    age1: 39
}
let {name: newName, age: mewAge} = user


console.log(newName)
console.log(mewAge)

let{name1, age1, birthday = "today"} = user


console.log(name1)
console.log(age1)
console.log(birthday)






