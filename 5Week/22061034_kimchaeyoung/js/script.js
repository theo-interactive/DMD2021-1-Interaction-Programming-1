/*
문제 풀이.
*/

/*
## Quest

### Quest 1.
1) getEven 이라는 함수를 선언하고, 1개의 매개변수(숫자)를 지정합니다.
2) 입력된 전달인자의 숫자를 기준으로 0부터 해당하는 수까지만 구분하여 아래 형식의 문자열로 반환합니다.
3) even1 변수를 선언하고 getEven(10) 의 반환값을 할당받아 아래의 문자열 결과값과 짝수 같이 console 에 출력되도록 작성합니다.

```
함수 호출 예시)

반환 문자열 형식 : "짝수, 짝수, … 짝수, 짝수."
getEven(10) 를 호출하여 반환하고 변수를 출력한 결과값 : 2, 4, 6, 8, 10.
```
*/

// Answer 1.

// 처음에 배열로만 해야 하는 줄 알고 배열로 선언해서 누적했었는데
// 알고보니 문자열이라 문자열로 선언해도 된다는 걸 깨달았습니다.

// getEven 함수 선언 후,
// 매개변수(숫자)를 지정
function getEven (number1)
{
    // 숫자 배열 결과를 담을 result 변수를 선언
    var result = "";
    
    // i를 선언과 동시에 0으로 초기화 후(0부터 시작하기 위해)
    // i가 number1보다 작거나 같은 동안 실행 후, i를 1씩 증가
    for (var i = 0; i <= number1; i++)
    {
        // 그 중 i를 2로 나누었을 때 나머지가 0이고()= 짝수라면)
        // i가 0이 아니라면
        if (i % 2 == 0 && i != 0)
        {
        // result 배열에 i를 누적
        result += i;
    
        // i(0)부터 number1 - 1까지 , 를 붙여야 하므로 이에 대한 코드 필요
        // i가 number1 - 1 보다 작다면
        // = 마지막 원소 대입 전까지 , 추가
        if (i < number1 - 1)
        {
          result += ', ';
        }
        // 그게 아니라면
        // 마지막 원소 대입 시, . 추가
        else if (i == number1)
        {
          result += '.';
        }
        }
    }
    // 해당 문자열 반환
    return result;
}

// even1 변수 선언과 동시에 getEven(10) 함수 호출
var even1 = getEven(10);
// 해당 결과값 출력
console.log(even1);

/*
### Quest 2.
1) getStar 이라는 함수를 선언하고, 1개의 매개변수(숫자)를 지정합니다.
2) 입력된 전달인자가 숫자가 아닌 경우 '숫자만 입력가능합니다.’ 라는 문구가 console 에 출력되고 false 를 반환합니다.
3) 입력된 전달인자의 숫자인 경우 전달인지의 수만큼 '*' 가 반복되는 문자열을 반환합니다.
4) star1 변수를 선언하고 getStar("text") 의 반환값을 할당받아 아래의 결과값과 같이 console 에 출력되도록 작성합니다.
5) star2 변수를 선언하고 getStar(5) 의 반환값을 할당받아 아래의 문자열 결과값과 같이 console 에 출력되도록 작성합니다.

```
함수 호출 예시)

getStar("text") 를 호출하여 반환하고 변수를 출력한 결과값 : false
getStar(5) 를 호출하여 반환하고 변수를 출력한 결과값 : *****
```
*/
// Answer 2.
// 함수 getStar 선언 후 매개변수(숫자) 지정
function getStar(number2)
{
    // 입력된 전달인자의 데이터 타입이 숫자가 아닌 경우,
    if (typeof number2 !== "number")
    {
        // '숫자만 입력가능합니다.’ 라는 문구가 console에 출력되고
        console.log("숫자만 입력가능합니다.");
        // false를 반환합니다.
        return false;
    }
    // 입력된 전달인자가 숫자인 경우,
    if (typeof number2 === "number")
    {
        // 문자열을 담을 변수 result 선언
        var result = "";
        // 전달인자의 수만큼 "*"가 반복되는 문자열을 반환합니다.
        // i를 선언과 동시에 0으로 초기화 후,
        // i가 number2보다 작은 동안 실행 후 i를 1씩 증가
        for (i = 1; i <= number2; i++)
        {
            // 반복하는 동안 *를 result에 누적 기입
            result += "*";
        }
        // 해당 문자열의 결과값을 반환합니다.
        return result;
    }
}

// star1 변수를 선언 후, getStar("text") 함수 호출
var star1 = getStar("text");
// 반환값을 할당받아 출력
console.log(star1);
// getStar(5) 함수 호출
var star1 = getStar(5);
// 반환값을 할당받아 출력
console.log(star1);
    
/*
### Quest 3.
1) 'Apple', 'Orange', 'Grape', 'Melon' 를 요소로 가지는 fruit 라는 이름의 배열 객체를 생성합니다.
2) 'Mango' 를 fruit 배열 객체의 앞에 추가합니다.
3) fruit 배열 객체의 ‘Orange' 요소 순서 뒤에 'Cherry' 요소를 추가합니다.
4) fruit 배열 객체의 요소 순서를 반대로 변경하고 console 에 배열이 출력되도록 작성합니다.
*/

// Answer 3.
// 'Apple', 'Orange', 'Grape', 'Melon' 를 요소로 가지는 fruit 라는 이름의 배열 객체를 생성
var fruit = ['Apple', 'Orange', 'Grape', 'Melon'];
// 'Mango'를 fruit 배열 객체의 앞에 추가
fruit.unshift('Mango');
// fruit 배열 객체의 ‘Orange' 요소 순서 뒤에 'Cherry' 요소를 추가
fruit.splice(3, 0, 'Cherry');
// fruit 배열 객체의 요소 순서를 반대로 변경
fruit.reverse();
// 배열 출력
console.log(fruit);

/*
### Quest 4.
1) getSize 라는 함수를 선언합니다.
2) 윈도우 콘텐츠 영역의 넓이값과 높이값을 아래 객체 형식과 같이 반환합니다.
3) winSize 변수를 선언하고 getSize() 의 반환값을 할당받습니다.
4) 아래의 문자열 결과값과 같이 console 에 출력되도록 작성합니다.

```
출력 예시)

객체 형식 : { winWidth : __윈도우 콘텐츠 영역의 넓이값__, winHeight : __윈도우 콘텐츠 영역의 높이값__ }
문자열 결과값 : 윈도우 콘텐츠의 영역 width : ____ px, height : ____ px 입니다.
```
*/

// Answer 4.
// getSize 함수 선언
function getSize()
{
    // 윈도우 콘텐츠 영역의 넓이값과 높이값을 아래 객체 형식으로 선언
 var winwidth = window.innerWidth, winHeight = window.innerHeight;
 var result = "윈도의 콘텐츠의 영역 width : " + winwidth + "px, height :" + winHeight + "px입니다."
 return result;
}
 // winSize 변수 선언
 var winSize = getSize();
 // 결과값 출력
 console.log(winSize);