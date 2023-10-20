//조건에 맞게 수열 변환하기 1

function solution(arr) {
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] >= 50 && arr[i] % 2 === 0){
            answer[i] = arr[i]/2
        }else if(arr[i] < 50 && arr[i] % 2 === 1){
            answer[i] = arr[i]*2
        }else{
            answer[i] = arr[i]
        }
    }

    return answer;
}

let arr = [1, 2, 3, 100, 99, 98]

console.log(solution(arr))