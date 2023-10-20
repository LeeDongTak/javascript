// 2. 문자 : (문자열 : 문자의 나열)
// '' =""
let str =  "Hello World!"
console.log(str)
console.log(typeof(str))

// 2-1 문자열 길이 확인 하기
console.log(str.length)

// 2-2 문자열 결합하기
let str1 = "Hello "
let str2 = "World!"
let result = str1.concat(str2)
console.log(result)

// 2-3 문자열 자르기
let str3 = "Hello, World!"
console.log(str3.substr(7,5)) // 문자열의 7번째 부터 시작하여 5번째까지의 문자열 출력
console.log(str3.slice(7,12)) // 문자열의 7변째 부터 12번째 까지의 문자열 출력

// 2-4 문자열 검색
let str4 = "Hello, World!"
console.log(str4.search("World!"))

// 문자열 대체 
let str5 = "Hello, World!"
let result1 = str5.replace("World", "javascript");
console.log(result1)

// 문자열 분할
let str6 = "apple, banana, kiwi"
let result2 = str6.split("")
console.log(result2)
