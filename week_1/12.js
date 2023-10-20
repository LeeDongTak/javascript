let age = 20
let gender = "여성"

// 미성년자 구분
if (age >= 18) {
    console.log("성인입니다. ")
    if (age === "여성") {
        console.log("성인여성입니다. ")
    } else {
        console.log("성인남성입니다. ")
    }
} else {
    console.log("미성년자 입니다.")
}