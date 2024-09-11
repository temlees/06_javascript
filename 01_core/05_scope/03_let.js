// let
// var 키워드의 단점을 보완하고자 es6에서는 
//새로운 변수 선언 키워드인 let을 도입했다..


//1. 변수 중복 선언 금지
let msg = "안녕하세요";

//let 이나 const로 선언된 변수는 같은 스코프내에서 중복허용x
//let msg 
//2. 블록 레벨 스코프
//let키워드로 선언한 변수는 모든 코드 블럭
//(함수, if,for,while,try)등을 지역 스코프로 인정한다.
let i =0;
for(let i = 0; i<10; i++){
    console.log(`지역변수  i :${i}`);
}
console.log(`전역변수  i :${i}`);

//3. 변수 호이스팅
//let 키워드로 선언한 변수는 변수 호이스팅이 발생하지 않은 것 처럼 보인다
//하지만 발생하지 않은 것은 아니다.
//초기화가 되지않아서 오류
//console.log(x);
let x;

let y = 1;
if(true){
    console.log(y);
    let y = 2;
}