//중첩 함수
//함수 내부에 정의된 함수를 중첩 함수 또는 내부 함수라고 한다.
//중첩 함수를 포합하는 함수는 외부함수라고 한다

function outer(){
    let outerVal="외부함수";

    function inner(){
        let innerVal="내부함수";
        //내부에서는 외부함수 가져올 수 있음
        console.log(outerVal, innerVal);
    }
    inner();
}

outer();