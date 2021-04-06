console.log("javascript 로드");

// Quest 1.
// 1. getEven 이라는 함수를 선언하고, 1개의 매개변수(숫자)를 지정합니다.
// 2. 입력된 전달인자의 숫자를 기준으로 0부터 해당하는 수까지 짝수만 구분하여 아래 형식의 문자열로 반환합니다.
// 3. even1 변수를 선언하고 getEven(10) 의 반환값을 할당받아 아래의 문자열 결과값과 같이 console 에 출력되도록 작성합니다.

// 함수 호출 예시)
// 반환 문자열 형식 : "짝수, 짝수, … 짝수, 짝수."
// getEven(10) 를 호출하여 반환하고 변수를 출력한 결과값 : 2, 4, 6, 8, 10.

// Answer 1.

var even1 = getEven(10); // getEven(10)의 반환값을 할당받는 변수 even1 선언
console.log(even1); // even1 출력

// 처음 작성 코드
// function getEven (number) // 숫자형 매개변수를 지정한 getEven 함수 선언 {

//     var returnNumber = []; // 전달인자 값 까지의 숫자를 받아올 수 있는 배열 returnNumber 선언
//     var sayNumber = ''; // returnNumber의 숫자값을 string 값으로 받아오는 변수 sayNumber 선언


//     for (i = 1; i <= number; i++) // 1부터 전달인자 값까지 {

//         if (i % 2 == 0) // 현재 사이클의 숫자가 짝수일 시{
//             returnNumber.push(i); // 배열 returnNumber에 현재 사이클의 숫자 추가
//         }

//     }

//     for (var i in returnNumber) // 배열 returnNumber의 첫번째부터 마지막 값까지{
//         sayNumber += returnNumber[i]; // 변수 sayNumber에 returnNumber의 값 사이클 순서별로 대입

//         if ((0 <= i) && (i < returnNumber.length - 1)) // 현재 사이클의 숫자가 0보다 크거나 같고 returnNumber의 길이보다 작을 때{
//             sayNumber += ', '; // 변수 sayNumber에 ', ' 추가
//         }

//         if (i == returnNumber.length - 1) // 현재 사이클의 숫자가 returnNumber의 마지막 순서일 때{
//             sayNumber += '.'; // 변수 sayNumber에 '.' 추가
//         }
//     }
    

//     return sayNumber; // sayNumber 값 반환
// }

// 간략화
function getEven (number) // 숫자형 매개변수를 지정한 getEven 함수 선언
{
    var sayNumber = ''; // string 형 변수 sayNumber 선언

    for (i = 1; i <= number; i++) // 1 부터 전달인자의 값 까지
    {
        if ((i % 2 == 0) && (i < number)) // 현재 사이클의 숫자가 짝수이고 전달인자의 값보다 작을 때 (마지막 값이 아닐 때)
        {
            sayNumber += i + ', '; // sayNumber에 현재 사이클의 숫자와 ', ' 추가
        }

        if ((i % 2 == 0) && (i == number)) // 현재 사이클의 숫자가 짝수이고 전달인자의 값일 때 (마지막 값일 때)
        {
            sayNumber += i + '.'; // sayNumber에 현재 사이클의 숫자와 '.' 추가
        }
    }

    return sayNumber; // sayNumber 값 반환
}



// Quest 2.
// getStar 이라는 함수를 선언하고, 1개의 매개변수(숫자)를 지정합니다.
// 입력된 전달인자가 숫자가 아닌 경우 '숫자만 입력가능합니다.’ 라는 문구가 console 에 출력되고 false 를 반환합니다.
// 입력된 전달인자의 숫자인 경우 전달인지의 수만큼 '*' 가 반복되는 문자열을 반환합니다.
// star1 변수를 선언하고 getStar("text") 의 반환값을 할당받아 아래의 결과값과 같이 console 에 출력되도록 작성합니다.
// star2 변수를 선언하고 getStar(5) 의 반환값을 할당받아 아래의 문자열 결과값과 같이 console 에 출력되도록 작성합니다.

// 함수 호출 예시)
// getStar("text") 를 호출하여 반환하고 변수를 출력한 결과값 : false
// getStar(5) 를 호출하여 반환하고 변수를 출력한 결과값 : *****

// Answer 2.

function getStar(number) // 숫자형 매개변수를 지정한 함수 getStar 선언
{
    var star = ''; // string 형 변수 star 선언

    if (typeof number == 'number') // 전달인자의 데이터 형이 숫자일 경우
    {
        for (i = 0; i < number; i++) // 0부터 현재 전달인자의 값까지
        {
            star += '*'; // star에 별 추가
        }
        return star; // 변수 star 반환
    }

    else // 전달인자의 데이터 형이 숫자가 아닐 경우
    {
        console.log('숫자만 입력가능합니다.'); // '숫자만 입력가능합니다.' 문구 출력
        return false; // false 반환
    }

}

var star1 = getStar("text"); // getStar("text")의 반환값을 받아오는 변수 star1 선언
console.log(star1); // star1 출력

star1 = getStar(5); // getStar(5)의 반환값을 받아오는 변수 star1
console.log(star1); // star1 출력



// Quest 3.
// 'Apple', 'Orange', 'Grape', 'Melon' 를 요소로 가지는 fruit 라는 이름의 배열 객체를 생성합니다.
// 'Mango' 를 fruit 배열 객체의 앞에 추가합니다.
// fruit 배열 객체의 ‘Orange' 요소 순서 뒤에 'Cherry' 요소를 추가합니다.
// fruit 배열 객체의 요소 순서를 반대로 변경하고 console 에 배열이 출력되도록 작성합니다.

// Answer 3.
var fruit = ['Apple', 'Orange', 'Grape', 'Melon']; // 'Apple', 'Orange', 'Grape', 'Melon' 를 요소로 가지는 fruit 라는 이름의 배열 객체 생성

fruit.unshift('Mango'); // 'Mango'를 fruit 배열 객체 앞에 추가
fruit.splice(3, 0, 'Cherry'); // 'Cherry' 요소를 'Orange' 요소 순서 뒤에 추가
fruit.reverse(); // fruit 배열 객체의 요소 순서를 반대로

console.log(fruit); // fruit 배열 출력



// Quest 4.
// getSize 라는 함수를 선언합니다.
// 윈도우 콘텐츠 영역의 넓이값과 높이값을 아래 객체 형식과 같이 반환합니다.
// winSize 변수를 선언하고 getSize() 의 반환값을 할당받습니다.
// 아래의 문자열 결과값과 같이 console 에 출력되도록 작성합니다.

// 출력 예시)
// 객체 형식 : { winWidth : __윈도우 콘텐츠 영역의 넓이값__, winHeight : __윈도우 콘텐츠 영역의 높이값__ }
// 문자열 결과값 : 윈도우 콘텐츠의 영역 width : ____ px, height : ____ px 입니다.

// Answer 4.
function getSize() // getSize 함수 선언 
{
    var widthAndHeight =
    // 객체 widthAndHeight 선언
    {
        winWidth : window.innerWidth, // winWidth : 윈도우 콘텐츠 영역의 넓이값
        winHeight : window.innerHeight // winHeight : 윈도우 콘텐츠 영역의 높이값
    }
    
    return "윈도우 콘텐츠의 영역 width : " + widthAndHeight.winWidth + "px, height : " + widthAndHeight.winHeight + "px 입니다."; // 문자열 결과값 반환
}

var winSize = getSize(); // getSize()의 반환값을 받아오는 변수 winSize 선언
console.log(winSize); // winSize 출력