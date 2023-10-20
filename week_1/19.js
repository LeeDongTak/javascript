// 숙제 1
function solution(s) {
    let answer = true;
    if (s.length <= 50 && !Number(s)) {
        let str = s.split("")
        let strP = str.filter((item) => {
            return item === "p" || item === "P"
        })
        let strY = str.filter((item) => {
            return item === "y" || item === "Y"
        })
        if (strP.length === strY.length) {
            answer = true
        } else {
            answer = false
        }
    }else{
        return false
    }

    return answer;
}

let str1 = "pPoooyY" // true
let str2 = "Pyy"     // false


console.log(solution(str1))









