// Quest 1.

// getEven 이라는 함수를 선언하고, 1개의 매개변수(숫자)를 지정합니다.
// 입력된 전달인자의 숫자를 기준으로 0부터 해당하는 수까지 짝수만 구분하여 아래 형식의 문자열로 반환합니다.
// even1 변수를 선언하고 getEven(10) 의 반환값을 할당받아 아래의 문자열 결과값과 같이 console 에 출력되도록 작성합니다.
// 함수 호출 예시)

// 반환 문자열 형식 : "짝수, 짝수, … 짝수, 짝수."
// getEven(10) 를 호출하여 반환하고 변수를 출력한 결과값 : 2, 4, 6, 8, 10.

// function getEven(num) // getEven 이라는 함수 선언, 매개변수 (숫자 = num) 지정해줬습니다. 이전까지의 과제에서는 알파벳(a, b,...)으로 사용을 했는데 너무 불편해서 이제부터는 num, string, ... 단어들을 사용합니다..
//  {
//     var evenNum = ""; // 짝수만 구분하기 때문에 변수를 하나 만듭니다. 짝수라는 의미인 even number을 사용했습니다.
//     for(var i = 0; i <= 10; i++) { // for을 하나 생성합니다. 문제에 *0부터* *해당하는 수까지* 라고 적혀있으니 0부터 시작, 문제에 있는 10(= num)을 포함하는 식을 만듭니다.
//         // 저번에 사용했던 짝수만 구하는 방법을 이번에도 사용합니다.
//         if (i % 2 == 0 && i != 0) { // 어떠한 숫자를 2로 나눴을 때 나머지가 0이면 짝수. 하지만 0은 제외(포함하지 않음)로 작성합니다.
//             evenNum += "짝수" // 문자열 형식을 지정해줍니다.
//             if (i < num) { // 
//                 evenNum += ", "; // 뒤에 숫자가 나오면 쉼표를
//             }
//             else{
//                 evenNum += "."; // 마지막 순서일 때는 마침표를 사용합니다.
//                 console.log(i);
//             }
//         }
//             return evenNum; // 반복문의 결과값을 반환
// }
//             var evenNum = getEven(10); // 0에서 10까지 숫자를 출력합니다.

//             console.log(evenNum);

// Quest 2.

// getStar 이라는 함수를 선언하고, 1개의 매개변수(숫자)를 지정합니다.
// 입력된 전달인자가 숫자가 아닌 경우 '숫자만 입력가능합니다.’ 라는 문구가 console 에 출력되고 false 를 반환합니다.
// 입력된 전달인자의 숫자인 경우 전달인지의 수만큼 '*' 가 반복되는 문자열을 반환합니다.
// star1 변수를 선언하고 getStar("text") 의 반환값을 할당받아 아래의 결과값과 같이 console 에 출력되도록 작성합니다.
// star2 변수를 선언하고 getStar(5) 의 반환값을 할당받아 아래의 문자열 결과값과 같이 console 에 출력되도록 작성합니다.
// 함수 호출 예시)
// getStar("text") 를 호출하여 반환하고 변수를 출력한 결과값 : false
// getStar(5) 를 호출하여 반환하고 변수를 출력한 결과값 : *****

// function getStar(num1) // getStar 이라는 함수를 선언, 위와 겹치면 안되니 num1이라고 지정해줬습니다.
// {
//     var result = "";
//     if (typeof num1 !== "number") { // 이번에는 범위가 아닌 숫자 일때 *를 사용하고 숫자가 아닌경우 문구를 사용하기 때문에 typeof를 작성합니다.
//         // 숫자가 아닌 경우
//         console.log('숫자만 입력 가능합니다.'); // console에 문구 출력.

//         return false; // 그리고 false를 반환합니다.
//      }
//     else if (typeof num1 === "number") {  // 반대로 숫자일 경우
//         for (var i=1; i<=num1; i++){ // 범위는 입력된 전달인자의 수를 넘지 않도록 설정합니다.
//             result += '*'; // 전달인자의 수만큼 * 반복.
//         }
//     }
//     return result; // 그리고 result를 반환합니다.
//     }
// }
// var star1 = getStar("text"); // star1 변수 선언, getStar("text") 의 반환값을 할당.
// // 60번째 줄 부분에서 에러가 뜨면서 값이 나오질 않습니다. 에러가 나올 이유가 없을 것 같은데 원인을 못 찾겠습니다ㅠㅠ
// console.log(star1); 
// var star2 = getStar(5); // star2 변수를 선언, getStar(5) 의 반환값을 할당
// console.log(star2);

//하는 수 없이 다음 문제의 답을 봐야하기 때문에 주석처리 했습니다.

// Quest 3.

// 'Apple', 'Orange', 'Grape', 'Melon' 를 요소로 가지는 fruit 라는 이름의 배열 객체를 생성합니다.
// 'Mango' 를 fruit 배열 객체의 앞에 추가합니다.
// fruit 배열 객체의 ‘Orange' 요소 순서 뒤에 'Cherry' 요소를 추가합니다.
// fruit 배열 객체의 요소 순서를 반대로 변경하고 console 에 배열이 출력되도록 작성합니다.

// var fruit = ['Apple', 'Orange', 'Grape', 'Melon']; // 문제1번 첫번째 문장입니다!
// fruit.unshift('Mango'); // 객체의 앞에 추가는 unshift를 사용합니다.
// fruit.splice(3, 0, 'Cherry'); // splice를 사용해 원하는 자리에 요소를 넣습니다.
// fruit.reverse(); // reverse를 사용해 반대로 순서를 뒤집습니다.

// console.log(fruit); // 콘솔에 답이 뜹니다!

// Quest 4.

// getSize 라는 함수를 선언합니다.
// 윈도우 콘텐츠 영역의 넓이값과 높이값을 아래 객체 형식과 같이 반환합니다.
// winSize 변수를 선언하고 getSize() 의 반환값을 할당받습니다.
// 아래의 문자열 결과값과 같이 console 에 출력되도록 작성합니다.
// 출력 예시)

// 객체 형식 : { winWidth : __윈도우 콘텐츠 영역의 넓이값__, winHeight : __윈도우 콘텐츠 영역의 높이값__ }
// 문자열 결과값 : 윈도우 콘텐츠의 영역 width : ____ px, height : ____ px 입니다.

//자꾸 빨간 밑줄이 제일 마지막 문장 끝에 적혀집니다. ㅜㅠ
function getSize() {// 문제에 나와있는대로 getSize를 선언합니다.

    var winWidth = window.innerWidth; // 윈도우 콘텐츠의 넓이값.
    var winHeight = window.innerHeight; // 윈도우 콘텐츠의 높이값.
    var result = "윈도우 콘텐츠의 영역 width : " + winWidth + "px," + "height : " + winHeight + "px 입니다." // 문자열 결과값.
    return result; // result 반환.
}

var winSize = getSize() // winSize 변수를 선언, 위에서 나온 getSize의 반환값을 할당받습니다.
console.log(winSize); // 값을 알아보려하니 빨간 밑줄 때문에 오류가 생겨 하는 수 없이 위의 문제들을 전부 주석처리 했습니다ㅠㅠ
// 저는 width 400px, height 747px이 나옵니다.