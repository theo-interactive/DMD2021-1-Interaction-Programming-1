console.log('JavaScript 로드!');

/*
// function.
// 함수.(기능)
// 재사용을 위해 작성하는 코드 블록 단위
// 호출을 통해서 내부의 코드가 작동된다.
// 유효범위. // - 내부의 코드와 외부의 코드의 참조되는 범위가 다르다.
// 값을 반환. // - 내부의 코드가 작동이 완료되면 외부로 값을 출력시켜준다.

// 외부
function name(param) {
    // 내부 코드 기입.
}
name();

var a = 20, b = 30, c = 10;
console.log(c); // 10.
// 함수를 정의.
function addNumbers() {
    c = b + a;
}
console.log(c); // 10.
// 함수를 사용하기 위해서는 호출을 해야만 한다.
// 함수의 호출.
addNumbers();
console.log(c); // 50.

// scope. (유효범위)
// 코드가 참조할 수 있는 범위.
// 변수, 매개변수의 접근을 어디까지 허용할 것인가?
// 접근성과 생존기간.
// 전역 | 지역 구분.
// 전역변수는 script 내부의 모든 곳에서 참조가 가능.
// 지역변수는 지정된 함수에서만 참조가 가능.
var _global = 'global'; // 전역변수.
function setGlobal() {
    // global = 'hello'; // 전역변수.
    // * 함수 내부에서 선언되는 순간 해당 함수 안에서만 참조가 가능하다.
    var global = 'hello'; // 지역변수.
    console.log(global); // hello
}
setGlobal(); 
console.log(_global); // global

// method. (메서드)
// 객체 내부에 함수가 포함된 경우.
var _obj = {
    name: "김용원",
    getNumbers: function() {
        console.log(100);
    },
    sayHello: function() {
        console.log('안녕하세요!');
    }
};
// 메서드의 호출.
_obj.getNumbers();
// Math.random(); // Math의 random 메서드.
_obj.sayHello();

// 함수의 종류.
// 1. 명시적 함수.
// 2. 익명함수.
// 3. 함수식(리터럴 함수)

// 명시적 함수. (선언식)
numbers1();
function numbers1() {
    console.log(1);
}
numbers1();

// 함수식. (표현식)
// numbers2(); // 함수식은 선언 이후부터 호출 가능하다.
var numbers2 = function() {
    console.log(2);
}
numbers2();

// 함수 호출
// '정의된 함수이름'();

// parameter (매개변수) - 내부 변수*
// 변수의 한 종류.
// 함수가 선언될 때 처음부터 선언되는 변수.(지역변수)
// 함수를 호출할 때 전달받을 수 있는 변수(데이터)
function sendMessage(msg, n = 100, s = 'world') { // var msg; var n; var s = 'world'; 값이 없는 상태. undefined
// s <- 매개변수의 기본값을 할당함.
    // console.log(msg);
    // console.log(n);
    // console.log(s);
    console.log(typeof msg); // 'undefined';
    
    // 매개변수의 유효성 판단.
    if (typeof msg === 'undefined') {
        console.log('msg 의 값이 없습니다.');
    } else {
        console.log(msg);
    }

    if (msg === undefined) {

    } else {

    }
}
sendMessage();
sendMessage("안녕하세요"); // 전달인자.
// sendMessage("안녕하세요", 1, 'hello');
// sendMessage("안녕하세요", 2);
*/
/*
function sum(number1, number2) {
    console.log(number1 + number2);
}
sum(); // NaN
sum(1); // NaN
sum(20, 10); // 30
sum(1, 4, 5, 6, 7, 8); // 5
*/
/*
function sum(number1, number2) {
    // console.log(number1 + number2);
    // return 구문이 작성되지 않으면 undefined 를 반환.
    // return 1; // 함수 호출 후 값을 바깥으로 반환.
    // return number1 + number2;
    var sumResult = number1 + number2;
    //sumResult += 100;
    // sumResult /= 2;
    return sumResult;
}
var result;
result = sum(); 
console.log(result); // NaN
result = sum(1);
console.log(result); // NaN
result = sum(20, 10);
console.log(result); // 30
result = sum(1, 4, 5, 6, 7, 8);
console.log(result); // 5
*/

// switch
// while

// array
var heros = ['Iron Man', 'Hulk', 'Thor', 'Doctor Strange'];
console.log(heros);
// 배열 추가 / 삭제.
// unshift()
heros.unshift('Captain America');
// heros.unshift('Captain America', 'item', 'item');
console.log(heros);
// 배열의 앞쪽에 원소 추가.
// push()
heros.push('Spider-Man');
// heros.push('Spider-Man', 'item', 'item');
console.log(heros);
// 배열의 뒤쪽에 원소 추가.
// shift()
heros.shift();
console.log(heros);
// 배열 앞쪽의 1개 원소 삭제.
// pop()
heros.pop();
console.log(heros);
// 배열 뒤쪽의 1개 원소 삭제

// concat()
// 배열을 병합.
// 배열끼리 병합.
// 배열1.concat(배열2);
// var newHeros = heros.concat(['Black Panther', 'Ant-Man']); // 값을 반환받아서 새로운 변수에 담아야 한다.
var addHeros = ['Black Panther', 'Ant-Man'];
// heros = heros.concat(['Black Panther', 'Ant-Man']);
// console.log(heros);
var newHeros = heros.concat(addHeros);
console.log(newHeros);
// splice() * 
// 배열의 특정 지점에서부터 수정, 추가, 삭제.
// 배열.splice(시작지점, 삭제할 원소의 개수, 추가할 원소);
newHeros.splice(2, 0, 'Vision');
// newHeros.splice(2, 0, 'Vision', 'item');
console.log(newHeros);
// newHeros.splice(2, 1);
newHeros.splice(2, 1, 'Loki');
// newHeros.splice(0, 1, 'Loki'); // unshift() 비슷한 형태.
// newHeros.splice(newHeros.length - 1, 1, 'Loki'); // push() 와 비슷한 형태.
// newHeros.splice(2, 2, 'Loki', 'item', 'item');
console.log(newHeros);

// sort()
// 정렬. (숫자, 알파벳, 한글 순서 정렬)
newHeros.sort();
console.log(newHeros);
// reverse()
// 반대로 정렬.
newHeros.reverse();
console.log(newHeros);

// for in
// 배열, 객체의 반복문.
var result = '';
for (var index in newHeros) {
    // console.log(index);
    console.log(newHeros[Number(index)]);
    // console.log(newHeros[parseInt(index, 10)]);
}

var person = {
    name: '김용원',
    number: 10
}

for (var key in person) {
    console.log(key);
    console.log(person[key]);
}
