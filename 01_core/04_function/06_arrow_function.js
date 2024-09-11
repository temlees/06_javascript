//ES6에서 도입된 화살표 함수는 function키워드 대신
//화살표를 사용해 좀더 간략한 방법으로 함수를 선언할 수 있다.
//화살표 함수는 익명함수로 정의 한다. 본문이 한줄인 함수를 작성할 때
//유용하다

let message;

//기존 function
message = function() {
    return "hello world"
}
console.log(message());

//function키워드 생략가능
message = () =>{
    return "Array Function";
}
console.log(message());

//명령문이 하나만 있을 경우 중괄호 생략가능
message = ()=>"Array Function are Simple";
//이 때 함수 몸체 내부의 문의 값으로 평가 될 수 있으면 암묵적으로 변환
console.log(message());

//매개변수가 있는 경우
message = (val1, val2) => `Arow${val1}${val2}`//"AROW"+val1 + val2;
console.log(message("function","!"));

//매개변수가 하나면(한개일 때) 소괄호 생략 가능
message = val =>"Arow"+val;
console.log(message("function!!"));

//구조 분해 할당
//{}가 매개변수로 들어오면 해당 키값을 찾음
let obj={
    a : "test",
    b: "value"
}
const test = ({a,b}) =>`hi ${a}+${b}`;
console.log(test(obj));
