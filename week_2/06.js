// 배열의 요소로 함수를 할당
const myArr = [
    function(a,b){
        return a + b
    },
    function(a,b){
        return a - b
    }
]
// 더하기
console.log(myArr[0](1,2))

// 빼기
console.log(myArr[1](1,2))
