// for, while => ~동안 : 반복문
// for (초기값; 조건문; 증감식) {
// }

// i라는 변수는 0부터 시작할거야!
// i라는 변수가 10에 도달하기 전까지 계속할거야!
// i라는 변수는 한 사이클을 돌고 나면 1을 더할거야!
// for (let i = 0; i < 10; i++){
//     console.log("FOR문 돌아가고 있음 => " + i)  
// }

// 배열과 for문은 짝꿍이다
const arr = ["one", "twe", "three", "four", "five"]
for (let i = 0; i < arr.length; i++) {
    console.log(i)    
    console.log(arr[i])    
}


for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

// for ~ in문
let person = {
    name: "john",
    age: 20,
    gender: "male"
}

for (key in person) {
    console.log(key + ":" + person[key])
}



