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
// 1. 변수 a 를 선언하고 29 를 할당한다.
var a = 29;

// 2. 변수 b 를 선언하고 a 와 덧셈 연산 대입을 이용하여 31 이 할당되도록 만든다.
// 변수 b 가 31 의 값을 가지려면 2 가 더 필요하다.
var b = a + 2;
// console.log(b); // -> 31 이 출력되는 것을 확인.

// 3. 변수 c 를 선언하고 a 와 나머지 연산 대입을 이용하여 2 가 할당되도록 만든다.
// 변수 c 가 2 의 값을 가지려면 a 를 3 으로 나누면 된다. -> 29 / 3 = 몫 9, 나머지 2
var c = a % 3;
// console.log(c); // -> 2 가 출력되는 것을 확인.
// 생각해보니 a 와 b 를 이용해서 식을 만들 수도 있다. -> 31 / 29 = 몫 1, 나머지 2
c = b % a;
// console.log(c); // -> 2 가 출력되는 것을 확인.

// 4. 변수 b 를 c 로 나누었을 때 나머지가 1 인 경우 "일치합니다." 를 출력한다.
// 조건에 부합할 경우 특정 내용을 실행하도록 조건문을 이용하여 작성한다.
// 조건 : b 를 c 로 나눈 나머지 = 1 -> 실행 : "일치합니다." 출력
// 조건 : b % c === 1 -> 실행 : console.log("일치합니다.");
if(b % c === 1){
    console.log("일치합니다.");
}else{ // 나머지가 1이 아닐 경우.
    console.log("일치하지 않습니다.");
}



/*
Quest 2.
1. 알파벳 ‘a' 부터 'z' 까지 순서대로 console 에 출력되도록 반복문을 작성합니다.
*/
// Answer 2.
// 변수 alphabet 을 선언하고 "a" 부터 "z" 까지의 알파벳을 할당하는 배열을 만든다.
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// 알파벳을 차례대로 출력하는 반복문을 작성한다.
for(var i = 0; i < alphabet.length; i++){
    console.log(alphabet[i]);
}



/*
Quest 3.
1. 숫자 '1' 부터 '50' 까지 순서대로 console 에 출력되도록 반복문을 작성하고 출력 시 해당 값의 짝/홀수 여부를 함께 표시합니다.
----------
console 에 출력 예시 : 1은 홀수!
----------
*/
// Answer 3.
// 먼저 숫자 1 부터 50 까지 순서대로 출력하는 반복문을 작성한다.
for(i = 1; i <= 50; i++){
    // 해당 값이 짝수인지 홀수인지 판단 후 출력해야 한다. 판단 기준을 세워보자.
    // 만약 어떤 수를 2로 나눈 나머지가 1 과 같으면 그 수는 홀수이다. 그렇지 않으면 짝수이다.
    if(i % 2 === 1){ // 홀수일 경우.
        console.log(i + " 은/는 홀수!");
    }else{ // 짝수일 경우.
        console.log(i + " 은/는 짝수!");
    }
}


