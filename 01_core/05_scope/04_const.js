//const
//상수를 선언하기 위해 사용
//변수 호이스팅이 발생하지 않는것처럼 동작한다.
//아래에서는 ler키워드와 다른점을 중심으로 살펴본다..

//const 키워드는 선언과 동시에 초기화 해야한다.
const x =1;

//재할당이 금지된다
// x= 2;

//일반적으로 상수의 이름은 대문자로 선언하고
//스네이크 케이스로 표현한다.

//할인율
const DISCOUNT_RATE =0.15;
//정가
let price =15000;
//할인가
//let discoutnPrice = price *(1-DISCOUNT_RATE);
//HTMLFormControlsCollection.console.log(discoutnPrice);

//const키워드로 선언된 변수에 객체를 할당하면 값을 변경할 수 있다
//객체안의 내용은 상관없다
const student={
    name : "홍길동",
    age : 20
}
student.name="유관순";
console.log(student);

/**
 * 전역변수의 문제점
 * 1.모든 코드가 지역변수를 참조하고 변경할 수있는
 * 암묵적 결함을 허용한다 변수의 스코프 적을수록 좋음
 * 
 */


