const x = 1;

// 1
function outer() {
  const x = 10;
  const inner = function(){
    console.log(x)
  }
  return inner
}

// outer함수를 '실행'해서, innerFunc에 담죠
// 실행해서 담는다 -> outer함수의 return부분을 innerFunc에 담는다.
const innerFunc = outer()
innerFunc()