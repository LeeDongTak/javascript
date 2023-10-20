// 클래스 연습 해보기

// [요구사항]
// 1. Car 라는 새로운 클래스를 만들되, 처음 객체를 만들때는 
//     다음 네개의 값이 필수로 입력되야 합니다.!
//     (1) nodelName
//     (2) nodelYear
//     (3) type
//     (4) Price
//     2. makeNoise 메서드를 만들어 클락션을 울려주세요.
//     2-1. 해당 자동차가 몇년도 모델인지 확인하는 메서드 작성
//     3. 이후 자동차 3개정도 만들어 주세요.

// [추가 요구사항]
// 1. nodelName, nodelYear, type, Price를 가져오는 메서드
// 2. nodelName, nodelYear, type, Price를 세팅하는 메서드
// 3. 만든 인스턴스를 통해서 마지막에 set 해서 get하는 로직까지

class Car {
    constructor(modelName, modelYear, type, Price) {
        this._modelName = modelName
        this._modelYear = modelYear
        this._type = type
        this._Price = Price
    }

    makeNoise() {
        console.log(`${this.modelName} 빵!!!!!`)
    }

    // 해당 자동차가 몇년도 모델인지 확인하는 메서드 작성
    printYear() {
        console.log(`${this.modelName}은 ${this.modelYear}년식 입니다. `)
    }

    // modelName
    get modelName() {
        return this._modelName
    }
    set modelName(value) {
        // 유효성겁사
        if (value.length <= 0) {
            console.log("[오류] 입력된 모델명이 없습니다 .")
            return
        } else if (typeof value !== "string") {
            console.log("[오류] 입력된 모델명이 문자형이 아닙니다 .")
            return
        }
        this._modelName = value
    }

    // modelYear
    get modelYear() {
        return this._modelYear
    }
    set modelYear(value) {
        // 유효성겁사
        if (value.length !== 4) {
            console.log("[오류] 입력된 연식이 4자리가 아닙니다. ")
            return
        } else if (typeof value !== "string") {
            console.log("[오류] 입력된 연식이 문자형이 아닙니다 .")
            return
        }
        this._modelYear = value
    }

    // type
    get type() {
        return this._type
    }
    set type(value) {
        // g(가솔린), d(디젤), e(전기차)
        if (value.length <= 0) {
            console.log("[오류] 입력된 타입이 없습니다 .")
            return
        } else if (value != "g" && value != "d" && value != "e") {
            console.log("[오류] 입력된 연식이 4자리가 아닙니다. ")
            return
        }
        this._type = value
    }

    // Price
    get Price() {
        return this._Price
    }
    set Price(value) {
        // 유효성겁사
        if (typeof value !== "number") {
            console.log("[오류] 입력된 가격이 숫자가 아닙니다 .")
            return
        }else if (value <= 1000000) {
            console.log("[오류] 가격은 100만원보다 작을 수 없습니다 .")
            return
        }
        this._Price = value
    }





}

const newCar1 = new Car("sonata", "2018", "g", "3000만원")
const newCar2 = new Car("gv80", "2022", "e", "8500만원")
const newCar3 = new Car("sorento", "2018", "d", "4500만원")

// newCar1.makeNoise()
// newCar2.makeNoise()
// newCar3.makeNoise()

// newCar1.printYear()
// newCar2.printYear()
// newCar3.printYear()

// getter에시
console.log(newCar1.modelName)
// setter에시
newCar1.modelName = 11
console.log(newCar1.modelName)


