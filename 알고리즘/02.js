//조건에 맞게 수열 변환하기 2

function solution(arr) {
    let answer = 0;
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] >= 50 && arr[i] % 2 === 0){
            arr1[i] = arr[i]/2
        }else if(arr[i] < 50 && arr[i] % 2 === 1){
            arr1[i] = arr[i]*2+1
        }else{
            arr1[i] = arr[i]
        }
    }

    return arr1;
}

let arr = [1, 2, 3, 100, 99, 98]

console.log(solution(arr))



