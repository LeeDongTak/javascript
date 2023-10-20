// 클래스라는 설게도를 만들어 봅시다.

class Person {
    // 사람이기 때문에 필수요소
    // name, age
    constructor (name, age) {
        this.name = name
        this.age = age
    }

    // 메서드 형태의 동사표현
    sayHello() {
        console.log(`${this.name}님 안녕하세요`)
    }
    // 내나이는 ~~~살이에요 라는 메서드 만들기
     printMyAge (){
        console.log(`${this.name}나이는 ${this.age}살 입니다. `)
     }
}

//  설계도를 통해 인스턴스를(실제 사물) 만들어 봅시다 
// 이름은 홍길동 이고 나이는 30살인 사람하나를 만돌여줘 (설계도에 근거해서)
const person1 = new Person("홍길동", "30") 
const person2 = new Person("홍길순", "25") 

person1.sayHello()
person2.sayHello()

person1.printMyAge();
person2.printMyAge();
