// 무슨 제어권? 2번째
// 2. 인자에 대한 제어권을 갖는다. 
// Map함수 입니다. 

let newArr = [10,20,30].map((currentValue, index)=>{
    console.log(currentValue,index)
    return currentValue + 5
})

 
console.log(newArr)