//비교 연산자
// 좌향과 우향의 비교 연산자를 비교한 다음 그 결과를 불이언 값으로 변환한다.
//if문이나 for문과 같은 제어문의 조건식에서 주로 사용한다.

/*
 *동등비교 / 일치비교
 동등비교 :  (==  ,!=)연산자는 먼저 암묵적 타입 변환을통해 일치시킨 후 같은 값인지 비교한다
 일치비교 : (===, !==) 연산자는 타입과 값이 모두 일치하는지 비교
 */
//(백틱, Backtick)은 JavaScript에서 템플릿 리터럴을 정의할 때 사용하는 기호입니다.
//템플릿 리터럴은 문자열을 보다 유연하게 다룰 수 있게 해 주며, 
//여러 줄 문자열, 문자열 내 변수 및 표현식 삽입 등을 가능하게 합니다.

 //숫자 1 문자 '1' true 비교
 console.log(1=='1');
 console.log(1==='1');
console.log(`1=='1' : ${1=='1'}`);
console.log(`1==true : ${1==true}`);
console.log(`1==='1' : ${1==='1'}`);
console.log(`1===true : ${1===true}`);

//숫자 0  문자'0' 빈 문자열 '', false 비교
console.log(`0=='0' : ${0=='0'}`);
console.log(`0=='' : ${0==''}`);
console.log(`0== false : ${0==false}`);
console.log(`0==='0' : ${0==='0'}`);
console.log(`0==='' : ${0===''}`);
console.log(`0=== false : ${0===false}`);

//null , undefined 비교
console.log(`null == undefined : ${null == undefined}`);
console.log(`null === undefined : ${null === undefined}`);

//NaN는 자신과 일치하지 않는 유일한 값
console.log(`NaN == NaN : ${NaN == NaN}`);
console.log(`NaN === NaN : ${NaN === NaN}`);

console.log(`Number.isNaN(NaN): ${Number.isNaN(NaN)}`);

//문자열끼리도 비교가 가능하다.
console.log(`hello === hello : ${'hello'==='hello'}`);
console.log(`hello !== hello : ${'hello'!=='hello'}`);

//대소 비교
//문자끼리 대소비교는 아스키코드
console.log(`apple < banana : ${'apple'<'banana'}`);
console.log(`cat < Zoo : ${'cat'<'Zoo'}`);




