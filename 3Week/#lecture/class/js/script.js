console.log("외부 js 로드!");

// 비교를 할 때, 결과는 Boolean 타입으로 확인된다.

/*
Boolean
- true | false
- 참 | 거짓
- 1 | 0
*/

// 비교 연산자. & 동등 연산자.
// ? == ? --> Boolean
// ? > ? --> Boolean
// ? < ? --> Boolean
// ? >= ? --> Boolean
// ? <= ? --> Boolean
var a, b;
// a = 1;
// b = 1;
// a = 2;
// b = 1;
// a = 1;
// b = 2;
// console.log(a + '==' + b, a == b); // 같은지 비교
// console.log(a + '>' + b, a > b); // 초과
// console.log(a + '<' + b, a < b); // 미만
// console.log(a + '>=' + b, a >= b); // 이상
// console.log(a + '<=' + b, a <= b); // 이하
// // 값이 같은지? 큰지? 작은지? 비교.

// a = "안녕하세요";
// b = "반갑습니다.";
// b = "안녕하세요";
// console.log(a + '==' + b, a == b);
// 문자열과 문자열도 비교 가능하다.

// a = "hello"; // string
// a = 10; // number
// b = "world"; // string
// a = {}; // object
// b = {name: 'name'}; // object
// console.log(typeof a, typeof b, typeof a == typeof b); // true.

// a = 1;
// b = "1";
// console.log(a + '==' + b, a == b); // true.
// 동등연산자로 숫자와 문자를 비교했을 때 문자의 값이 수로 이뤄져 있다면 true 로 반환될 수 있다.

// 일치 연산자.
// 데이터 타입까지 확인해서 엄격하게 비교할 때 사용.
// console.log(a + '===' + b, a === b); // false

// var c = null; // null
// var d; // undefined
// console.log(c, d, c == d);
// console.log(c, d, c === d);

// 0 은 - + 앞에 붙어도 0 이다.
// console.log(0 === +0);
// console.log(0 === -0);
// console.log(+0 === -0);

// **
// 1, 1 이 아닌 수.
// console.log(true == 1); // true.
// Boolean true 와 1 은 같은 값으로 인식할 수 있다.
// 1 이 아닌 수는 모두 false.
// console.log(true == -1);
// console.log(true == 2);
// console.log(false == 1);
// console.log(false == 2);
// console.log(true === 1); // false
// === 일치 연산자로 비교할 때 타입까지 비교해서 확인한다.

// console.log(NaN === NaN);
// NaN - 수식이 성립되지 않는다.
// 어떤 수식을 대입했을지 모르기 때문에 같다고 인식이 되지 않음.

// 부등 연산자.
// ! != !==
// a = 1;
// b = 1;
// console.log(a + '!=' + b, a != b); // false.

// a = 2;
// b = 1;
// a = 2;
// b = "1";
// console.log(a + '!=' + b, a != b);

// a = 1;
// b = "1";
// console.log(a + '!=' + b, a != b);
// console.log(a + "!==" + b, a !== b);

// a = "hello";
// b = "hello";
// b = "world";
// console.log(a + '!=' + b, a != b);
// console.log(a + "!==" + b, a !== b);

// Boolean 타입 앞에 !
// console.log(!true); // true -> false.
// console.log(!false); // false -> true.
// console.log(!1); // 1(true)* -> false.
// console.log(!0); // 0(false) -> true.


// Math 수학
// 내장 객체(처음부터 생성되어 있는 기능 목록)
// console.log(Math);
// console.log(Math.PI); // 반지름.

// var e;
// e = Math.pow(3, 2); // 제곱
// console.log('제곱(pow)', e);
// e = Math.round(1.5); // 반올림 -> 2
// console.log('반올림(round)', e);
// e = Math.round(2.4); // 2
// console.log('반올림(round)', e);
// e = Math.ceil(5.1); // 6
// console.log('올림(ceil)', e);
// e = Math.floor(5.9); // 5
// console.log('내림(floor)', e);
// e = Math.sqrt(9); // 3
// console.log('제곱근(squre root)', e);
// // *
// e = Math.random(); // 0 ~ 1 사이의 랜덤한 값 반환.
// console.log('랜덤 숫자(random)', e);
// e = 100 * e;
// console.log('랜덤 숫자(random) x 100', e);
// e = Math.round(e);
// console.log('반올림(랜덤 숫자(random) x 100)', e);
// // Math.abs() // 절대값.
// e = Math.abs(300 - 500); // -200
// console.log('절대값(abs)', e);

// Object 객체
// (색인과 값) 들의 집합.
// console.log(Math);
// // var _obj = {
// //     name: "김용원",
// //     phone: "01091378688",
// //     email: "yongwon@kaywon.ac.kr"
// // };
// var v = "안녕하세요.";
// var _obj = {
//     n: 1, // number
//     is: true, // Boolean
//     o: {name: '다른 객체'},
//     greeting: v,
//     name: "김용원",
//     phone: "01091378688",
//     email: "yongwon@kaywon.ac.kr",
//     doing: function() {
//         console.log('안녕하세요.');
//     }
// };
// // key : value
// console.log(_obj);
// console.log(_obj.name);
// console.log(_obj.phone);
// console.log(_obj.email);
// // console.log(_obj.doing);
// // _obj.doing();

// // 객체에 값을 추가.
// _obj.hello = "world";
// _obj.car = "car";
// _obj.kaywon = 100;
// console.log(_obj);

// var _obj2 = {
//     "name" : "김용원",
//     fullName: "kimyongwon",
//     full_name: "kimyongwon",
//     // full-name: "kimyongwon",
//     "full-name": "kimyongwon"
// }
// console.log(_obj2);
// console.log(_obj2["name"]);
// console.log(_obj2["fullName"]);
// console.log(_obj2["full_name"]);
// console.log(_obj2["full-name"]);

// _obj2["phone"] = "01091378688";
// console.log(_obj2);

// Array 배열
// object 의 일종.
// 한번에 두가지 이상의 값을 포함할 수 있는 객체.

// a = 10;
// b = 'hello';
// c = null;
// d = b;
// var _arr = [a, b, c, d];
// console.log(_arr);
// console.log(_arr.length); // 배열의 길이. 4
// // 배열은 0 부터 시작.
// console.log(_arr[0]); 
// console.log(_arr[1]);
// console.log(_arr[2]);
// console.log(_arr[3]);
// console.log(_arr[4]); // undefined

// if (조건문)
// 비교 연산.
// if { } else { }
// else if 
// if (만약에 ~ 라면)
// if(condition) { // true
//     // ... 비교한 값이 true 인 경우 해당 부분.
// }else{ // false
//     // ... 비교한 값이 false 인 경우 해당 부분.
// }

// if(condition1) {
// }else if(condition2) {
// }else if(condition3) {
// }else{
// }

var j = 3;
var k = 10;
var i;
// console.log(i);
// console.log(typeof i); // string
// console.log(i == undefined);
// console.log(i === undefined);
// console.log(typeof i == 'undefined');
// console.log(typeof i === 'undefined');
i = 10;
// if (typeof i === 'undefined') { // true.
// // if (typeof i === 'number') { // false.
//     console.log('조건 true');
//     i = j % k;
// } else {
//     console.log('조건 false');
//     i = null;
// }
// console.log(i);

// 논리 연산자 && ||
// 조건을 2가지 이상 사용할 때.

// condition && condition
// && (and) 그리고 - 2개(이상)의 조건이 모두 true 일 때 성립.

// condition || condition
// || (or) 또는 - 2개(이상)의 조건 중 1개라도 true 일 때 성립.
// j = 10;
// // k = "100";
// k = 100;
// console.log(typeof j === 'number'); // true
// console.log(typeof k === 'number'); // true. // false.
// if (
//     typeof j === 'number' &&
//     typeof k === 'number' &&
//     j === 10 &&
//     k === 100
// ) { // 2개의 조건이 모두 true.
//     console.log('2개(이상)의 조건 모두 성립');
// }else{
//     console.log('2개(이상) 중 하나만 성립되거나 2개(이상) 조건 모두 성립되지 않음');
// }
// j = 100;
// k = 300;
// console.log(typeof j === 'number'); // true.
// console.log(typeof k === 'string'); // false.
// if(typeof j === 'string' || typeof k === 'string') { // 조건 중 하나라도 true 일 때 성립된다.
//     console.log('조건 성립');
// }else{
//     console.log('조건 성립되지 않음');
// }

// lteration (loop) (반복문)
// 동일한 동작을 반복해서 수행할 수 있도록 하는 구문.
// for(초기화 변수; 조건; 증감) {
    // 동일한 동작 코드.
// }

// var i;
// i = 0;
// i++ === (i = i + 1)
// i-- === (i = i - 1)
// for (var i = 0; i < 10; i++) {
//     console.log('반복 중입니다.', i);
// } // 0 ~ 9
// for (var i = 10; i > 0; i--) {
//     console.log('반복 중입니다.', i);
// } // 10 ~ 0

var _arr = ['a', 'b', 'c', 'd', 'e'];
console.log(_arr.length); // 5
for(var i = 0; i < _arr.length; i++) {
    //console.log(i); // 0 1 2 3 4
    console.log(_arr[i]);
}

var _say = ["Hello", "My", "Name", "is", "yongwon"];
// Hello My Name is yongwon.
var sayMessage = '';
for(i = 0; i < _say.length; i++) {
    if(i !== 0) {
        sayMessage += ' ';
    }
    sayMessage += _say[i];
    // console.log(_say[i], sayMessage);
    if(i === _say.length - 1) {
        // 마지막 부분.
        sayMessage += '.';
    }
}
console.log(sayMessage);
