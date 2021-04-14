/*
문제 풀이.
*/

/*
Quest 1.
1. 문서의 title을 '학번_이름' 으로 변경합니다.
*/
// Answer 1.
document.title = "22061032_김지원"


/*
Quest 2.
1. id 가 'title' 인 요소에 'Hello World' 문자열이 포함되도록 작성합니다.
*/
// Answer 2.

var titleEl = document.getElementById('title');
titleEl.innerHTML = 'Hello World';
// console.log(titleEl.innerHTML);


/*
Quest 3.
1. class 가 'title' 인 요소들에 '안녕하세요.' 문자열이 포함되도록 작성합니다.
*/
// Answer 3.

var titleClass = document.getElementsByClassName('title');
// titleClass.innerHTML = '안녕하세요.';
// console.log(titleClass.innerHTML);
// console.log(titleClass);
titleClass[0].innerHTML = '안녕하세요.';
titleClass[1].innerHTML = '안녕하세요.';
titleClass[2].innerHTML = '안녕하세요.';


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
    var rowClass = document.getElementsByClassName('row'); // row 클래스 찾기
    // console.log(rowClass);  // HTMLCollection(5) [div.row, div.row, section.row, section.row, section.row] ->5개

    return rowClass.length; // 배열의 개수 반환
}
var rowCount = getRowCount(); // 함수 호출
console.log('row class의 개수는 ' + rowCount + ' 개 입니다.'); // 출력 -> row class의 개수는 5개 입니다.







/*
Quest 5.
1. 1 초 마다 'hello' 라는 문자열이 console 에 출력되도록 작성합니다.
2. 전역범위에 count 변수를 생성하여 매 출력시 console 에 몇 번의 출력이 되고있는지 번호가 함께 출력되도록 작성합니다.
3. 10 번의 출력 후 해당 기능이 실행되지 않도록 작성합니다.
*/
// Answer 5.

var count = 1;
var timer = setInterval(function(){
    console.log('hello' + " " + count + '번째');
    count++; // 실행할 때마다 count + 1

    if (count === 11){ // 11번째이면
        clearInterval(timer); // 타이머 정지
    }
}, 1000 ) // 1초마다 실행





/*
Quest 6.
1. id 가 'scroll' 인 요소에 'scroll' 이라는 class 를 추가합니다.
2. 1(순서) 요소의 위치를 x : 400px, y : 0px 로 좌표이동합니다.
*/
// Answer 6.

var scrollId = document.getElementById('scroll');
// console.log(scrollId);

scrollId.classList.add('scroll');
// 스크롤 좌표이동이 맞는지 모르겠습니다..
scrollId.scrollTo(400, 0);

// 확인
// if (scrollId.classList.contains('scroll')){
//     console.log('O');
// }
// -> O 출력됨.
// scrollId



/*
Quest 7.
1. id 가 'article' 인 요소를 찾습니다.
2. 1(순서) 요소의 자식 중 첫번째 요소(.row)에 'red' 라는 class 를 추가합니다.
3. 1(순서) 요소의 자식 중 세번째 요소(.row)를 삭제합니다.
*/
// Answer 7.

var articleId = document.getElementById('article');
// console.log(articleId.children[0]);
articleId.children[0].classList.add('red');
// console.log(articleId.children);
// var a = articleId.children
// a.pop(); // ** 오류 뜸

// articleId.children[0].classList.add('red');
articleId.removeChild(articleId.children[2]);
// articleId.children[2].remove();



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

function enterName(){
    var name = prompt('이름을 입력해주세요.'); // 입력창이 포함된 다이얼로그창
    if (name === null){ // 취소를 누를 경우
        console.log('입력이 취소되었습니다.')
    }else if (name === ''){ // 그냥 확인을 클릭하면(문자열이지만 내용이 없음)
        alert('이름을 정확히 입력해주세요.') // 경고창 띄우기
        location.reload() // 새로고침해서 함수 다시 호출
    }else {
        document.write(name); // body 끝에 내용 추가
    }
}
enterName()

