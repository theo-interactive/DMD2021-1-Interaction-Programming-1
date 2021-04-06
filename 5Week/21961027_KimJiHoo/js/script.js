

/*
1) getEven 이라는 함수를 선언하고, 1개의 매개변수(숫자)를 지정합니다.

2) 입력된 전달인자의 숫자를 기준으로 0부터 해당하는 수까지 짝수만 구분하여 아래 형식의 문자열로 반환합니다.

3) even1 변수를 선언하고 getEven(10) 의 반환값을 할당받아 아래의 문자열 결과값과 같이 console 에 출력되도록 작성합니다.



함수 호출 예시)

반환 문자열 형식 : "짝수, 짝수, … 짝수, 짝수."
getEven(10) 를 호출하여 반환하고 변수를 출력한 결과값 : 2, 4, 6, 8, 10. 


*/


function geteven(number1) { // 함수 선언 후 숫자 매개변수 지정

    var result = ""; // 반환시킬 문자열 넣을 변수 지정

    for (i = 0; i <= number1; i++) { // 0에서부터 전달인자까지 도는 반복문 작성
        if (i % 2 == 0 && i != 0) { // i가 0이 아니고, 짝수일 때만 실행되는 if문
            result += "짝수" // 짝수 문자열 덧붙임

            if (i < number1) {
                result += ", "; // 맨 마지막 반복문이 아닐 때만 쉼표를 뒤에 붙임
            }
            else{
                result += "."; // 맨 마지막 반복문일 때는 마침표를 덧붙임
            }
            console.log(i);
        }

    }

    return result; // 반복문의 결과값을 반환
}

var even1 = geteven(10); // 0에서 10까지의 짝수를 출력함
console.log(even1); // 짝수, 짝수, 짝수, 짝수, 짝수
// log에 2,4,6,8,10 출력(문자열과 동시에 출력하는 법은 이것 말고 모르겠습니당.....), 문제 해결....?


/* 

/* ### Quest 2.
1) getStar 이라는 함수를 선언하고, 1개의 매개변수(숫자)를 지정합니다.
2) 입력된 전달인자가 숫자가 아닌 경우 '숫자만 입력가능합니다.’ 라는 문구가 console 에 출력되고 false 를 반환합니다.
3) 입력된 전달인자의 숫자인 경우 전달인지의 수만큼 '*' 가 반복되는 문자열을 반환합니다.
4) star1 변수를 선언하고 getStar("text") 의 반환값을 할당받아 아래의 결과값과 같이 console 에 출력되도록 작성합니다.
5) star2 변수를 선언하고 getStar(5) 의 반환값을 할당받아 아래의 문자열 결과값과 같이 console 에 출력되도록 작성합니다.


getStar("text") 를 호출하여 반환하고 변수를 출력한 결과값 : false
getStar(5) 를 호출하여 반환하고 변수를 출력한 결과값 :  

*/

function getStar(number2){ // 1개의 숫자 매개변수를 받는 함수 선언

    var result2 = '';

    if(typeof number2 !== "number") // 전달인자의 자료형이 숫자 타입이 아니면
    {
        console.log("숫자만 입력 가능합니다."); // 메세지 출력 후 false 반환
        return false;
    }
    else if (typeof number2 === "number"){   // 전달인자가 숫자타입이면

        for(i = 0; i < number2; i++){ // 전달인자의 값의 크기만큼 *를 추가(전달인자의 수만큼 *가 반복), (i가 0인 상태에서 전달인자보다 1작을 때 까지 반복문 돌리면 전달인자 값의 크기만큼 돔) 
             result2 += '*';
        }

        return result2; // 반복문을 돌려 나온 값을 반환.
       
    }
}

var star1;
var star2; // 출력될 변수 선언

star1 = getStar("Text");
star2 = getStar(5); 

console.log(star1); // 숫자만 입력 가능합니다, false가 출력
console.log(star2); // ****** 가 출력, 문제 해결!


/*
### Quest 3.
1) 'Apple', 'Orange', 'Grape', 'Melon' 를 요소로 가지는 fruit 라는 이름의 배열 객체를 생성합니다.
2) 'Mango' 를 fruit 배열 객체의 앞에 추가합니다.
3) fruit 배열 객체의 ‘Orange' 요소 순서 뒤에 'Cherry' 요소를 추가합니다.
4) fruit 배열 객체의 요소 순서를 반대로 변경하고 console 에 배열이 출력되도록 작성합니다. 
*/ 

var fruit = ['Apple', 'Orange', 'Grape', 'Melon']; // fruit 배열 객체 생성

fruit.unshift('Mango'); // 배열의 앞에 'Mango' 원소 추가

fruit.splice(3,0, 'Cherry'); // 'Orange' 순서 뒤('Mango'가 추가되어서 3번째)에 'Cherry' 추가 

fruit.reverse(); // 요소 순서를 반대로 변경(뒤집음)
console.log(fruit); // 배열 출력, 문제 해결!


/*

### Quest 4.
1) getSize 라는 함수를 선언합니다.
2) 윈도우 콘텐츠 영역의 넓이값과 높이값을 아래 객체 형식과 같이 반환합니다.
3) winSize 변수를 선언하고 getSize() 의 반환값을 할당받습니다.
4) 아래의 문자열 결과값과 같이 console 에 출력되도록 작성합니다. 

출력 예시)

객체 형식 : { winWidth : __윈도우 콘텐츠 영역의 넓이값__, winHeight : __윈도우 콘텐츠 영역의 높이값__ }
문자열 결과값 : 윈도우 콘텐츠의 영역 width : ____ px, height : ____ px 입니다.


*/

function getSize(){ // 함수 선언

    var result = 
    {winWidth : window.innerWidth,
    winHeight : window.innerHeight}; // 객체 형식에 맞춰 값 넣기 - 윈도우 콘텐츠(내부 영역)의 넓이와 높이값

    console.log("윈도우 콘텐츠의 영역 width : " + result.winWidth + "px, height : " + result.winHeight + "px 입니다."); // 결과에 맞게 문자열이 출력되도록 만듬.

    return result; // 완성된 문자열 값을 반환
}

var winSize = getSize();
console.log(winSize); // 윈도우 콘텐츠의 넓이값과 높이값이 출력, 문제 해결!