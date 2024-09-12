//매개변수와 전달인자

function hello(name){
    //매개변수는 함수 내부에서만 참조가능
    console.log(name);
    //모든인자는 암묵적으로 arguments객체의 프로퍼티로 보관한다
console.log(arguments);
return`${name}님 안녕하세요!`;
}
//console.log(hello("뽀삐"));

let result = hello("홍길동");
console.log(result);


//함수는 매개변수의 갯수와 인자의 갯수가 일치하지 않는지 체크하지 않는다.
//인수가 부족해서 할당되지 않은 매개변수의 값은 undifined이다.
result = hello();
console.log(result);

//매개변수보다 인수가 더 많은 경우 초과된 인수는 무시한다.
//모든 인수는 암묵적으로 rguments객체의 프로퍼티로 보관한다

result = hello("홍길동","유관순");
console.log(result);

//인수를 전달하지 않았을 경우, undefined를 전달하였을 경우
//ES6에서 도입된 매개변수 기본값을 사용할 수 있다(default).

//typeof 에 '타입' 으로 감싸줘야한다.
function hi(name = "아무개"){
    if(arguments.length !== 1 || typeof name !== 'string' || name.length ===0){
        throw new TypeError(`인수는 1개여야하고 문자열이 빈문자열을 허용하지 않습니다`)
    }
    return`${name}안녕`;
}

result = hi("뽀삐");
console.log(result);