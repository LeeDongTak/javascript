// 더 크게 합치기

function solution(a, b) {
    let answer = 0;
    let strA = String(a)+String(b)
    let strB = String(b)+String(a)
    if (Number(strA) > Number(strB)) {
        answer += Number(strA)
    }else{
        answer += Number(strB)
    }
    return answer;
}

console.log(solution(31, 12))