

function print(person){
    console.log(person.name)
    console.log(person.age)
}

//자바스크립트에서는 클래스가 없어도 {}를 이용하여 오브젝트를 생성할 수 있다
//오브젝트(객체)는 key와 value의 집합체이다.

//오브젝트 생성 방법 1  {}이용한 생성=> object literal
//   key : name ,value : jinwoo
const jinwoo = {name:"jinwoo", age:5}
// 오브젝트 생성 방법 2  => object constructor
const jinwoo2 = new Object();
jinwoo2.name="jinwoo"
jinwoo2.age=5;

print(jinwoo);
print(jinwoo2)


//오브젝트의 properties에 접근방법 2가지
console.log(jinwoo.name);

//2. Computed properties
//key는 string타입으로 지정해서 받아와야한다.
console.log(jinwoo['name']);