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

var a = 29;
var b = a + 2;                  // 29+2;    31
var c = a % 3;                  // 29%3;     2
if(b%c==1){                     // (29 % 2 == 1 ) 이 성립하면 
    console.log('일치합니다.');          // '일치합니다.' 라는 글자가 뜬다.
}


/*
Quest 2.
1. 알파벳 ‘a' 부터 'z' 까지 순서대로 console 에 출력되도록 반복문을 작성합니다.
*/
// Answer 2.

var _arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
for(var i = 0; i < _arr.length; i++) {               // 변수 i가 0부터 시작을 하고; 위 알파벳(26)의 갯수보다 작을 떄; i를 1씩 증가시킨다.
    console.log(_arr[i])                             // 그러면 알파벳이 순서대로 나온다. 
}



/*
Quest 3.
1. 숫자 '1' 부터 '50' 까지 순서대로 console 에 출력되도록 반복문을 작성하고 출력 시 해당 값의 짝/홀수 여부를 함께 표시합니다.

----------
console 에 출력  예시 : 1은 홀수!
----------
*/
// Answer 3.

for (var i = 1; i < 51; i++) {           // 변수 i가 1부터 시작을 하고; 51보다 작을 때; i를 1씩 증가시킨다.
    if( i%2 == 0) {
        console.log(i+'은 짝수!')          // 변수 i를 2로 나눠서 0이 되면 짝수이고,
    }else{
        console.log(i+'은 홀수!')          // 그렇지 않으면 모두 홀수가 된다. 
   }
}