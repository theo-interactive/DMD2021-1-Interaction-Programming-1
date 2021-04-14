/*
문제 풀이.
*/

/*
Quest 1.
1. 문서의 title을 '학번_이름' 으로 변경합니다.
*/
// Answer 1.

document.title = "22061079_유진"; 
// 변경 완료

/*
Quest 2.
1. id 가 'title' 인 요소에 'Hello World' 문자열이 포함되도록 작성합니다.
*/
// Answer 2.

var titleEl = document.getElementById('title'); 
// 변수 titleEl에 id title 요소를 저장 
titleEl.innerHTML = 'Hello World';
// titleEl에 Hello world 문자열 작성

/*
Quest 3.
1. class 가 'title' 인 요소들에 '안녕하세요.' 문자열이 포함되도록 작성합니다.
*/
// Answer 3.

var titleEl2 = document.getElementsByClassName('title');

titleEl2[0].innerHTML = "안녕하세요.";
titleEl2[1].innerHTML = "안녕하세요.";
titleEl2[2].innerHTML = "안녕하세요.";

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

function getRowCount() 
// 함수 getRowCount 선언
{
    var row1 = document.getElementsByClassName('row'); 
    // row 이름을 가진 class를 찾기
    var result = row1.length;

    return result; 
    // 요소의 개수를 반환
}

var rowCount = getRowCount(); 
// rowCount 변수 선언, getRowCount 호출
console.log('row class 의 개수는 ' + rowCount + ' 개 입니다.'); 
// Console에 출력되도록 작성

/*
Quest 5.
1. 1 초 마다 'hello' 라는 문자열이 console 에 출력되도록 작성합니다.
2. 전역범위에 count 변수를 생성하여 매 출력시 console 에 몇 번의 출력이 되고있는지 번호가 함께 출력되도록 작성합니다.
3. 10 번의 출력 후 해당 기능이 실행되지 않도록 작성합니다.
*/
// Answer 5.
var count = 0; 
// 전역범위에 count 변수 생성(0번 부터 번호 출력)

var timer = setInterval(function(){
    console.log(count + 'hello'); 
    // console에 count(번호) + hello 를 출력
    count++; 
    // count가 1씩 증가함
    if(count >= 10) 
    // count가 10보다 크거나 같을 경우
    {
        clearInterval(timer);
        // timer가 중지(출력 정지)되도록 함
    }
}, 1000); 
// 0~9 + hello 로 1초마다 한번씩, 총 10번의 출력 후 동작이 정지함



/*
Quest 6.
1. id 가 'scroll' 인 요소에 'scroll' 이라는 class 를 추가합니다.
2. 1(순서) 요소의 위치를 x : 400px, y : 0px 로 좌표이동합니다.
*/
// Answer 6.

var scrollEl = document.getElementById('scroll');
// 임의의 변수 scrollEl을 만들어 id 'scroll' 요소를 불러옴
scrollEl.classList.add('scroll'); 
// 변수에 'scroll'이라는 class를 추가힘
scrollEl.scrollTo(400, 0); 
// 변수의 위치를 x : 400px, y : 0px로 좌표이동함.

/*
Quest 7.
1. id 가 'article' 인 요소를 찾습니다.
2. 1(순서) 요소의 자식 중 첫번째 요소(.row)에 'red' 라는 class 를 추가합니다.
3. 1(순서) 요소의 자식 중 세번째 요소(.row)를 삭제합니다.
*/
// Answer 7.
var articleEl = document.getElementById('article'); 
// 임의의 변수 articleEl을 생성하여 id 'article' 요소를 불러옴
articleEl.children[0].classList.add('red'); 
// 요소의 자식 중 첫번째 요소에 'red' class를 추가함
articleEl.children[2].classList.remove('row');
// articleEl 요소의 자식 중 세번째 요소 'row'를 삭제함



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

function enterName()
// 함수 enterName 을 선언함.
{
    var name = prompt('이름을 입력해주세요.');
    // '이름을 입력해주세요.' 문구 + 입력창의 다이얼로그창 출력함
    if(name === 'null') 
    // 다이얼로그창을 취소할 경우를 if에 입력함
    {
        console.log('입력이 취소되었습니다.');
        // '입력이 취소되었습니다.' 문구 출력함
    }
    else if (name ==='')
    // 문자를 입력하지 않았을 경우('' 공백상태)를 else if에 입력함
    {
        alert('이름을 정확히 입력해주세요.');
        // '이름을 정확히 입력해주세요.' 문구를 다이얼로그에 출력 함
        enterName();
        // 함수 재호출(처음 상태로 되돌아감)함
    }
    else if(typeof name === 'string')
    // 사용자가 입력창에 이름(문자열 형식)을 입력했을 경우를 else if에 입력함
    {
        document.write(name);
        // body에 해당 문구를 출력함
    }
}
enterName();
// enterName 함수를 호출함