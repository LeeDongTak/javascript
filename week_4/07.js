// 콜백함수 내부의 this에 다른 값 바인딩 하기
// 콜백 함수 내부에서 this가 문맥에 맞는 객체를 바라보게 할 수는 없을까요?
// 콜백 함수 내부의 this에 다른 값을 바인딩 하는 방법

// 결과만을 위한 코딩 => 하드코딩... 완전 10/100점짜리 코딩
// let obj1 = {
//     name: "obj1",
//     func: function () {
//         console.log(obj1.name)
//     }
// }

// closure 방식
let obj1 = {
    name: "obj1",
    func: function() {
        let self = this;
        return function () {
            console.log(self.name)
        }
    }
}

// let obj2 = {
//     name: "obj2",
//     func: obj1.func
// }

// let callback2 = obj2.func()

let obj3 = {name: "obj3"}
let callback3 = obj1.func.call(obj3)


setTimeout(callback3, 1000);






