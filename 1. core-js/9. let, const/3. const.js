

// 상수: 불변의 고정값
const SALE_RATE = 0.2; //할인율 20%

const PI = 3.14159265; //원주율

// sale_rate = 0.3;

console.log(`sale_rate : ${SALE_RATE}`);

// const 와 객체 (배열, 객체, 함수) // 배열 객체 때 무조건 const
const person = {
    name: '김철수',
    age: 30
};

// person = {
//     name : '박영희',
//     age : 20
// };

// JS 변수 const => 에러나면 let으로 바꾸면 됨. 대부분이 const임. 

person.name = '고길동';
console.log(person);

const a = 10;

for (let i = 0; i < 5; i++) { 
    
}