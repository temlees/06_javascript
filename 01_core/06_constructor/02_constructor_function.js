//생성자 함수



//생성자함수에 의한 객체 생성
//객체를 생성하기 위한 템플릿 처럼 생성자 함수를 사용하여
//프로퍼티 구조가 동일한 객체 여러 개를 간편하게 생성할 수 있다
function Student(name,age){
    this.name =name;
    this.age=age;
    this.getInfo = function(){
        return`${this.name}은${this.age}세 입니다`
    }
}

const student3 = new Student("장보고",30);
const student4 = new Student("홍길동",20);

console.log(student3.getInfo());
console.log(student4.getInfo());

class test{
    constructor(name,age,getInfo){
        this.name =name;
        this.age=age;
        this.getInfo = getInfo;
    }
}

const student5 = new test("이순신", 30,function(){});
console.log(student5);