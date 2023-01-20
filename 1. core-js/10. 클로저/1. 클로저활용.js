
// // 카운팅 변수
// let num = 0; // 전역 변수

// // 카운트 숫자 상태 변경 함수
// const increase = () => ++num;

// console.log(increase()); // 1

// num = 999;

// console.log(increase()); // 2? => 1000


// const increase = () => {
//     let num = 0; // 상태변수를 지역변수 처리
//     return ++num;
// };

// console.log(increase()); // 1
// console.log(increase()); // 1
// console.log(increase()); // 1


// closure
const increaseClosure = () => {

    let num = 0; // 상태변수(지역변수)

    function increase() { // () 있으면 increase를 call함
        return ++num;
    }
    return increase; // () 없으면 함수 전체를 리턴

    // return () => {
    //     return ++num;
    // };
};

const result = increaseClosure(); // increase를 호출함 => 함수 전체를 리턴
result();
console.log(result());
console.log(result());
console.log(result());

// 즉시 실행 함수
// closure 함수
(function(){
    let num = 0;
    return () => ++num;
} ());

const result2 = (()=>{
    let num = 0;
    return () => ++num;
})();

console.log(result2());
console.log(result2());
console.log(result2());
console.log(result2());
