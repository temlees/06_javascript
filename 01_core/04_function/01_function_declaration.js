// 함수 선언문

// 함수 선언문에서는 함수의 이름을 생략할 수 없다..
// 암묵적인 식별자생성
function hello(name){
    return`${name}님 안녕하세요`;
}
//함수호출
//보이지는 않지만 식별자를 호출
console.log(hello("홍길동"));