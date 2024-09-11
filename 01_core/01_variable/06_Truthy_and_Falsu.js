//자바스크립트 엔진은 블리언 타입이 아닌값을 truthy falsy 로 구분한다
//암묵적인 타입변환이 일어난다

let test1; 
console.log(test1); // undefined가 나옴 =>undefined는 falsy  
console.log(!!test1);  // !!두번 붙어서 falsy가 나옴

//객체 리터럴  클래스의 멤버(필드)생각하면 편함
let test = {
    a : null,
    b : 0,
    fun(){
        console.log("testtest");
    }
};

// 0은 falsy 값이다. 그래서 false
//test가 null인지 확인
if(test?.b){
    console.log("true");
}else{
    console.log("false");
}

//avaScript에서 0은 Falsy 값이므로

test.fun();
console.log(test.fun());//호출할때 리턴값이 없어서 undefined도 같이 나온다

test?.b ? console.log(true) : console.log(false);