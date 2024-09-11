// in 연산자

//프로퍼티 존재여부 확인
//for문과 함께 객체 내부 키 순회

let student = {
    name : "유관순",
    age : 16,
    test : undefined

}

console.log('name' in student);
console.log("age" in student);
console.log("test" in student);
console.log("height" in student);

//for in 반복문
//이 부분은 student 객체의 모든 열거 가능한 속성 키를 key 변수에 순차적으로 할당하면서 반복합니다.
for(let key in student){
    console.log(`key : ${key}`);
    console.log(`student[key] : ${student[key]}`);
    
}


