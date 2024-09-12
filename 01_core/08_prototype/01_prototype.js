// 프로토 타입

/*
    모든 객체는 자신의 부모 객체로 연결되는
    프로퍼티인 [prototype]을 가지고 있다
    이 때 상속을 받는 부모 객체를 프로토 타입 이라고 한다
    객체가 특정 프로퍼티난 메소드를 찾을 때 먹ㄴ저 그 객체에서 찾고
    없으면 객체의 프로토 타입에서 찾는다
    프로토타입이 또다른 프로토 타입을 가지며 부모 객체를 따라 올라가고 프로토 타입인 체인이 형성된다.

*/

const obj = {};
console.log(obj.toString());
//object가 toString을 가지고 있는지 체크 true
console.log(Object.prototype.hasOwnProperty("toString"));

const obj2= {
    toString(){
        return "custom toString";
    }
}
console.log(obj2.toString());


//object.create 를 이용한 상속

const user = {
    greet(){
        console.log(`안녕, ${this.name}`);
    }
    
};

const student = Object.create(user);
student.name = "홍길동";
student.study = function(){
    console.log(`${this.name}은 공부중이야`);
}
student.greet();
student.study();

//상속
class User{
    constructor(name){
        this.name = name;
    }
    greet(){
        console.log(`안녕하세요 ${this.name}입니다`)
    }
}
class Student extends User{
    constructor(name,grade){
        super(name);
        this.grade = grade;
    }
    study(){
        console.log(`${this.name}님은 ${this.grade}학년에서 공부중`)
    }
}
const student1 = new Student("홍길동",3);
student1.greet();
student1.study();

