console.log("JavaScript 로드");

// Apply.
// var fruit = { apple: 1000, orange: 2000, lemon: 3000, mango: 4000 };
// function sum() {
//     var result = 0;
//     // for (var key in fruit) {
//     //     result += fruit[key];
//     // }
//     for (var key in this) {
//         result += this[key];
//     }
//     return result;
// }
// var result = sum.apply(fruit);
// console.log(result);

// // 수학
// var min = Math.min(0, 10, 20, 30, 40); // 최소값. -> 0
// var max = Math.max(1000, 200, 300, -1000); // 최대값. -> 1000
// console.log(min, max);
// var _array = [-100, 1000, 2000, 0, -3000];
// min = Math.min.apply(null, _array);
// max = Math.max.apply(null, _array);
// console.log(min, max);

// BOM.
// Browser Object Model.
// 브라우저가 실행되면 항상 존재하는 내장객체.
// window
// navigator
// screen
// history
// location

console.log(window);
// window
// BOM 의 최상위 객체. 전역범위, 전역변수.
// 브라우저 환경의 모든 객체 속성을 담고 있다.
// window.navigator;
// navigator;
console.log(document);
console.log(window.document);
// html 문서를 node화 해서 사용.

console.log(window['innerWidth']);
console.log(window.innerHeight);

console.log(window.screenTop);
console.log(window.screenLeft);
// 모니터 상의 브라우저 위치 x(screenLeft), y(screenTop) 좌표.

console.log(window.pageXOffset);
console.log(window.pageYOffset);
// 브라우저의 상단 좌측을 기준으로 스크롤 좌표 x, y.

console.log(window.location);
// URL 객체 반환.

// window.alert('안녕하세요.');
// 메시지가 포함되어 있는 다이얼로그 창 | ok(확인) 버튼.
// alert('안녕하세요.');
// window. 부분을 생략할 수 있다.

// var name = window.prompt('이름을 입력해주세요.');
// 메시지 + 입력가능한 인풋이 포함되어 있는 다이얼로그 창 | ok(확인), cancel(취소) 버튼.
// 사용자가 입력한 값을 반환받을 수 있다.
// prompt('이름을 입력해주세요.');
// cancel - null
// ok - 입력한 값. '', '입력된 값'
// console.log(name);

// var isConfirm = window.confirm('가입을 하시겠습니까?'); // bool 반환.
// 메시지가 포함되어 있는 다이얼로그 창 | ok(확인), cancel(취소) 버튼
// cancel - false.
// ok - true.
// console.log(isConfirm);

// window.scrollTo(500, 500);
// 강제로 스크롤 좌표 이동. x, y

// 타이머 적용하기.

// setInterval(callback, millisecond);
// callback : func(함수)
// millisecond : 1000ms(밀리초) -> 1s(초)

// var count = 0;
// var second = 1;
// var timer = setInterval(function() {
//     // console.log('안녕하세요.');
//     clearInterval(timer);
//     console.log(count);
//     count++;
// }, 1000);

// clearInterval();
// 타이머를 초기화(중지)
// clearInterval(timer);

// setTimeout(callback, millisecond);
// 한번만 실행되는 타이머.
// var timer = setTimeout(function() {
//     console.log(count);
// }, second * 1000);

// clearInterval(timer); - interval | timeout 모두 초기화 가능.
// clearTimeout(timer);
// 타이머를 초기화(중지)

// window.open();
// 새로운 브라우저 창을 연다.
// window.open('http://naver.com', 'naver');
var popup = window.open('http://naver.com', '_blank'); // 새 창으로 띄우기.
// window.open('http://naver.com', '_self');
// _blank, _parent, _self, name

// window.open('https://google.com', '_blank', 'top=0, left=0, width=800, height=500, titlebar=0, location=0');

// window.close();
// 강제로 브라우저 창 닫기.
// popup.close();