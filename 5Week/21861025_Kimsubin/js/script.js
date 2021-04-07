// 5주차 과제입니다.

/*
'학번_이름(반드시 영문으로 표기)' 폴더를 생성하고 'index.html' 파일(파일생성시 영문으로 표기)을 생성하고 js 폴더 생성, 폴더 내부에 script.js 파일을 생성합니다. 반드시 index.html 에 외부 js 파일을 로드하여 작성합니다.
*/

/*
Quest 1.
getEven 이라는 함수를 선언하고, 1개의 매개변수(숫자)를 지정합니다.
입력된 전달인자의 숫자를 기준으로 0부터 해당하는 수까지 짝수만 구분하여 아래 형식의 문자열로 반환합니다.
even1 변수를 선언하고 getEven(10) 의 반환값을 할당받아 아래의 문자열 결과값과 같이 console 에 출력되도록 작성합니다.
*/

/*
함수 호출 예시)

반환 문자열 형식 : "짝수, 짝수, … 짝수, 짝수."
getEven(10) 를 호출하여 반환하고 변수를 출력한 결과값 : 2, 4, 6, 8, 10.
*/

// 호출 예시 분석
// 첫 짝수 시작은 2 부터
// 짝수가 뒤에 더 나올경우 , 표시 / 마지막 짝수 다음에는 . 표시 입력

var result1 = '';
var text;
// getEven 함수를 선언 (숫자형 매개변수 1개 지정)
function getEven(num1){
    // 0부터 입력된 숫자까지 모든 수가 언급되도록
    for(i = 0; i <= num1; i++){
        // 0부터 입력된 숫자까지의 모든 수 중에서 짝수만 나오도록
        // 짝수 = 2로 나눴을 때, 나머지가 0이 나오는 수 이면서 숫자가 0이 아닌 수 일 때
        if(i % 2 === 0 && i != 0){
            result1 += i;
            // 그 값을 "짝수" 라고 설정
            // text += "짝수"

            // i의 값이 num1 - 1보다 작을 때 ", "를 더함
            // i < num1 일 경우 마지막 10 다음에도 , 가 붙음
            // 반복문의 i++ 때문에 -1 를 해야하는거 같다
            if(i < num1 - 1){
                result1 += ", ";
                // text += ", ";
            }
            else{
                // 위의 조건에 해당되지 않을 경우 (마지막으로 반복된 수)
                result1 += "."
                // text += "."
            }
        }
    }
    // console.log(text);
    return result1;
}

var even1 = getEven(10);
console.log(even1); // 2, 4, 6, 8, 10.

// 반복문을 통해 0 부터 해당 값까지의 모든 수를 언급
// 조건문을 통해 0을 제외한 수 중에서 2로 나눴을 때, 나머지가 0인 수 설정
// 조건에 맞는 숫자가 나왔을 경우 문자열 형식 "짝수"로 변환
// 나온 짝수를 별도의 변수에 값으로 할당 받고 콘솔창에 출력

// 함수 호출 예시처럼 2, 4, 6, 8, 10. 은 완료했지만
// "짝수, 짝수, 짝수, 짝수, 짝수."는 나오지 않고 undefined짝수, 짝수, 짝수, 짝수, 짝수. 가 나왔습니다.
// 이부분을 어떻게 해야하는지 문제를 이해하지 못했습니다.

/*
Quest 2.
getStar 이라는 함수를 선언하고, 1개의 매개변수(숫자)를 지정합니다.
입력된 전달인자가 숫자가 아닌 경우 '숫자만 입력가능합니다.’ 라는 문구가 console 에 출력되고 false 를 반환합니다.
입력된 전달인자의 숫자인 경우 전달인지의 수만큼 '*' 가 반복되는 문자열을 반환합니다.
star1 변수를 선언하고 getStar("text") 의 반환값을 할당받아 아래의 결과값과 같이 console 에 출력되도록 작성합니다.
star2 변수를 선언하고 getStar(5) 의 반환값을 할당받아 아래의 문자열 결과값과 같이 console 에 출력되도록 작성합니다.
*/

/*
함수 호출 예시)

getStar("text") 를 호출하여 반환하고 변수를 출력한 결과값 : false
getStar(5) 를 호출하여 반환하고 변수를 출력한 결과값 : *****
*/

// var result2 = '';
// result2 변수를 전역에 사용 할 경우 첫 if 조건문에서 result2 = false로 변환되므로 별도의 result2 변수 지정
// false // flase***** 로 출력

// 함수 gerStar 선언 (매개변수1)
function getStar(num2){
    // 조건1. 매개변수1의 타입이 숫자가 아닐경우
    if(typeof num2 != "number"){
        var result2 = '';
        // 숫자만 입력가능합니다. 출력
        console.log('숫자만 입력가능합니다.');
        // alert('숫자만 입력가능합니다.');
        // 출력 후 result2 값을 false로 변경
        result2 = false;
    }
    else{
        // 조건2. 조건1에 해당되지 않을 때 (매개변수1의 타입이 숫자일 경우)
        var result2 = '';
        // i가 매개변수1보다 작을때 반복된다
        for(i = 0; i < num2; i++){
            // + * 의 값이 result2에 적용되고 반복조건이 일치하지 않을 때까지 반복
            result2 += '*';
        }
    }
    // 바뀐 result2 의 값을 리턴시켜 반환
    return result2;
}

var star1 = getStar("text");
console.log(star1); // 숫자만 입력가능합니다. // flase
var star2 = getStar(5);
console.log(star2); // 숫자만큼 * 출력 // *****

/*
Quest 3.
'Apple', 'Orange', 'Grape', 'Melon' 를 요소로 가지는 fruit 라는 이름의 배열 객체를 생성합니다.
'Mango' 를 fruit 배열 객체의 앞에 추가합니다.
fruit 배열 객체의 ‘Orange' 요소 순서 뒤에 'Cherry' 요소를 추가합니다.
fruit 배열 객체의 요소 순서를 반대로 변경하고 console 에 배열이 출력되도록 작성합니다.
*/

var fruit = ['Apple', 'Orange', 'Grape', 'Melon'];

// unshift 배열의 맨앞에 추가
fruit.unshift('Mango');
console.log(fruit); // ['Mango', 'Apple', 'Orange', 'Grape', 'Melon'];
// splice 배열의 원하는 지점 추가.삭제 (시작지점, 삭제할 원소, 추가할 원소)
fruit.splice(3, 0, 'Cherry');
console.log(fruit); // ['Mango', 'Apple', 'Orange', 'Cherry', 'Grape', 'Melon'];
// reverse 배열을 거꾸로 변경
fruit.reverse();
console.log(fruit); // ["Melon", "Grape", "Cherry", "Orange", "Apple", "Mango"];

/*
Quest 4.
getSize 라는 함수를 선언합니다.
윈도우 콘텐츠 영역의 넓이값과 높이값을 아래 객체 형식과 같이 반환합니다.
winSize 변수를 선언하고 getSize() 의 반환값을 할당받습니다.
아래의 문자열 결과값과 같이 console 에 출력되도록 작성합니다.
*/

/*
출력 예시)

객체 형식 : { winWidth : __윈도우 콘텐츠 영역의 넓이값__, winHeight : __윈도우 콘텐츠 영역의 높이값__ }
문자열 결과값 : 윈도우 콘텐츠의 영역 width : ____ px, height : ____ px 입니다.
*/

// 함수 getSize 선언
function getSize(){
    result4 = '';
    // 객체 형식 : winWidth 윈도우 영역 넓이, winHeight 윈도우 영역의 높이 형태로 작성
    winWidth = window.innerWidth, winHeight = window.innerHeight;
    // 윈도우 콘텐츠의 영역 width : ____ px, height : ____ px 입니다.
    var result4 = "윈도우 콘텐츠의 영역 width : " + winWidth + "px, " + "height : " + winHeight + "px 입니다.";
    // 위의 result4 값을 리턴
    return result4;
}    

var winSize = getSize();
console.log(winSize); // 해당 페이지 윈도우 창의 크기에 따라 넓이값과 높이값이 변경된다.

