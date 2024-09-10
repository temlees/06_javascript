//객체는 프로퍼티의 집합이며 , 프로퍼티는 키와 값으로 구성된다.

let student = {
    name : "유관순",
    age : 16
};

console.log(student);

let obj = {
    normal : "normal value",
    '@ s p a c e @' : "space value" ,
    "" : "",
    0 : 1,
    var : "var",
    normal : "new normal"
};

//동적인 키값생성
//변수값이 key로 들어간다.
let key2 = "test";
obj[key2] = "test value";


// key 값이 숫자일경우 문자열로 바뀌고 제일 앞으로 나옴 오름차순
//중복된거있으면 제일 마지막걸로 덮어쓴다.
console.log(obj);
