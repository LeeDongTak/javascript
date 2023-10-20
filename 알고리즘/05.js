// 문자열 겹쳐쓰기

function solution(my_string, overwrite_string, s) {
    let answer = '';
    let str1 = my_string.substr(s,overwrite_string.length)
    answer = my_string.replace(str1, overwrite_string);
    return answer;
}

let str1 = "Program29b8UYP";
let str2 = "merS123";
let num = 7
console.log(solution(str1, str2, num))
console.log(typeof solution(str1, str2, num))



