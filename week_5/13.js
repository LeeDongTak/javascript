// 카운트 상태 변경 함수 #2
const increase = function () {
    // 카운트 상태 변수
    let num = 0;
  
    // 카운트 상태를 1만큼 증가시킨다.
    return ++num;
  };
  
  // 이전 상태값을 유지 못함
  console.log(increase()); //1
  console.log(increase()); //1
  console.log(increase()); //1

[리뷰]
// 1. num 변수는 increase함수의 지역변수로 선언 -> 변경은 방지
//   = num 변수는 오직 increase 함수만이 변경할 수 있었음
// 2. 하지만 increase가 호출될 때 마다 num이 초기화 되는 이상한 변수
// 백번, 천번, 만번 호출해도 출력값은 1
// * 의도치 않은 변경은 방지하면서 + 이전 상태를 유지해야 함



