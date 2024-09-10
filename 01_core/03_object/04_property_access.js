//프로퍼티 접근 방법

let dog = {
    name : "뽀삐",
    eat : function(food){
        console.log(`${this.name}은 ${food}를 맛있게 먹어요 `);
    }

};

console.log(dog.name);
dog.eat("고구마");

dog['eat']("고구마");
console.log(dog['name']);

let obj  = {
    'dish-key' : 'dish-value',
    0:1
}

//식별자 네이밍 규칙.
//허용되는 문자.
//영문자 , 숫자(첫글자는 올 수 없음)
// 예약어는 사용할 수 없음.
//대소문자를 구분함.
//카멜케이스로 작성함.
console.log(obj['dish-key']);

console.log(obj[0]);
console.log(obj['0']);
//console.log(obj.0);

