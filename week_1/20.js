// 숙제 2

function solution(absolutes, signs) {
    let answer = 0
    if (absolutes.length <= 1000 && absolutes.length === signs.length) {
        for (let i = 0; i < absolutes.length; i++) {
            signs[i] ? answer += absolutes[i] : answer -= absolutes[i]
        }
    }
    return answer
}

let arr1 = [1, 12, 3]
let arr2 = [true, false, false]

console.log(solution(arr1, arr2))

