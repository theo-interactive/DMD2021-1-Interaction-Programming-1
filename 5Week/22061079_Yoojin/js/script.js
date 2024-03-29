// Quest 1.

// getEven 이라는 함수를 선언하고, 1개의 매개변수(숫자)를 지정합니다.
// 입력된 전달인자의 숫자를 기준으로 0부터 해당하는 수까지 짝수만 구분하여 아래 형식의 문자열로 반환합니다.
// even1 변수를 선언하고 getEven(10) 의 반환값을 할당받아 아래의 문자열 결과값과 같이 console 에 출력되도록 작성합니다.

// 함수 호출 예시)
// 반환 문자열 형식 : "짝수, 짝수, … 짝수, 짝수."
// getEven(10) 를 호출하여 반환하고 변수를 출력한 결과값 : 2, 4, 6, 8, 10.

function getEven(num1) // getEven 함수 선언 후 숫자 매개변수 num1 지정
    {
        var even = ""; // 짝수를 담을 변수 even 선언
        for (var i = 0; i <= num1; i++) // 0부터 num1이 될때까지 for문을 반복
        {
            if (i % 2 === 0 && i != 0) // 짝수일 경우 설정 (나누기 후 나머지 값이 0인 정수 = 짝수)
            {
                even += i; 
                if ( i < num1 )
                {
                    even += ', '; // 홀수는 ,로 출력하여 표시되지 않게 함
                }
                else 
                {
                    even += '. '; // num1까지 왔을 경우 .을 찍어 마무리되도록 설정
                }
            }
        }
        return even; // 리턴하여 결과값 산출
    }

    var Even = getEven(20); // 변수 Even 선언 후 getEven(20) 의 반환값을 할당
    console.log(Even);
    // 2, 4, 6, 8, 10, 12, 14, 16, 18, 20.

// Quest 2.

// getStar 이라는 함수를 선언하고, 1개의 매개변수(숫자)를 지정합니다.
// 입력된 전달인자가 숫자가 아닌 경우 '숫자만 입력가능합니다.’ 라는 문구가 console 에 출력되고 false 를 반환합니다.
// 입력된 전달인자의 숫자인 경우 전달인지의 수만큼 '*' 가 반복되는 문자열을 반환합니다.
// star1 변수를 선언하고 getStar("text") 의 반환값을 할당받아 아래의 결과값과 같이 console 에 출력되도록 작성합니다.
// star2 변수를 선언하고 getStar(5) 의 반환값을 할당받아 아래의 문자열 결과값과 같이 console 에 출력되도록 작성합니다.

// 함수 호출 예시)
// getStar("text") 를 호출하여 반환하고 변수를 출력한 결과값 : false
// getStar(5) 를 호출하여 반환하고 변수를 출력한 결과값 : *****
function getStar(num2) // getStar 함수 선언 후 1개의 매개변수 지정
    {
        var star = ""; // 결과값을 담을 변수 star를 지정
        if( typeof num2 !== 'number') // 전달인자가 숫자가 아닐 경우를 if문의 조건으로 삽입
        {
            console.log('숫자만 입력가능합니다.')
            return false; // '숫자만 입력가능합니다.' 문구 출력 후 false를 반환
        }
        else// 전달인자 = number type
        {
            for( i = 0; i < num2; i++)
            {
                star += '*'; // 숫자값 만큼 '*'가 출력됨
            }
            return star; // star를 반환
        }
    }
    var stars = getStar('hello');
    console.log(stars); // false
    var starss = getStar(3);
    console.log(starss); // ***

// Quest 3.

// 'Apple', 'Orange', 'Grape', 'Melon' 를 요소로 가지는 fruit 라는 이름의 배열 객체를 생성합니다.
// 'Mango' 를 fruit 배열 객체의 앞에 추가합니다.
// fruit 배열 객체의 ‘Orange' 요소 순서 뒤에 'Cherry' 요소를 추가합니다.
// fruit 배열 객체의 요소 순서를 반대로 변경하고 console 에 배열이 출력되도록 작성합니다.

var fruit = ['Apple', 'Orange', 'Grape', 'Melon']; // 배열객체 fruit 생성
fruit.unshift('Mango'); // 배열 객체의 앞에 Mango 요소 추가
fruit.splice(3, 0, 'Cherry'); // Orange는 맨 앞에 Mango가 들어가 3번째 순서이므로 3을 적어 그 뒤에 Cherry를 추가
fruit.reverse(); // 배열 객체 요소 순서를 뒤집음
console.log(fruit); // 출력 시 ["Melon", "Grape", "Cherry", "Orange", "Apple", "Mango"]

// Quest 4.

// getSize 라는 함수를 선언합니다.
// 윈도우 콘텐츠 영역의 넓이값과 높이값을 아래 객체 형식과 같이 반환합니다.
// winSize 변수를 선언하고 getSize() 의 반환값을 할당받습니다.
// 아래의 문자열 결과값과 같이 console 에 출력되도록 작성합니다.

// 출력 예시)
// 객체 형식 : { winWidth : __윈도우 콘텐츠 영역의 넓이값__, winHeight : __윈도우 콘텐츠 영역의 높이값__ }
// 문자열 결과값 : 윈도우 콘텐츠의 영역 width : ____ px, height : ____ px 입니다.

function getSize() // 함수 getSize 선언
    {
        var winWidth = window.innerWidth; // winWidth에 윈도우 콘텐츠 넓이값 삽입
        var winHeight = window.innerHeight; // winHeight에 윈도우 콘텐츠 높이값 삽입
        var sizeresult = '윈도우 콘텐츠의 영역 width : ' + winWidth + 'px,height : ' + winHeight + 'px 입니다.';
        return sizeresult; // sizeresult를 반환 
    }
    var winSize = getSize();
    console.log(winSize); // 윈도우 콘텐츠의 영역 width : 1196px,height : 814px 입니다.