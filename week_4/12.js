// refactoring
// re - 다시
// factoring
// 비효율적인 코드를 효율적인 코드로 변경하는 작업

let addCoffee = function (name) {
    return function (preName) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                // 백틱
                var mewName = preName ? `${preName}, ${name}` : name;
                console.log(mewName);
                resolve(mewName);
            }, 500)
        })
    }
}

addCoffee("에스프레소")()
.then(addCoffee("아메리카노"))
.then(addCoffee("카페모카"))
.then(addCoffee("카페리떼"))