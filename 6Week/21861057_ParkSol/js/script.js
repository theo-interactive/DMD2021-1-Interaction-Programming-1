/*
문제 풀이.
*/

/*
Quest 1.
1. 문서의 title을 '학번_이름' 으로 변경합니다.
*/
// Answer 1.
document.title = "21861057_박솔"; // 문서의 title을 바꿔주었습니다.


/*
Quest 2.
1. id 가 'title' 인 요소에 'Hello World' 문자열이 포함되도록 작성합니다.
*/
// Answer 2.
var titleEl = document.getElementById('title'); // 변수를 만들어 title의 element들을 가져옵니다.
titleEl.innerHTML = 'Hello World'; // innerHTML을 통하여 문자열을 포함시킵니다.


/*
Quest 3.
1. class 가 'title' 인 요소들에 '안녕하세요.' 문자열이 포함되도록 작성합니다.
*/
// Answer 3.
var titleEl2 = document.getElementsByClassName('title');
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
function getRowCount(){
    var rowEl = document.getElementsByClassName('row').length; // 개수를 어떻게 가져올지 모르겠어서 일단 length로 가져와보았습니다.
    var result1 = "row class의 개수는 " + rowEl + "개 입니다.";
    return result1;
}
var rowCount = getRowCount();
console.log(rowCount); // row class의 개수는 5개 입니다.
// 간편한 방법을 찾았다고 생각하긴 하지만 뭔가 정답일 것 같진 않습니다 ㅠ


/*
Quest 5.
1. 1 초 마다 'hello' 라는 문자열이 console 에 출력되도록 작성합니다.
2. 전역범위에 count 변수를 생성하여 매 출력시 console 에 몇 번의 출력이 되고있는지 번호가 함께 출력되도록 작성합니다.
3. 10 번의 출력 후 해당 기능이 실행되지 않도록 작성합니다.
*/
// Answer 5.
var count = 0;
var timer = setInterval(function(){
    console.log('hello ' + count); // hello 0, hello 2 ... hello 9
    count++;
    if (count >= "10"){ // 10번 출력 후 실행을 멈춰야 하기 때문에, count가 10보다 크거나 같을 때
        clearInterval(timer); // 타이머를 중지하게 했습니다.
    }
}, 1000); // millisecond 1000에 1초이기 때문에 1초마다 문자열 출력이 되어야하므로 1000 값을 주었습니다.


/*
Quest 6.
1. id 가 'scroll' 인 요소에 'scroll' 이라는 class 를 추가합니다.
2. 1(순서) 요소의 위치를 x : 400px, y : 0px 로 좌표이동합니다.
*/
// Answer 6.
var scrollEl = document.getElementById('scroll'); // 변수를 만들어 id가 scroll인 요소를 불러왔습니다.
scrollEl.classList.add("scroll"); // 그 변수에 scroll이란 class를 추가했습니다.
scrollEl.scrollTo(400,0); // 요소의 위치를 x : 400px, y : 0px 로 좌표이동했습니다.


/*
Quest 7.
1. id 가 'article' 인 요소를 찾습니다.
2. 1(순서) 요소의 자식 중 첫번째 요소(.row)에 'red' 라는 class 를 추가합니다.
3. 1(순서) 요소의 자식 중 세번째 요소(.row)를 삭제합니다.
*/
// Answer 7.
var articleEl = document.getElementById('article'); // id 가 'article' 인 요소를 찾았습니다.
articleEl.children[0].classList.add('red'); // 자식 중 첫번째 요소에 red class를 추가했습니다.
articleEl.children[2].classList.remove('row'); // 자식 중 세번째 요소를 삭제했습니다.


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
var name = prompt('이름을 입력해주세요.'); // 우선 prompt를 만들어주었고, 변수에 넣어주었습니다.

function enterName (){ // enterName 이라는 함수를 선언했습니다.
    if (name === 'null') { // 사용자가 다이얼로그창의 취소를 클릭한 경우
        console.log('입력이 취소되었습니다.'); // 입력이 취소되었습니다.
    }
    else if (name === '') { // 사용자가 다이얼로그창에 문자를 입력하지 않고 확인을 클릭할 경우
        alert('이름을 정확히 입력해주세요.')
        name = prompt('이름을 입력해주세요.');
        enterName();
        // 5번이 좀 어려웠습니다. 경고창을 확인하고 다시 함수를 호출한다고 한다면, 아예 처음의 이름을 입력해주세요 창이 떠야하는데,
        // 그냥 enterName();만 입력하면 이미 name이 ''인 상태이기 때문에, 한번 더 name에 prompt를 줬습니다.
    }
    else if (typeof name === 'string'){ // 사용자가 문자 단어 하나라도 입력하고 확인을 클릭한 경우
        document.write(name); // 입력된 사항을 body(화면)의 마지막 부분에 출력했습니다.
    }
}
enterName(); // enterName 함수를 호출했습니다.