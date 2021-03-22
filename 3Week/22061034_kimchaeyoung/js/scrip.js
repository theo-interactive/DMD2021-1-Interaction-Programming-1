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

var a = 29; // 1. 변수 a에 29 할당
var b = a + 2; // 2. 변수 a에 덧셈 대입을 이용하여 31이 할당되도록 함(29 + 2 = 31)
var c = b % 29; // 3. 변수 c에 나머지 연산 대입을 이용해 2가 할당되도록 함(31 % 29 = 2)

if (b % c == 1) // 4. d % c가 1과 일치할 경우, 
{
    console.log("일치합니다."); // "일치합니다." 출력
}


/*
Quest 2.
1. 알파벳 ‘a' 부터 'z' 까지 순서대로 console 에 출력되도록 반복문을 작성합니다.
*/
// Answer 2.

var _arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

for(var i = 0; i < _arr.length; i++) // _arr 배열의 길이(26)rk i보다 큰 동안 반복하며 실행 후 i에 1 증가
{
    console.log(_arr[i]); // 그냥 _arr 배열만 출력할 시, _arr 배열의 모든 내용을 출력하게 되므로 앞에서 선언한 i로 지정하여 0인 a부터 z까지 출력되도록 함 
}

// 더 효율적인 방법이 있을 것 같은데 생각해내기엔 아직 역부족입니다..

/*
Quest 3.
1. 숫자 '1' 부터 '50' 까지 순서대로 console 에 출력되도록 반복문을 작성하고 출력 시 해당 값의 짝/홀수 여부를 함께 표시합니다.

----------
console 에 출력  예시 : 1은 홀수!
----------
*/
// Answer 3.

 var d = 50;

//  while (d > -1) // 반복문 안에 if문을 삽입하여 조건별로 결과가 다르게 출력되도록 함

//    {
//         if (d - 1 > 0) // 홀수 부분. d - 1이 0보다 클 때를 조건으로 하여 1까지 출력되도록 함
//         { 
//             d = d - 2; // 문구 출력 전, 2를 감소시켜 홀수로 시작되도록 함
//             // 출력 전에 감소시켜 1까지 출력 후, 이후부터는 조건에 성립되지 않도록 함
//             console.Log(d + "은 홀수!"); // 조건이 성립할 경우, d은 홀수! 라는 문구 출력.
//          }
//        else if (d > 0) // 짝수 구문. d가 0보다 클 때를 조건으로 하여 2까지 출력되도록 함
//          {
//            d = d - 1; // 문구 출력 후, 2를 감소시켜 짝수만 출력되도록 함
//             console.Log(d + "은 짝수!"); // 조건이 성립할 경우, d은 짝수! 라는 문구 출력.

//          }
//    }
// 위 주석문과 같이 실행될 거라 생각했지만 if 조건문으로 조건을 나눈 의미가 없다는 걸 다 작성했을 때 깨달았습니다.
// 또한 너무 비효율적으로 수식이 길어서 좀 더 효율적인 방법이 있지 않을까 했습니다.

while (d > 0) // 1까지 출력 후 조건이 성립하지 않도록 d > 0 를 조건으로 설정합니다.
{
    if (d % 2 == 0) // 생각해보다가 1번 문제에서 이용했던 나눗셈 일치 연산자로,
    // 찍수는 2로 나누어도 나머지가 없으니 이를 활용하면 되지 않을까 했습니다.
    {
        console.log(d + "은 짝수입니다!"); // 조건 만족 시(짝수일 경우), "d은 짝수입니다!" 출력
    }
    else // 그 외의 경우에는(홀수)
    {
        console.log(d + "은 홀수입니다!"); // "d은 홀수입니다!" 출력 
    }

    d--; // 각 조건문 실행 후, d 에 -1을 한 뒤(1까지 차감되기 위해서) 반복문 반복 실행
}
