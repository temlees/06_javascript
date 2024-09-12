//빌트인 전역 함수

//isFinite
//전달받은 인수가 정삭적인 유한수인지 검사하는 함수
//유한수이면 true,무한 수이면 false(NaN도 false)
console.log(isFinite(10)); //TRUE
//숫자형이 아니면 타입변환 후 실행
console.log(isFinite('10')); //TRUE
console.log(isFinite(null));//TRUE
console.log(isFinite(Infinity));//False
console.log(isFinite(NaN)); //False
console.log(isFinite("ABC"));//False
console.log("-----------");

//isNaN
//전달받은 인자가 NaN인지 검사
//숫자아니면 타입변환후 실행
console.log(isNaN(NaN)); //TRUE
console.log(isNaN(undefined)); //TRUE
console.log(isNaN(10)); //False
console.log(isNaN(""));//False  빈문자열 0
console.log(isNaN('10'));//False
console.log(isNaN(true));//False (숫자 1  false면 0 )
console.log("-----------");


//paseFloat
console.log(parseFloat("10.01")); 
//공백으로 구분 된 문자열은 첫 번째만 반환
console.log(parseFloat("10 20 30")); // 10
//숫자가 아닌 문자열은 제외하고 반환
console.log(parseFloat("10cm"));  // 10

//앞뒤 공백은 무시한다.
console.log(parseFloat("  10.01   ")); // 10.01

//encodeURI
//URI를 문자열로 전달받아 어떤 시스템에서도 읽을 수 있게 변환
const uri = "https://greedy.com?name=홍길동&job=student";
const enc = encodeURI(uri);
console.log(enc);

//decodeURI
//인코딩된 URI를 처리 이전으로 디코딩
const dec = decodeURI(enc);
console.log(dec);






