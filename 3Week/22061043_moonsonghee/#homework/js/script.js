/*
문제 풀이.
*/


// Quest 1.

// 1. 변수를 선언하고 숫자 '29' 를 할당합니다.

var a = 29; // -> 1.변수명을 a로 선언


//2. 변수를 하나 더 선언하고 1(순서) 에서 선언한 변수와 **덧셈 대입**을 이용하여 '31' 이 할당되도록 코드를 작성합니다.

var b; // 변수 b 를 하나 더 선언
b = a + 2 // 29 + 2 = 31


//3. 변수를 하나 더 선언하고 1(순서) 에서 선언한 변수와 **나머지 연산 대입**을 이용해서 '2' 를 할당하도록 코드를 작성합니다.

var c; // 변수 c를 하나 더 선언
c = a % 29 ; //2

//4. 만약 2(순서) 에서 생성한 변수를 3(순서) 에서 선언한 변수로 나누었을때 나머지가 '1' 인 경우 '일치합니다.' 라는 문자열이 console 에 출력되도록 작성합니다.

if (b % c == 1); // b(31) 나누기 c(2)의 값이 1이 일치할경우
{
    console.log("일치합니다"); //"일치합니다" 출력
}

/*
Quest 2.
1. 알파벳 ‘a' 부터 'z' 까지 순서대로 console 에 출력되도록 반복문을 작성합니다.
*/

var _arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ] ;
// 배열의 크기 (26) i 보다 크며 i에 1 증가
for( var i = 0; i < _arr.lengh; i++)
{
    console.log(_arr[i]); // a ~ z 까지 출력
}


/*
Quest 3.
1. 숫자 '1' 부터 '50' 까지 순서대로 console 에 출력되도록 반복문을 작성하고 출력 시 해당 값의 짝/홀수 여부를 함께 표시합니다.

----------
console 에 출력  예시 : 1은 홀수!
----------
*/

for(var i = 1; i < 50; i ++); // 반복문을 사용하여 0~49 반복
if(i % 2 == 0) // i를 2로 나누었을때 나머지가 0이면 짝수
{
    console.log( i + "는 짝수")
}else{ // 나머지가 0이 아니면 홀수
    console.log( i + "는 홀수")
}