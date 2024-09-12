//함수 호이스팅
//함수선언문이 밑에있어도  가장먼저 실행된다.

// console.log(hello);
// console.log(hi);

//  console.log(hello("홍길동"));
//  console.log(hi("홍길동"));

//  //함수선언문
// function hello(name){
//     return`${name}님 안녕하세요`;
// }

// //함수표현식
// //let 은 함수호이스팅을 막는다.
// let hi = function(name){
//     return`${name}님 안녕하세요`;
// }

/**
 * 함수 선언문은 런타임 이전 자바스크립트 엔진에 의해 먼저 실행된다
 * 따라서 함수선언문 이전에 함수를 참조할 수 있으면 호출할 수 도 있다
 * 함수 선언문이 코드의 선두로 끌어 올려진 것 처럼 작동하는
 * 자바스크립트 고유의 특징을 함수 호이스팅이라고 한다.
 */

test();

function test(){
    console.log("이거랑")
}

function test(){
    console.log("이거중에 어떤게 실행되나 ?");
}

console.log("------------------------");

// var 를 사용할 때 함수 표현식의 문제점
//변수는 가져오지만
//몸체가 없기때문에 undefined
//var은 중복허용
//따라서 let을 씀
console.log(funTest);


var funTest =()=>{
    console.log("1");
}
funTest();

var funTest = () => {
    console.log('2');
}

funTest();

let funTest = () => {
    console.log('2');
}

funTest();