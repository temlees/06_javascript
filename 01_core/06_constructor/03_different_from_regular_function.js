//일반 함수와 다른점
function Student(name,age){
    this.name =name;
    this.age=age;
    this.getInfo = function(){
        return`${this.name}은${this.age}세 입니다`
    }
}

//일반함수와 생성자함수의 특별한 형식적 타이는 없다
//new 연산자와 함께 호출하면 생성자 함수로 동작
//만약new 연산자와 함께 호출안하면  일반함수로 동작
//함수 반환값이 없다 new안쓰면 일반함수
const student = Student("강감찬",35);
console.log(student);
console.log(age);

//es6 에서는 new .target을 지원한다
//생성자 함수가 new 없이 호출되는것을 방지하기 위해

function Dog(name,age){

    //new 안붙으면 undefined
    if(!new.target){
        return new Dog(name,age);
    }

    this.name =name;
    this.age=age;
}

//대부분의 빌트인 생성자 함수(Object,String,Number..)은
//new 연산자와 함께 호출되었는지 확인후 적절히 반환

const obj = Object();
console.log(obj);