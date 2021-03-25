/*
문제 풀이.
*/

/*
Quest 1.
1. 변수를 선언하고 숫자 '29' 를 할당합니다.
2. 변수를 하나 더 선언하고 1(순서) 에서 선언한 변수와 **덧셈 대입**을 이용하여 '31' 이 할당되도록 코드를 작성합니다.
3. 변수를 하나 더 선언하고 1(순서) 에서 선언한 변수와 **나머지 연산 대입**을 이용해서 '2' 를 할당하도록 코드를 작성합니다.
4. 만약 2(순서) 에서 생성한 변수를 3(순서) 에서 선언한 변수로 나누었을때 나머지가 '1' 인 경우 '일치합니다.' 라는 문자열이 console 에 출력되도록 작성합니다.
*/
// Answer 1.
var number1 = 29;
var number2 = number1 + 2; // 31.
var number3 = number1 % 27; // 2.
console.log(number3);
// 29 / ? 나눴을 때, 나머지가 2가 되도록.
// 29 - 2 = 27
// 27 을 값으로 만들 수 있는 값들을 확인.
// 27
// 9
// 3
number3 = number1 % 9; // 2.
console.log(number3);
number3 = number1 % 3; // 2.
console.log(number3);
if (number2 % number3 === 1) {
    console.log("일치합니다.");
}



/*
Quest 2.
1. 알파벳 ‘a' 부터 'z' 까지 순서대로 console 에 출력되도록 반복문을 작성합니다.
*/
// Answer 2.
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//console.log(alphabet);
var i = 0;
for (i = 0; i < 26; i++) {
    // console.log(alphabet[i]);
}
var result = '';
for (i = 0; i < alphabet.length; i++) {
    // var result = '';
    result += alphabet[i]; // 문자열 연산.
    //console.log(alphabet[i]);
}
console.log(result);

// 배열 없이 String의 메서드로 구성하는 방법.
// String.formCharCode(number); => 'string'
// 'string'.charCodeAt(); => number
console.log(String.fromCharCode(97)); // a
console.log('A'.charCodeAt()); // 65
console.log('a'.charCodeAt()); // 97
console.log('b'.charCodeAt()); // 98
console.log('c'.charCodeAt()); // 99

var max = 26;
result = '';
for (i = 0; i < max; i++) {
    // 'a'.charCodeAt() + i; // 97, 98, 99, 100 ...
    // String.fromCharCode('a'.charCodeAt() + i); // 'a', 'b', 'c', 'd' ...
    // console.log(String.fromCharCode('a'.charCodeAt() + i));
    result += String.fromCharCode('a'.charCodeAt() + i);
}
console.log(result);



/*
Quest 3.
1. 숫자 '1' 부터 '50' 까지 순서대로 console 에 출력되도록 반복문을 작성하고 출력 시 해당 값의 짝/홀수 여부를 함께 표시합니다.

----------
console 에 출력  예시 : 1은 홀수!
----------
*/
// Answer 3.
for (i = 1; i <= 50; i++) {
    var msg = i + '은 ';
    // console.log(i);
    // ? % 2 = 0 | 1
    // 짝수 / 홀수
    if (i % 2 === 0) {
        msg += '짝수!';
        // console.log(i);
        // console.log(i + '은 짝수');
    } else {
        msg += '홀수!';
        // console.log(i + '은 홀수');
    }
    console.log(msg);
}