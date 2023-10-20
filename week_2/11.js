// 숙제
// function solution(strings, n) {
//     let str = strings;
//     for(let i = 0; i < str.length; i++){
//         str[i] = str[i][n] += str[i]
//     }
//     str.sort()
//      for (let k = 0; k < str.length; k++) {
//         str[k] = str[k].replace(str[k][0],"")

//     }
//     return str;

// }

function solution(strings, n) {
    let str = strings;
    for (let k = 0; k < str.length; k++) {
        str[k] = str[k].replace(str[k][0], "")

    }
    return str[0][n]
}






let arr = ['car', 'apple', 'sun']
let num = 0



console.log(solution(arr, num))