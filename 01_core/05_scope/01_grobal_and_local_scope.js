//전역 스코프와 지역 스코프

/*
    전역은 코드이 가장 바깥 영역을 말하며 전역은 전역 스코프를 만든다
    전역에 변수를 선언하면 전역 스코프를 갖는 전역변수가 되며
    전역 변수는 어디서든지 참조 할 수 있다
    지역이란 함수 몸체 내부를 말하며 지역은 지역 스코프를 만듦
    지역에 변수를 선언하면 자신의 지역스코프와 하위에서 유효하다..
*/


//전역필드
let x = 'grobal x';
let y = 'grobal y';

function outer(){
    let z = 'outers local z';

    console.log(x);
    console.log(y);
    console.log(z);
    function inner(){
        let x = 'inners local x';
        console.log(x);
        console.log(y);
        console.log(z);
    }
    inner();

}
outer();


//자바, C등 대부분의 프로그래밍 언어는
//함수 몸체 뿐만 아니라 모든 코드 블록{if,for,white,try등}
//이 지역 스코프를 만드는 블록 레벨 스코프를 가진다
//하지만 var 키워드로 선언된 변수는 오로지 함수의 코드 블록만을
//지역 스코프로 인정하는 함수 레벨 스코프를 가진다..
//es6 에 도입된 let키워드는 블록 레벨 스코프를 지원한다..

var i = 0;

for(var i =0; i<10; i++){}
console.log(i);