/*
문제 풀이.
*/

/*
Quest 1.
1. 문서의 title을 '학번_이름' 으로 변경합니다.
*/
// Answer 1.
document.title = "21961104_JungHyeKyung"

/*
Quest 2.
1. id 가 'title' 인 요소에 'Hello World' 문자열이 포함되도록 작성합니다.
*/
// Answer 2.
var titleElID = document.getElementById('title');
titleElID.innerHTML = "<p>Hello World</p>";

/*
Quest 3.
1. class 가 'title' 인 요소들에 '안녕하세요.' 문자열이 포함되도록 작성합니다.
*/
// Answer 3.
var titleElClass = document.getElementsByClassName('title');
titleElClass.innerHTML = "<p>안녕하세요.</p>";

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
function getRowCount() {
    var rowClassEl = document.getElementsByClassName('row');
    var idx;
    for (var i = 0; i < rowClassEl.length; i++) {
        idx = i;
        // console.log(i);
    }
    // console.log(idx);
    return idx + 1;
}
var rowCount = getRowCount();
console.log('row class의 개수는 ' + rowCount + '개 입니다.');

/*
Quest 5.
1. 1 초 마다 'hello' 라는 문자열이 console 에 출력되도록 작성합니다.
2. 전역범위에 count 변수를 생성하여 매 출력시 console 에 몇 번의 출력이 되고있는지 번호가 함께 출력되도록 작성합니다.
3. 10 번의 출력 후 해당 기능이 실행되지 않도록 작성합니다.
*/
// Answer 5.
var count = 1; // 선언과 초기화를 해주어야 값이 나온다.
// var timer = setInterval(function() {
//     console.log(count, 'hello');
//     // console.log(count);
//     count++;
//     if(count > 10){
//         clearInterval(timer);
//     }
// }, 1000);

/*
Quest 6.
1. id 가 'scroll' 인 요소에 'scroll' 이라는 class 를 추가합니다.
2. 1(순서) 요소의 위치를 x : 400px, y : 0px 로 좌표이동합니다.
*/
// Answer 6.
var scrollIdEl = document.getElementById('scroll');
scrollIdEl.classList.add('scroll');
// scrollIdEl.scrollTo(400, 0);

/*
Quest 7.
1. id 가 'article' 인 요소를 찾습니다.
2. 1(순서) 요소의 자식 중 첫번째 요소(.row)에 'red' 라는 class 를 추가합니다.
3. 1(순서) 요소의 자식 중 세번째 요소(.row)를 삭제합니다.
*/
// Answer 7.
var articleIdEl = document.getElementById('article');
var firstEl = articleIdEl.firstElementChild; // 첫번째 요소
firstEl.classList.add('red');
// var thirdEl = articleIdEl.children[2];
// console.log(thirdEl);
// thirdEl.classList.remove('row');

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
function enterName() {
    var name = window.prompt('이름을 입력해 주세요.', '');
    // console.log(name);
    if (name === null) {
        console.log('입력이 취소되었습니다.');
    }
    else {
        if(name === "") {
            alert('이름을 정확히 입력해주세요.');
            enterName();
        } else {
            document.write(name);
        }
    }
}
enterName();

