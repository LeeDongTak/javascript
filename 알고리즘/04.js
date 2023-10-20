// 문자열 섞기

function solution(str1, str2) {
    var answer = [];
    let arrstr1 = str1.split("");
    let arrstr2 = str2.split("");
    for (let i = 0; i < str1.length; i++) {
        answer[i] = arrstr1[i] + arrstr2[i] 
    }
    let result = answer.join('')
    return result;
}

let str1 = 'aaaa'
let str2 = 'bbbb'

console.log(solution(str1,str2))


