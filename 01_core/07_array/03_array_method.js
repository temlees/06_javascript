//배열 메소드

const arr = [];

//new 생략가능 build in
const arr2 = Array();

//indexof : 배열에서 요소가  위치한 인덱스 리턴
//lastIndexOf : 마지막 인덱스 리턴
//includes : 해당요소 포함 여부 리턴

const foodList = ["물회","삼계탕","냉면","수박","물회"]

console.log(`foodList.indexOf("물회"): ${foodList.indexOf("물회")}`);

//1번부터 탐색.
console.log(`foodList.indexOf("물회",1): ${foodList.indexOf("물회",1)}`);

//삼겹살이 존재하지 않기 떄문에 -1 
console.log(`foodList.indexOf("삼겹살"): ${foodList.indexOf("삼겹살")}`);

console.log(`foodList.lastIndexOf("물회"): ${foodList.lastIndexOf("물회")}`);

//1번 인덱스까지 탐색
console.log(`foodList.lastIndexOf("물회",1): ${foodList.lastIndexOf("물회",1)}`);


console.log(foodList.includes("수박"));
console.log(foodList.includes("김치"));

//.push  : 배열의 맨 뒤에 요소 추가
//.pop : 배열의 맨 반환 후 뒤요소 제거

const chineseFood = ["짜장면", "짬뽕", "탕수육"];

console.log(`push 전 chineseFood :${chineseFood}`);
chineseFood.push('베이징덕');
chineseFood.push('팔보채');
console.log(`push 후 chineseFood :${chineseFood}`);

console.log(`pop() : ${chineseFood.pop()}`);
console.log(`pop() : ${chineseFood.pop()}`);
console.log(`pop() : ${chineseFood.pop()}`);
console.log(`pop 후 chineseFood :${chineseFood}`);

//unshiht : 배열의 맨 앞에 요소 추가
//shift : 배열의 맨 앞 요소 반환 후 제거

chineseFood.unshift("탕수육");
chineseFood.unshift("칠리새우");
console.log(`unshift 후 chineseFood :${chineseFood}`);

console.log(`shift() : ${chineseFood.shift()}`);
console.log(`shift() : ${chineseFood.shift()}`);
console.log(`shift 후 chineseFood :${chineseFood}`);

//concat : 두 개 이상의 배열을 결합
const idol1 =['아이브','에스파'];
const idol2 =['뉴진스','르세라핌'];
const ido3 =['핑클','ses'];

const mix = idol1.concat(idol2);
console.log(mix);

const mix2 = ido3.concat(idol1,idol2);
console.log(mix2);

//slice : 배열의 요소 선택 잘라내기
//splice : 배열의 index 위치 요소 제거 후  추가

const front = ["html","css","javascript","jQuery"];
//slice(시작인덱스, 종료인덱스)
console.log(`front.slice(1,3) : ${front.slice(1,3)}`);
console.log(front);

//splice(인덱스,제거수,추가값1 , 추가값2..)
console.log(`front.splice(3,0,react) : ${front.splice(3,0,'react')}`);
console.log(front);

console.log(`front.splice(4,1,"flutter") : ${front.splice(4,1,'flutter')}`);
console.log(front);

//join : 배열을 구분자로 결합하여 문자열로 반환
const snackList = ["사탕","초콜릿","껌","과자"];
console.log(`snackList.join() : ${snackList.join()}`);
console.log(`snackList.join("/) : ${snackList.join("/")}`);

//reverse : 배열의 순서를 뒤집음
console.log(`[1,2,3,4,5].reverse : ${[1,2,3,4,5].reverse()}`)


//배열 정렬 기준
let numbers = [];

for(let i = 0; i<10; i++){
    numbers[i] =  Math.floor(Math.random() *100)+1;
}
console.log(`정렬전 numbers : ${numbers}`);


//자바스크립트 기본정렬은 문자열 정렬로 앞자리 기준으로 
numbers.sort();
console.log(`정렬 후 numbers : ${numbers}`);
//배열은 기본적으로 문자열 정렬이 되므로 한자리수 두자리수가 올바르지않게
//정렬되는 모습을 획인할 수 있음
//다른 정렬 기준을  사용하려면 매개변수로 compare 함수 전달

function compare(a,b){
    if(a>b) return 1;
    if(a==b)return 0;
    if(a<b) return -1;
}

// numbers.sort(compare);
// console.log("매개변수로 compare전달 후 숫자 오름차순 정렬");
// console.log(numbers);

numbers.sort((a,b)=>a-b);  // a-b가 양수면 sort가 자체적으로 순서를 바꾼다
console.log(numbers);


