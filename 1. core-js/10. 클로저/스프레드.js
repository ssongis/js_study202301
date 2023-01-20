
// 스프레드 : 안전한 객체, 배열 복사
// 변수 값 저장공간 좁음 => 넓은 공간 필요 => 객체, 저장공간
const foodList = ['짜장면','볶음밥','탕수육'];

// const copyFoodList = foodList; // 배열 주소 복사 개념

// 적을 때는 하나씩 가능
// const copyFoodList = [foodList[0], foodList[1], foodList[2]];

// 많아지면 반복문이지만
// const copyFoodList = [];
// for (let f of foodList){
//     copyFoodList.push(f);
// }

// 스프레드 사용하면 더 편함
// const copyFoodList = [...foodList];
const copyFoodList = [...foodList, '떡볶이','파스타'];


// foodList[1] = '짬뽕';
// copyFoodList[2] = '깐풍기';

console.log('원본: ', foodList);
console.log('사본: ', copyFoodList);

const emp = {
    empName: '빡빡이',
    age: 29,
    hireDate: '2014-01-01',
    birthDay: '1995-12-31'
};

const copyEmp = {
    ...emp,
    isCopy: true,
    age: 50
};

console.log(copyEmp);