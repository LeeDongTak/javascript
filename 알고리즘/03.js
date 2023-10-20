//조건에 맞게 수열 변환하기 3



function solution(arr, k) {
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
        answer[i] = k%2 === 1 ? arr[i]*k : arr[i]+k
    }

    return answer;
}

let arr = [1, 2, 3, 100, 99, 98]
let num = 3

console.log(solution(arr, num))
