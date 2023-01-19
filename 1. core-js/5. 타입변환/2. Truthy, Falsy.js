
// 아래 5개는 알아두기
// 0, '', null, undefined, NaN -> 거짓판정 
// 중요

// Falsy
if (undefined) console.log('ok1');
if (null) console.log('ok2');
if (0) console.log('ok3');
if ("") console.log('ok4');
if (NaN) console.log('ok5');

// Truthy
if (1) console.log('ok6');
if (-100.55) console.log('ok7');
if ('   ') console.log('ok8'); // 공백 문자열은 ture
if ('hello!!!!') console.log('ok9');
if ([]) console.log('ok10'); // 빈 배열도 true

console.log('=====================');

var num = 9;
if (num % 2) {
    console.log('홀수입니다.');
} else {
    console.log('짝수입니다.');
}

var apple = 0;
if (apple) {
    console.log('사과가 하나도 없습니다.');
} else {
    console.log(`사과가 ${apple}개 있습니다.`);
}



