// 클래스 연습 해보기

// [요구사항]
// 1. Car 라는 새로운 클래스를 만들되, 처음 객체를 만들때는 
//     다음 네개의 값이 필수로 입력되야 합니다.!
//     (1) nodelName
//     (2) nodelYear
//     (3) type
//     (4) Price
//     2. makeNoise 메서드를 만들어 클락션을 울려주세요.
    // 2-1. 해당 자동차가 몇년도 모델인지 확인하는 메서드 작성
//     3. 이후 자동차 3개정도 만들어 주세요.


class Car {
    constructor(nodelName, nodelYear, type, Price) {
        this.nodelName = nodelName
        this.nodelYear = nodelYear
        this.type = type
        this.Price = Price
    }

    makeNoise() {
        console.log(`${this.nodelName} 빵!!!!!`)
    }

    // 해당 자동차가 몇년도 모델인지 확인하는 메서드 작성
    printYear() {
        console.log(`${this.nodelName}은 ${this.nodelYear}년식 입니다. `)
    }
}

const newCar1 = new Car("sonata", "2018", "g", "3000만원")
const newCar2 = new Car("gv80", "2022", "e", "8500만원")
const newCar3 = new Car("sorento", "2018", "d", "4500만원")

newCar1.makeNoise()
newCar2.makeNoise()
newCar3.makeNoise()

newCar1.printYear()
newCar2.printYear()
newCar3.printYear()


