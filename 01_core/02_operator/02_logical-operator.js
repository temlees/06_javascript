//논리 연산자
// || , && , !

//OR , AND 연산자 표현식의 결과가 때로는 불리언이 아닐 수 있다.

console.log('apple' || 'banana');
console.log(false ||'banana');

console.log('apple' && 'banana');
console.log(false && 'banana');
//falsy와 만나면 결과출력이 안나온다.
console.log('' && 'banana');

let num = 1;

if(num % 2 ==0 ){
    console.log("짝수입니다");
}else{
    console.log("홀수입니다");
}


//false가 나옴 
num % 2 ==0 && console.log("짝수입니다");

num % 2 ==0 || console.log("홀수입니다");

