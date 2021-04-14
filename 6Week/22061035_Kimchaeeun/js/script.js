/*
문제 풀이.
*/

/*
Quest 1.
1. 문서의 title을 '학번_이름' 으로 변경합니다.
*/
// Answer 1.
document.title = "22061035_김채은"; // 문서 title '22061035_김채은'으로 변경



/*
Quest 2.
1. id 가 'title' 인 요소에 'Hello World' 문자열이 포함되도록 작성합니다.
*/
// Answer 2.
var titleEl = document.getElementById('title'); // 변수 titleEl에 id가 'title'인 요소 저장
titleEl.innerHTML = 'Hello World'; // 변수 titleEl에 'Hello World' 문자열 작성



/*
Quest 3.
1. class 가 'title' 인 요소들에 '안녕하세요.' 문자열이 포함되도록 작성합니다.
*/
// Answer 3.
var titleEls = document.getElementsByClassName('title'); // 변수 titleEls에 class가 'title'인 요소들 저장
console.log(titleEls.length);
// getElementsByClassName으로 불러온 요소에 innerHTML이 적용되지 않는 이유 : 여러 값이기 때문

for (i = 0; i < titleEls.length; i++) {
    titleEls[i].innerHTML = '안녕하세요.';
    // titleEls 개수 까지의 반복문 생성 후 각 titleEls 요소들에 '안녕하세요' 작성
}




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
function getRowCount() // 함수 getRowCount() 선언
{
    var rowFind = document.getElementsByClassName('row'); // 변수 rowFind에 class 이름이 'row'인 요소들 저장
    var rowNum = rowFind.length; // rowFind의 개수를 변수 rowNum에 저장

    return rowNum; // rowNum 반환
}

var rowCount = getRowCount(); // 변수 rowCount에 함수 getRowCount() 호출 및 getRowCount()의 반환값 저장
console.log('row class의 개수는 ' + rowCount + '개 입니다.'); // 'row class의 개수는 __개 입니다' 출력



/*
Quest 5.
1. 1 초 마다 'hello' 라는 문자열이 console 에 출력되도록 작성합니다.
2. 전역범위에 count 변수를 생성하여 매 출력시 console 에 몇 번의 출력이 되고있는지 번호가 함께 출력되도록 작성합니다.
3. 10 번의 출력 후 해당 기능이 실행되지 않도록 작성합니다.
*/
// Answer 5.
var count = 1; // 함수 hello() 카운트를 위한 변수 count 생성

function hello() // 함수 hello() 선언
{
    console.log('hello', count); // 'hello'와 hello의 순서 숫자 동시 출력
    count++; // count에 1 증가

    if (count == 11) // count가 10번 반복되었을 경우
    {
        clearInterval(timer); // 반복 중지
    }
}

var timer = setInterval(hello, 1000); // 1초 간격으로 hello() 호출




/*
Quest 6.
1. id 가 'scroll' 인 요소에 'scroll' 이라는 class 를 추가합니다.
2. 1(순서) 요소의 위치를 x : 400px, y : 0px 로 좌표이동합니다.
*/
// Answer 6.
var scrollEl = document.getElementById('scroll'); // 변수 scrollEl에 id가 'scroll'인 요소 저장
scrollEl.classList.add('scroll'); // scrollEl에 'scroll'이라는 class 추가
scrollEl.scrollTo(400, 0); // scrollEl의 위치를 x: 400px, y: 0px로 좌표이동





/*
Quest 7.
1. id 가 'article' 인 요소를 찾습니다.
2. 1(순서) 요소의 자식 중 첫번째 요소(.row)에 'red' 라는 class 를 추가합니다.
3. 1(순서) 요소의 자식 중 세번째 요소(.row)를 삭제합니다.
*/
// Answer 7.
var articleEl = document.getElementById('article'); // 변수 articleEl에 id가 'article'인 요소 저장
articleEl.children[0].classList.add('red'); // articleEl 요소의 자식 중 첫번째 요소에 'red' class 추가
articleEl.children[2].classList.remove('row'); // articleEl 요소의 자식 중 마지막 요소를 삭제



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
function enterName() // 함수 enterName() 선언
{
    var yesOrNo = window.prompt('이름을 입력해주세요.'); // '이름을 입력해주세요.' 라는 문구와 입력창이 포함된 다이얼로그창 출력 후 입력값을 변수 yesOrNo에 저장
    return yesOrNo; // yesOrNo 반환
}

var result = enterName(); // 함수 enterName()호출 및 enterName()의 반환값 변수 result에 저장

if(result == null) // 다이얼로그창의 취소를 클릭한 경우
{
    console.log('입력이 취소되었습니다.'); // '입력이 취소되었습니다.' 출력
}

if(result == '') // 다이얼로그창에 문자를 입력하지 않고 취소를 누를 경우
{
    console.log('이름을 정확히 입력해주세요.'); // '이름을 정확히 입력해주세요' 출력
    enterName(); // 함수 enterName() 호출
}

else {
    document.write(result); // 문자를 하나라도 다이얼로그 창에 입력하고 확인을 클릭한 경우 body의 마지막 부분에 입력된 사항 출력
}



