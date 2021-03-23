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
var b = a + 2; // 29 + 2 = 31
var c = a % 3; // 29 % 3 = 2
if (b % c === 1) // 31 % 2 === 1 (타입까지 확실하게 하기 위해 ===를 사용하였습니다.)
{
    console.log("일치합니다.");
}
// Quest 1을 해결했습니다 !

/*
Quest 2.
1. 알파벳 ‘a' 부터 'z' 까지 순서대로 console 에 출력되도록 반복문을 작성합니다.
*/
// Answer 2.

var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
for(var i = 0; i < alphabet.length; i++)
// 일단 초기문으로 i라는 변수를 설정하여 0을 만들어주고 조건문으로 d의 길이보다 작을 경우를 설정해준 후,
// 증감문으로 i++ (i = i + 1)를 넣어줍니다.
{
    console.log(alphabet[i]); // alphabet 변수 안의 알파벳들이 순서대로 나오도록 합니다.
}
// Quest 2를 해결했습니다 !


/*
Quest 3.
1. 숫자 '1' 부터 '50' 까지 순서대로 console 에 출력되도록 반복문을 작성하고 출력 시 해당 값의 짝/홀수 여부를 함께 표시합니다.

----------
console 에 출력  예시 : 1은 홀수!
----------
*/
// Answer 3.


for(var i = 1; i <= 50; i++) // 일단 반복문을 사용하여 1부터 50까지의 숫자가 전부 뜨게 합니다.
{
    if(i % 2 === 0) // 만약 나머지가 0으로 딱 떨어진다면 그 숫자는 짝수일 것이므로 짝수로 표시되게 합니다.
    {
        console.log(i + "은 짝수!");
    }
    else // 그렇지 않을 경우는 홀수이기 때문에 홀수로 표시되게 합니다.
    {
        console.log(i + "은 홀수!");
    }
}
// Quest 3을 해결했습니다 !