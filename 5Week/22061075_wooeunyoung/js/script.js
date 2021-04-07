console.log("JavaScript 로드");

/*
문제 풀이.
*/

/*
Quest 1.
1. getEven 이라는 함수를 선언하고, 1개의 매개변수(숫자)를 지정합니다.
2. 입력된 전달인자의 숫자를 기준으로 0부터 해당하는 수까지 짝수만 구분하여 아래 형식의 문자열로 반환합니다.
3. even1 변수를 선언하고 getEven(10) 의 반환값을 할당받아 아래의 문자열 결과값과 같이 console 에 출력되도록 작성합니다.
 
----------
함수 호출 예시)

반환 문자열 형식 : "짝수, 짝수, … 짝수, 짝수."
getEven(10) 를 호출하여 반환하고 변수를 출력한 결과값 : 2, 4, 6, 8, 10.
----------
*/
// Answer 1.

function getEven (num) {
    var result = "";
    for(var i = 0; i <= num; i++){     // 초기값 0을 주고, i가 num보다 작거나 같으면 작동 후 i에 1을 추가한다.
        if(i % 2 == 0 && i != 0){      // i를 2로 나눈 것이 0과 같고, i가 0이 아닐때
            result += i;
            if(i < num){               // i값이 num보다 작으면 ', '을 추가하고,
                result += ', ';
            } else {                   // 아니면 '.'을 추가한다.
                result += '.';
            }
        }
    }
    return result;
}

var even1 = getEven(10);
console.log(even1);     // 2, 4, 6, 8, 10.


/*
Quest 2.
1. getStar 이라는 함수를 선언하고, 1개의 매개변수(숫자)를 지정합니다.
2. 입력된 전달인자가 숫자가 아닌 경우 '숫자만 입력가능합니다.’ 라는 문구가 console 에 출력되고 false 를 반환합니다.
3. 입력된 전달인자의 숫자인 경우 전달인지의 수만큼 '*' 가 반복되는 문자열을 반환합니다.
4. star1 변수를 선언하고 getStar("text") 의 반환값을 할당받아 아래의 결과값과 같이 console 에 출력되도록 작성합니다.
5. star2 변수를 선언하고 getStar(5) 의 반환값을 할당받아 아래의 문자열 결과값과 같이 console 에 출력되도록 작성합니다.

----------
함수 호출 예시)

getStar("text") 를 호출하여 반환하고 변수를 출력한 결과값 : false
getStar(5) 를 호출하여 반환하고 변수를 출력한 결과값 : *****
----------
*/
// Answer 2.

function getStar (num1) {
    var result2 = "";
    if(typeof num1 !== "number"){                // num1의 타입이 숫자가 아니면
        console.log('숫자만 입력가능합니다.');   // '숫자만 입력가능합니다.' 라는 문구를 출력하고,
        return false;
    }else if(typeof num1 === "number"){          // num1의 타입이 숫자이면
        for(i = 0; i < num1; i++){               // for반복문을 이용해 초기값 0을 주고, i가 num1보다 작으면 작동 후 i에 1을 추가해서
            result2 += '*';                      // 그 수만큼 '*'가 반복되게 한다.
        }
    }
    return result2;
}

var star1 = getStar("text");
console.log(star1);    // false

var star2 = getStar(5);
console.log(star2);    // *****



/*
Quest 3.
1. 'Apple', 'Orange', 'Grape', 'Melon' 를 요소로 가지는 fruit 라는 이름의 배열 객체를 생성합니다.
2. 'Mango' 를 fruit 배열 객체의 앞에 추가합니다.
3. fruit 배열 객체의 ‘Orange' 요소 순서 뒤에 'Cherry' 요소를 추가합니다.
4. fruit 배열 객체의 요소 순서를 반대로 변경하고 console 에 배열이 출력되도록 작성합니다.


----------
*/
// Answer 3.

var fruit = ['Apple', 'Orange', 'Grape', 'Melon'];
fruit.unshift('Mango');           // 맨 앞쪽에 원소 추가
fruit.splice(3, 0, 'Cherry');     // (시작지점, 삭제할 원소, 추가할 원소)
fruit.reverse();                  // 원소를 반대로 정렬
console.log(fruit);




/*
Quest 4.
1. getSize 라는 함수를 선언합니다.
2. 윈도우 콘텐츠 영역의 넓이값과 높이값을 아래 객체 형식과 같이 반환합니다.
3. winSize 변수를 선언하고 getSize() 의 반환값을 할당받습니다.
4. 아래의 문자열 결과값과 같이 console 에 출력되도록 작성합니다.

----------
함수호출 예시)

객체 형식 : { winWidth : __윈도우 콘텐츠 영역의 넓이값__, winHeight : __윈도우 콘텐츠 영역의 높이값__ }
문자열 결과값 : 윈도우 콘텐츠의 영역 width : ____ px, height : ____ px 입니다.
----------
*/
// Answer 4.

function getSize () {
    var winWidth = window.innerWidth;          
    var winHeight = window.innerHeight;
    var result3 = "윈도우 콘텐츠의 영역 width : "  + winWidth + " px, height : " + winHeight + " px 입니다."
    return result3;
}

var winSize = getSize();
console.log(winSize);   // 윈도우 콘텐츠의 영역 width : 516 px, height : 736 px 입니다.




