// 무슨 제어권?
// 1. 호출 시점에 대한 제아권
// setInterval : 반복해서 매개변수로 받은 콜백함수의 로직을 수행
let count = 0
let cdFunc = () => {
    console.log(count)
    if(++count > 4) clearInterval(timer)
}

let timer = setInterval(cdFunc, 300);
