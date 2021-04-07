
// Quest 1.
// 1. getEven 이라는 함수를 선언하고, 1개의 매개변수(숫자)를 지정합니다.
// 2. 입력된 전달인자의 숫자를 기준으로 0부터 해당하는 수까지 짝수만 구분하여 아래 형식의 문자열로 반환합니다.
// 3. even1 변수를 선언하고 getEven(10) 의 반환값을 할당받아 아래의 문자열 결과값과 같이 console 에 출력되도록 작성합니다.

// 함수 호출 예시)
// 반환 문자열 형식 : "짝수, 짝수, … 짝수, 짝수."
// getEven(10) 를 호출하여 반환하고 변수를 출력한 결과값 : 2, 4, 6, 8, 10.

// Answer 1
function getEven(number1) //getEven이라는 함수를 선언하고 매개변수를 지정합니다
{
    var result = "";
    for (i = 0; i<= number1; i++){
        if (i % 2 === 0 && i != 0){ /// 0 을 포함하지 않는 짝수일 경우일 때
            result += i;
            if(i < number1 -1){ // 만약 i가 number1 -1보다 같거나 작을 경우
                result += ',';
            }
            else{
                result +='.';
            }

        }
    }
    return result;

}
var even1 = getEven(10);
console.log(even1); //2 , 4, 6 ,8 ,10


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

function getStar(number2) // getStar 이라는 함수를 선언하고 매개변수를 지정합니다.
{
    var star = ",";
    if (typeof number2 !== "number"){ // 전달인자가 숫자가 아닌 경우일 떄
        console.log("숫자만 입력가능합니다") // 숫자만 입력가능합니다. 출력
        result1 = false; // false 를 반환합니다.
    }
    else if (typeof number2 !== "number"){ //입력된 전달인자가 숫자인 경우일 떄 
        for (i = 0; i< number2 ; i++){
            result = '*';
        }
        return result; // result 를 반환합니다.
    }
}
var star1 = getStar("text");
console.log(star1); // false

var star2 = getStar("5");
console.log(star2); // *****



// ### Quest 3.
// 1) 'Apple', 'Orange', 'Grape', 'Melon' 를 요소로 가지는 fruit 라는 이름의 배열 객체를 생성합니다.
// 2) 'Mango' 를 fruit 배열 객체의 앞에 추가합니다.
// 3) fruit 배열 객체의 ‘Orange' 요소 순서 뒤에 'Cherry' 요소를 추가합니다.
// 4) fruit 배열 객체의 요소 순서를 반대로 변경하고 console 에 배열이 출력되도록 작성합니다.

// Answer 3.

var fruit = ['Apple', 'Orange', 'Grape', 'Melon'];

fruit.unshift('Mango'); // 'Mango'를 fruit 배열 객체 앞에 추가합니다
fruit.splice(3, 0, 'Cherry'); // 'Orange' 요소 순서 뒤에 'Cherry' 요소를 추가합니다
fruit.reverse(); // fruit 배열 객체의 요소 순서를 반대로 변경합니다

console.log(fruit); // "Melon", "Grape", "Cherry", "Orange", "Apple", "Mango"

// ### Quest 4.
// 1) getSize 라는 함수를 선언합니다.
// 2) 윈도우 콘텐츠 영역의 넓이값과 높이값을 아래 객체 형식과 같이 반환합니다.
// 3) winSize 변수를 선언하고 getSize() 의 반환값을 할당받습니다.
// 4) 아래의 문자열 결과값과 같이 console 에 출력되도록 작성합니다.

// 객체 형식 : { winWidth : __윈도우 콘텐츠 영역의 넓이값__, winHeight : __윈도우 콘텐츠 영역의 높이값__ }
// 문자열 결과값 : 윈도우 콘텐츠의 영역 width : ____ px, height : ____ px 입니다.

// Answer 4.

function getSize(){
    var winWidth = window.innerWidth; // 윈도우 콘텐츠의 넓이값을 넣어줍니다.
    var winHeight = Window.innerHeight; // 윈도우 콘텐츠의 높이값을 넣어줍니다.
    var result = '윈도우 콘텐츠의 영역 width : ' + winWidth + 'px' + ', height : ' + winHeight + 'px 입니다.';
    return result;

}


var winSize = getSize();
console.log(winSize); 
