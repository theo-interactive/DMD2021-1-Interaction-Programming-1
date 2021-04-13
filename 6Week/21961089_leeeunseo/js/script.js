/*
문제 풀이.
*/

/*
Quest 1.
1. 문서의 title을 '학번_이름' 으로 변경합니다.
*/
// Answer 1.
// console.log(document.title); // -> 6Week - 04/08
document.title = "21961089_이은서";
console.log(document.title); // -> 21961089_이은서



/*
Quest 2.
1. id 가 'title' 인 요소에 'Hello World' 문자열이 포함되도록 작성합니다.
*/
// Answer 2.
var titleEl = document.getElementById('title').innerHTML = '<p>Hello World</p>';
// console.log(titleEl); // -> <p>Hello World</p>



/*
Quest 3.
1. class 가 'title' 인 요소들에 '안녕하세요.' 문자열이 포함되도록 작성합니다.
*/
// Answer 3.
var titleEls = document.getElementsByClassName('title');
// 반복문을 통해 일괄로 특정 문자열을 포함하도록 작성.
for (var i = 0; i < titleEls.length; i++) { titleEls[i].innerHTML = '<span>안녕하세요.</span>'; }
// console.log(titleEls);



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
    var rowEls = document.getElementsByClassName('row');
    // console.log(rowEls); // 5개 반환.
    return rowEls.length;
}
var rowCount = getRowCount();
console.log(`row class 의 개수는 ${rowCount}개입니다.`); // -> row class 의 개수는 5개입니다.



/*
Quest 5.
1. 1 초 마다 'hello' 라는 문자열이 console 에 출력되도록 작성합니다.
2. 전역범위에 count 변수를 생성하여 매 출력시 console 에 몇 번의 출력이 되고있는지 번호가 함께 출력되도록 작성합니다.
3. 10 번의 출력 후 해당 기능이 실행되지 않도록 작성합니다.
*/
// Answer 5.
var count;
i = 1;
function setLoop() {
    console.log(count);
    console.log('hello');
    if (i < 10) { setTime(); }
    i++;
}
function setTime() { count = setTimeout(setLoop, 1000); }
setTime();



/*
Quest 6.
1. id 가 'scroll' 인 요소에 'scroll' 이라는 class 를 추가합니다.
2. 1(순서) 요소의 위치를 x : 400px, y : 0px 로 좌표이동합니다.
*/
// Answer 6.
var scrollEl = document.getElementById('scroll');
scrollEl.classList.add('scroll');
var scrollEls = document.querySelector('#scroll.scroll');
// console.log(scrollEls);
// console.log(scrollEls.style);

// 1. div 좌표 이동.
scrollEls.style.position = 'fixed';
scrollEls.style.left = 400 + 'px';
scrollEls.style.top = 0 + 'px';
// console.log(scrollEls);

// 2. div 이미지 내 좌표 이동.
scrollEls.scrollTo(400, 0);



/*
Quest 7.
1. id 가 'article' 인 요소를 찾습니다.
2. 1(순서) 요소의 자식 중 첫번째 요소(.row)에 'red' 라는 class 를 추가합니다.
3. 1(순서) 요소의 자식 중 세번째 요소(.row)를 삭제합니다.
*/
// Answer 7.
var articleChildEls = document.getElementById('article').children;
// console.log(articleChildEls); // 3개 반환.
articleChildEls[0].classList.add('red'); // 요소에 class 추가.
articleChildEls[2].remove(); // 요소 삭제.
// console.log(articleChildEls); // 2개 반환.



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
    var inputName = prompt('이름을 입력해주세요');
    if (inputName === null) { // 취소를 클릭한 경우.
        console.log('입력이 취소되었습니다.');
    } else if (inputName === '') { // 문자열을 입력하지 않고 확인을 클릭한 경우.
        alert('이름을 정확히 입력해주세요.');
        enterName();
    } else { // 문자열을 입력하고 확인을 클릭한 경우.
        document.write(inputName);
    }
}
enterName();

