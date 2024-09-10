//명시적 타입변환
console.log("====문자열 타입으로 변환====");

// 1.string 생성자 함수를 new 없이 호출가능
console.log(String(10));
console.log(String(NaN));
console.log(String(Infinity));
console.log(String(true));

//object.prototype.toString 메소드 사용
console.log((10).toString());
console.log((NaN).toString());
console.log((Infinity).toString());
console.log((true).toString());

