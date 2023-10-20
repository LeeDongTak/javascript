// 상속(Inheritance)
// Class -> 유산으로 내려주는 주요기능
// 부모 <-> 자식

// 동물 전체에 대한 클레스
class Animal{
    constructor(name){
        this.name = name
    }

    // 매서드 (짖다)
    speak(){
        console.log(`${this.name}, says!`)
    }

}

class Dog extends Animal {
    // 부모에게서 내려받은 메서드를 재정의 할 수 있다. 
    // overriding....
    speak(){
        console.log(`${this.name}, barks!`)
    }
}

let newDogs = new Dog('일억이');
newDogs.speak()


