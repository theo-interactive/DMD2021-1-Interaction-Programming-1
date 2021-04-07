/*
문제 풀이.
*/

/*
Quest 1.
getEven 이라는 함수를 선언하고, 1개의 매개변수(숫자)를 지정합니다.
입력된 전달인자의 숫자를 기준으로 0부터 해당하는 수까지 짝수만 구분하여 아래 형식의 문자열로 반환합니다.
even1 변수를 선언하고 getEven(10) 의 반환값을 할당받아 아래의 문자열 결과값과 같이 console 에 출력되도록 작성합니다.
----------
함수 호출 예시)

반환 문자열 형식 : "짝수, 짝수, … 짝수, 짝수."
getEven(10) 를 호출하여 반환하고 변수를 출력한 결과값 : 2, 4, 6, 8, 10.
*/
// Answer 1.
var b = ""; //문자열 만들어줄 변수
var c = ""; //문자열 만들어줄 변수
var EvenNumbers = "짝수, " //짝수 출력
var EvenNumbersEnd = "짝수." //짝수 출력 변수 마지막에 올
function getEven(a){ //매개변수 받아줄 준비

    if(a==10){ //a가 10일경우
        for(i=1;i<=10;i++){
            if(i%2==0){
                b += i+" ";
            }
        }
        return b; //값을 돌려준다.
    }
    else if(a){ //if 문을 거치고 남은 나머지
        for (i = 0; i <= a; i++) {
            if (i % 2 == 0) {
                for(i=1;i<a;i++){
                   c+=EvenNumbers //짝수 출력 을 c에 담는다.
                    var every = c + EvenNumbersEnd; //마지막 짝수 출력도 every에 담는다.
                }
            }
        }
        return every; //값을 돌려준다.
    }
}
var d = getEven(6); // 매개변수 담아서 돌려주는 값을 담는 변수
console.log(d); // 출력

var even1 = getEven(10); // 매개변수 담아서 돌려주는 값을 담는 변수
console.log(even1); // 출력


/*
Quest 2.
getStar 이라는 함수를 선언하고, 1개의 매개변수(숫자)를 지정합니다.
입력된 전달인자가 숫자가 아닌 경우 '숫자만 입력가능합니다.’ 라는 문구가 console 에 출력되고 false 를 반환합니다.
입력된 전달인자의 숫자인 경우 전달인지의 수만큼 '*' 가 반복되는 문자열을 반환합니다.
star1 변수를 선언하고 getStar("text") 의 반환값을 할당받아 아래의 결과값과 같이 console 에 출력되도록 작성합니다.
star2 변수를 선언하고 getStar(5) 의 반환값을 할당받아 아래의 문자열 결과값과 같이 console 에 출력되도록 작성합니다.

함수 호출 예시)

getStar("text") 를 호출하여 반환하고 변수를 출력한 결과값 : false
getStar(5) 를 호출하여 반환하고 변수를 출력한 결과값 : *****

*/
// Answer 2.
var star="*"; // 별 표시 변수
var sum = ""; //문자열 변수
function getStar(num){
    if(typeof num !== "number"){ //num 타입이 숫자가 아닐때
        console.log("숫자만 입력가능합니다");
        return false;
    }
    else if (typeof num === "number") { //num 타입이 숫자일때
        for(i=1;i<=num;i++){
            sum += star; //문자열 변수에 star값을 담는다.
        }
        return sum;
    }
}
var num1 = getStar(5);
console.log(num1);
getStar("io");


/*
Quest 3.
'Apple', 'Orange', 'Grape', 'Melon' 를 요소로 가지는 fruit 라는 이름의 배열 객체를 생성합니다.
'Mango' 를 fruit 배열 객체의 앞에 추가합니다.
fruit 배열 객체의 ‘Orange' 요소 순서 뒤에 'Cherry' 요소를 추가합니다.
fruit 배열 객체의 요소 순서를 반대로 변경하고 console 에 배열이 출력되도록 작성합니다.

*/
var fruit = ["Apple","Orange","Grape","Melon"]; //배열 생성
fruit.unshift("Mango"); // unshift로 맨앞에 mango추가
fruit.splice(3,0,"Cherry"); //splice로 mango합쳐진 값까지 합쳐서 3번째 공간에 하나도 지우지 않고 cherry추가
fruit.reverse(); //순서 반대로
console.log(fruit); //출력


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
// Answer 4

function getSize(){
    return sum;
}
var window1 = {winWidth : window.innerWidth, //객체 생성
               winHeight : window.innerHeight};
var sum = "윈도우 콘텐츠의 영역 width : "+window1.winWidth+"px, height : "+window1.winHeight+"px 입니다."; //window1.winWidth로 해야 경로가 올바르다
//그냥 winWidth로 하면 경로를 찾을수 없어서 오류로 뜬다.
var winSize = getSize();
console.log(winSize);