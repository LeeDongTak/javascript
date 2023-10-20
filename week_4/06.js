// obj
// 2가지 속성
let obj = {
    vals: [1,2,3],
    logValues: function(v, i){
        console.log("test start")
        if(this == global){
            console.log("This가 global입니다. ")
        }else{
            console.log(this, v, i)
        }
        console.log("test end")
    }
}

// method로써 호출
// obj.logValues(1,2);

[4,5,6].forEach(obj.logValues);



