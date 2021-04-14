/*
문제 풀이.
*/

/*
Quest 1.
1. 문서의 title을 '학번_이름' 으로 변경합니다.
*/
// Answer 1.
document.title = "21755074_전형욱"; // -> 함수 document.title를 이용하여 title 변경 완료! 제 학번과 한글 유니코드를 이용한 한글명 이름을 채용했습니다.



/*
Quest 2.
1. id 가 'title' 인 요소에 'Hello World' 문자열이 포함되도록 작성합니다.
*/
// Answer 2.

var titleEl1 = document.getElementById("title"); // -> title라는 id명을 가진 class를 찾기 위한 document 속성의 함수 getElementById를 이용하여 값을 임의로 담아줄 변수 titleEl1를 선언하여 값을 대입해줍니다.

titleEl1.innerHTML = 'Hello World'; // -> title id안에 함수 innerHTML를 사용하여 문자열 Hello World 를 대입하여 해당 문자열을 가지도록 설정합니다.



/*
Quest 3.
1. class 가 'title' 인 요소들에 '안녕하세요.' 문자열이 포함되도록 작성합니다.
*/
// Answer 3.

var titleEl2 = document.getElementsByClassName("title"); // title라는 클래스명을 가진 class를 찾기 위한 document 속성의 함수 getElementsByClassName를 이용하여 값을 임의로 담아줄 변수 titleEl2를 선언하여 값을 대입해줍니다.

// title 클래스의 각 객체안에 함수 innerHTML를 사용하여 문자열 안녕하세요. 를 대입하여 해당 문자열을 가지도록 설정합니다.
titleEl2[0].innerHTML = '안녕하세요.';
titleEl2[1].innerHTML = '안녕하세요.';
titleEl2[2].innerHTML = '안녕하세요.';



/*
Quest 4.
1. getRowCount 이라는 함수를 선언합니다.
2. 'row' 라는 이름을 가진 class 를 찾고 요소의 개수를 반환합니다.
3. rowCount 변수를 선언, getRowCount() 를 호출하고 반환값을 할당받아 아래와 같이 console 에 출력되도록 작성합니다.
----------
문자열)
row class의 개수는 __개 입니다.
----------
*/
// Answer 4.

function getRowCount() { // getRowCount 이라는 함수를 선언합니다. -> 시행 완료!

    var rowSearch =  document.getElementsByClassName("row"); // row라는 이름을 가진 class를 찾기 위해 document 속성의 함수 getElementsByClassName를 이용하여 선언된 변수 rowSearch에 대입하여줍니다.

    return rowSearch.length; // 찾은 row 이름의 class의 요소들의 개수를 반환하기 위해 지역변수 rowSearch에 length 함수가 쓰여진 값을 반환값으로 지정합니다.

}

var rowCount = getRowCount(); // -> 함수 getRowCount()의 반환값을 되받아줄 함수 rowCount를 선언합니다.

console.log("row class의 개수는 " + rowCount + "개 입니다."); // -> 문자열의 덧셈 연산을 반환된 값을 출력하여 제시문의 문자열 출력 예시안에 대한 구현을 완성합니다.



/*
Quest 5.
1. 1 초 마다 'hello' 라는 문자열이 console 에 출력되도록 작성합니다.
2. 전역범위에 count 변수를 생성하여 매 출력시 console 에 몇 번의 출력이 되고있는지 번호가 함께 출력되도록 작성합니다.
3. 10 번의 출력 후 해당 기능이 실행되지 않도록 작성합니다.
*/
// Answer 5.

var count = 0; // -> 0초부터 카운트를 시작하게 하기 위해 임의의 변수 count에 정수 0을 대입해줍니다.

var CheckSeconds = setInterval(function() { // -> 임의의 변수 CheckSeconds를 선언하여 1초마다 과제 조건안의 제시문이 출력되는 것을 도와주는 setInterval 함수의 값을 받아줍니다. 

    console.log("hello" + ", " + count + "번 째입니다."); // -> 매 출력시에 보여질 출력문을 작성합니다.

    count++; // -> 증감 연산자 ++를 사용하여 1초마다 증가할 경우를 설정해둡니다.

    if (count >= "10"){ // 10번까지의 출력에 제한이 있기 때문에 count가 10 이상일때의 조건을 가진 조건문 if를 호출하여,

        clearInterval(CheckSeconds); // clearInterval 함수를 이용하여 count 숫자의 증가 동작이 멈추도록 설정을 합니다.

    }
}, 1000); // 밀리 단위의 초수가 1000일 때 정수 단위인 1초로 환산되기 때문에 1000 값을 주도록합니다.


/*
Quest 6.
1. id 가 'scroll' 인 요소에 'scroll' 이라는 class 를 추가합니다.
2. 1(순서) 요소의 위치를 x : 400px, y : 0px 로 좌표이동합니다.
*/
// Answer 6.
var scrollEl = document.getElementById("scroll"); // 임의의 변수 scrollEl를 선언, document의 속성에서의 함수 getElementById를 사용하여 id 명이 scroll인 요소를 찾도록 합니다.

scrollEl.classList.add("scroll"); // 변수 scrollEl에 classList.add 함수를 이용하여 class를 더해줍니다.

scrollEl.scrollTo(400,0); // scrollTo 함수를 이용해 요소의 위치를 x축으로 400px, 그리고 y축으로 0px로 좌표 이동을 하도록합니다.



/*
Quest 7.
1. id 가 'article' 인 요소를 찾습니다.
2. 1(순서) 요소의 자식 중 첫번째 요소(.row)에 'red' 라는 class 를 추가합니다.
3. 1(순서) 요소의 자식 중 세번째 요소(.row)를 삭제합니다.
*/
// Answer 7.
var articleEl = document.getElementById("article"); // id 명 article를 가진 요소를 찾아줄 임의의 변수 articleEl를 선언합니다.

articleEl.children[0].classList.add('red'); // 1(순서) 요소의 자식 중 첫번째 요소에 'red' 라는 class 를 추가해줍니다. (add)

articleEl.children[2].classList.remove('row'); // 1(순서) 요소의 자식 중 세번째 요소를 삭제해줍니다. (remove)



/*
Quest 8.
1. enterName 이라는 함수를 선언하고 아래와 같이 정의합니다.
2. '이름을 입력해주세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 다이얼로그창의 취소를 클릭한 경우(null), 아래와 같이 console 에 출력되도록 작성합니다.
----------
문자열)
입력이 취소되었습니다.
----------
4. 사용자가 다이얼로그창에 문자를 입력하지 않고 확인을 클릭할 경우(string), 아래와 같은 문구의 경고창을 띄웁니다.
----------
문자열)
이름을 정확히 입력해주세요.
----------
5. 4(순서) 경우에서 경고창을 확인하면 1(순서) 함수를 다시 호출합니다.
6. 사용자가 문자 단어 하나라도 입력하고 확인을 클릭한 경우(string), 입력된 사항을 body(화면)의 마지막 부분에 출력합니다.
7. enterName 함수를 호출합니다.
*/
// Answer 8.
function enterName() { // 함수 enterName를 선언합니다.

    var NameContext = prompt('이름을 입력해주세요'); // 제시문의 문구를 지닌 입력창 함수 prompt를 씌운 값을 지닌 지역변수 NameContext를 선언합니다.

    if (NameContext === null) { // 취소를 클릭한 경우에 대한 조건을 null과 일치할 때로 고안하여 지닌 if 조건문을 호출합니다. 
        console.log('입력이 취소되었습니다.'); // 입력이 취소되었습니다. 라고 출력됩니다.

    } else if (NameContext === '') { // 문자열을 입력하지 않은 상태에서 확인을 클릭한 경우에 대한 조건을 양쪽 따옴표 ''과 일치할 때로 고안하여 지닌 else if 조건절을 호출합니다. 
        alert('이름을 정확히 입력해주세요.'); // 이름을 정확히 입력해주세요. 라고 출력됩니다.
        NameContext = prompt('이름을 입력해주세요'); // 작성이 안되었을 시에 경고창이 다시 뜨는 상황을 고려하여 다시 지역변수 NameContext의 값을 재선언 해줍니다.
        enterName(); // 경고창이 확인되며 함수가 다시 선언됩니다.

    } else { // 문자열을 입력하고 확인을 클릭한 경우에 대한 조건을 지닌 else 조건절을 호출합니다.
        document.write(NameContext); // 입력된 문자열들은 스크린의 최종 부분에서 전부 출력됩니다.

    }
}
enterName(); // 함수 enterName이 호출됩니다.

