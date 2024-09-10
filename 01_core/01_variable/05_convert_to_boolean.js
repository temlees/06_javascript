//불리언 타입으로 형변환

console.log("====불리언 타입으로 변환====");

/*
자바스크립트 엔진은 불리언 타입이 아닌 값을 Truthy Falsy 로 구분한다.
Truthy : 참으로 평가되는 값 Falsy : 거짓으로 평가되는 값
Truthy - > true, Falsy -> false 로 암묵적 형변환
*/
if(true) console.log("if(true)");
//if(false) console.log("if(false)");
if('') console.log("if('')"); 
if('javascript') console.log("if('javascript')");
if(null) console.log("if(undefined)");
if(undefined) console.log("if(undefined)");

//false, undefined , null , 0, '' 은 Falsy값이며
// 그 외의 값들은 truthy

