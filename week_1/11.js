// 문(if,else if, else, switch)
// 1. if문
let x = 10

// 1-1
if (x > 0) {
    console.log("x는 양수입니다. ")
}

// 1-2
let y = "hello world"

if (y.length >= 5) {
    console.log(y.length)
}

// 1-3. if - else문
let xx = -3
if (xx > 0) {
    console.log("x는 양수입니다.")
} else {
    console.log("x는 음수입니다.")
}

// if - else if - else문
let xxx = 5
if (xxx < 0) {
    console.log("1")
} else if (xxx >= 0 && xxx < 10) {
    console.log("2")
} else {
    console.log("3")
}

// 1-4 switch
// 변수의 값에따라, 여러개의 경우(case) 중 하나를 선택
// default
let frult = "바나ㅇㄹ나"

switch (frult) {
    case "사과":
        console.log("사과입니다.")
        break;
    case "바나나":
        console.log("바나나입니다.")
        break;
    case "키위":
        console.log("키위입니다.")
        break;
    default:
        console.log("아무것도아닙니다.")
        break;
}



