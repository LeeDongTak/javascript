// Getters, Setters
// 객체지향 프로그래밍 언어 -> G S
// 클레스 --> 객체(인스턴스)
// 프로퍼티(constructor)
// new Class(a,b,c)

class Rectangle {
    constructor(width, height){
        this._width = width
        this._height = height
    }

    // width 롤 위한 getter
    get width(){
        return this._width
    }

    // width 롤 위한 setter
    set width(value) {
        // 검증 1 : value가 음수면 오류
        if (value <= 0) {
            console.log("[오류] 가로길이는 0보다 커야 합니다. ")
        }else if (typeof value !== 'number') {
            console.log("[오류] 가로길이는 숫자타입이 아닙니다 . ")
        }
        this._width = value
    }
    
    // height 롤 위한 getter
    get height(){
        return this._height
    }

    // height 롤 위한 setter
    set height(value) {
         // 검증 1 : value가 음수면 오류
         if (value <= 0) {
            console.log("[오류] 세로길이는 0보다 커야 합니다. ")
        }else if (typeof value !== 'number') {
            console.log("[오류] 세로길이는 숫자타입이 아닙니다 . ")
        }
        this._height = value
    }

    // getArea : 가로 + 세로 => 넓이
    getArea(){
        let a = this._width + this._height
        console.log(`넓이는 ${a}입니다 .`)
    }

}

// instance 생성
let rectangle1 = new Rectangle(10,20)
let rectangle2 = new Rectangle(10,30)
let rectangle3 = new Rectangle(15,20)

rectangle1.getArea()
