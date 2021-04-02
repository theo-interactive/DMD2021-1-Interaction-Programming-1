/*
Quest 1.
getEven 이라는 함수를 선언하고, 1개의 매개변수(숫자)를 지정합니다.
입력된 전달인자의 숫자를 기준으로 0부터 해당하는 수까지 짝수만 구분하여 아래 형식의 문자열로 반환합니다.
even1 변수를 선언하고 getEven(10) 의 반환값을 할당받아 아래의 문자열 결과값과 같이 console 에 출력되도록 작성합니다.

함수 호출 예시)
반환 문자열 형식 : "짝수, 짝수, … 짝수, 짝수."
getEven(10) 를 호출하여 반환하고 변수를 출력한 결과값 : 2, 4, 6, 8, 10.
*/

// Answer 1.
function getEven(inputNum) {
    var result = '';
    for (i = 0; i <= inputNum; i++) {
        if (i % 2 === 0 && i !== 0) { // 0 을 포함하지 않는 짝수일 경우.
            // console.log(i);
            result += i;
            if (i < inputNum - 1) {
                // console.log(i);
                result += ', ';
            } else { // (i === inputNum || i === inputNum - 1)
                // console.log(i);
                result += '.';
            }
        }
    }
    return result;
}
var even1 = getEven(10);
console.log(even1); // -> 2, 4, 6, 8, 10.

// 정상적으로 작동하는지 테스트.
// even1 = getEven(9);
// console.log(even1); // -> 2, 4, 6, 8.
// even1 = getEven(1);
// console.log(even1); // -> '' - 빈 문자열.
// even1 = getEven(2);
// console.log(even1); // -> 2.
// even1 = getEven(3);
// console.log(even1); // -> 2.



/*
Quest 2.
getStar 이라는 함수를 선언하고, 1개의 매개변수(숫자)를 지정합니다.
입력된 전달인자가 숫자가 아닌 경우 '숫자만 입력가능합니다.’ 라는 문구가 console 에 출력되고 false 를 반환합니다.
입력된 전달인자의 숫자인 경우 전달인지의 수만큼 '*' 가 반복되는 문자열을 반환합니다.
star1 변수를 선언하고 getStar("text") 의 반환값을 할당받아 아래의 결과값과 같이 console 에 출력되도록 작성합니다.
star2 변수를 선언하고 getStar(5) 의 반환값을 할당받아 아래의 문자열 결과값과 같이 console 에 출력되도록 작성합니다.

함수 호출 예시)
getStar("text") 를 호출하여 반환하고 변수를 출력한 결과값 : false
getStar(5) 를 호출하여 반환하고 변수를 출력한 결과값 : *****
*/

// Answer 2.
function getStar(inputNum) {
    if (typeof inputNum !== 'number') { // 전달인자가 숫자가 아닌 경우.
        console.log('숫자만 입력 가능합니다.');
        return false;
    } else { // 전달인자가 숫자인 경우.
        var result = '';
        for (i = 0; i < inputNum; i++) {
            result += '*';
        }
        return result;
    }
}
var star1 = getStar('text');
console.log(star1); // -> 숫자만 입력 가능합니다. / false
var star2 = getStar(5);
console.log(star2); // -> *****



/*
Quest 3.
'Apple', 'Orange', 'Grape', 'Melon' 를 요소로 가지는 fruit 라는 이름의 배열 객체를 생성합니다.
'Mango' 를 fruit 배열 객체의 앞에 추가합니다.
fruit 배열 객체의 ‘Orange' 요소 순서 뒤에 'Cherry' 요소를 추가합니다.
fruit 배열 객체의 요소 순서를 반대로 변경하고 console 에 배열이 출력되도록 작성합니다.
*/

// Answer 3.
var fruit = ['Apple', 'Orange', 'Grape', 'Melon'];
fruit.unshift('Mango');
// console.log(fruit); // -> ["Mango", "Apple", "Orange", "Grape", "Melon"]
fruit.splice(3, 0, 'Cherry');
// console.log(fruit); // -> ["Mango", "Apple", "Orange", "Cherry", "Grape", "Melon"]
fruit.reverse();
console.log(fruit); // -> ["Melon", "Grape", "Cherry", "Orange", "Apple", "Mango"]



/*
Quest 4.
getSize 라는 함수를 선언합니다.
윈도우 콘텐츠 영역의 넓이값과 높이값을 아래 객체 형식과 같이 반환합니다.
winSize 변수를 선언하고 getSize() 의 반환값을 할당받습니다.
아래의 문자열 결과값과 같이 console 에 출력되도록 작성합니다.

출력 예시)
객체 형식 : { winWidth : __윈도우 콘텐츠 영역의 넓이값__, winHeight : __윈도우 콘텐츠 영역의 높이값__ }
문자열 결과값 : 윈도우 콘텐츠의 영역 width : ____ px, height : ____ px 입니다.
*/

// Answer 4.
function getSize() {
    var winWidth = window.innerWidth;
    var winHeight = window.innerHeight;
    var result = '윈도우 콘텐츠의 영역 width : ' + winWidth + 'px' + ', height : ' + winHeight + 'px 입니다.';
    return result;
}
var winSize = getSize();
console.log(winSize); // -> ex) 윈도우 콘텐츠의 영역 width : 1148px, height : 916px 입니다.


