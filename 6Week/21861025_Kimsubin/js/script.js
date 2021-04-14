/*
문제 풀이.
*/

/*
Quest 1.
1. 문서의 title을 '학번_이름' 으로 변경합니다.
*/
// Answer 1.
// 기존의 제목은 index.html에 입력한 6Week - 04/08
// 문서의 타이틀을 변경
// 문서에 있는.<타이틀> 안의 내용 = "변경될 제목";
// title 태그의 값을 변경 // set
document.title = "21861025_김수빈";


/*
Quest 2.
1. id 가 'title' 인 요소에 'Hello World' 문자열이 포함되도록 작성합니다.
*/
// Answer 2.

// <div id="title"></div>

// 새로운 변수 선언 = 문서. (전달인자) 값과 동일한 id 이름의 요소 반환
var idEl = document.getElementById("title");
// idEl의 HTML 형식으로 = 값 기입
// idEl.innerHTML = "Hello World";
// console.log(idEl); // <div id="title">Hello World</div>

// idEl.innerHTML = "<div>Hello World</div>";
// console.log(idEl); // <div id="title"><div>Hello World</div></div>

idEl.innerHTML = "<h1>Hello World</h1>";
console.log(idEl); // <div id="title"><h1>Hello World</h1></div>

/*
Quest 3.
1. class 가 'title' 인 요소들에 '안녕하세요.' 문자열이 포함되도록 작성합니다.
*/
// Answer 3.

/*
<div class="title"></div>
<div class="title"></div>
<div class="title"></div>
*/

// 새로운 변수 선언 = 문서. (전달인자) 값과 동일한 class 이름의 요소 반환
// 복수의 목록으로 반환 [배열]
var classEl = document.getElementsByClassName("title");
// 원소 3개 [0~2]
// class 태그의 "title"을 각 배열마다 HTML형태로 "안녕하세요." 값 기입
classEl[0].innerHTML = "안녕하세요."
classEl[1].innerHTML = "안녕하세요."
classEl[2].innerHTML = "안녕하세요."

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

/*
<div class="row"> // row1
    <div id="title"></div>
</div>
<div class="row"> // row2
    <div class="title"></div>
    <div class="title"></div>
    <div class="title"></div>
</div>
<article id="article">
    <section class="row"> // row3
        <h2>Section 1</h2>
    </section>
    <section class="row"> // row4
        <h2>Section 2</h2>
    </section>
    <section class="row"> // row5
        <h2>Section 3</h2>
*/

// 함수 getRowCount 선언
function getRowCount(){
    // rowEl 변수 = 문서의 class 클래스의 row 찾기
    var rowEl = document.getElementsByClassName("row");
    // rowEl의 값을 배열로 반환
    // console.log(rowEl);
    /*
    HTMLCollection(5) [div.row, div.row, section.row, section.row, section.row]
    0: div.row
    1: div.row
    2: section.row
    3: section.row
    4: section.row
    length: 5
    */
    // rowEl 배열의 길이
    // console.log(rowEl.length);
    // rowEl 배열의 길이 값을 getRowCount의 값으로 변환
    return rowEl.length;
}
// 변수 rowCount = getRowCount 값 호출
var rowCount = getRowCount();
// 출력은 row class의 개수는 __개 입니다. 형식으로
console.log("row class의 개수는 " + getRowCount() + "개 입니다.");

/*
Quest 5.
1. 1 초 마다 'hello' 라는 문자열이 console 에 출력되도록 작성합니다.
2. 전역범위에 count 변수를 생성하여 매 출력시 console 에 몇 번의 출력이 되고있는지 번호가 함께 출력되도록 작성합니다.
3. 10 번의 출력 후 해당 기능이 실행되지 않도록 작성합니다.
*/
// Answer 5.

// count 변수 생성
var count;
i = 0;
//  1초마다 "hello" 출력 되도록
function Timer(){
    console.log(i + "hello")
    // 만약 i가 9보다 작을경우  Stop 실행
    // 0부터 10번 실행
    if(i < 9) {
        Stop();
    }
    // 실행 후 i++ 실행하여 조건반복
    i++;
}
function Stop() {
    count = setTimeout(Timer, 1000);
}
Stop();

/*
Quest 6.
1. id 가 'scroll' 인 요소에 'scroll' 이라는 class 를 추가합니다.
2. 1(순서) 요소의 위치를 x : 400px, y : 0px 로 좌표이동합니다.
*/
// Answer 6.

// <div id="scroll">

var scrollCl = document.getElementById("scroll");
// classList.add 클래스 요소 추가
scrollCl.classList.add("scroll");
// scrollTo(x, y); x와 y축을 해당 좌표로 이동
scrollCl.scrollTo(400, 0);

/*
Quest 7.
1. id 가 'article' 인 요소를 찾습니다.
2. 1(순서) 요소의 자식 중 첫번째 요소(.row)에 'red' 라는 class 를 추가합니다.
3. 1(순서) 요소의 자식 중 세번째 요소(.row)를 삭제합니다.
*/
// Answer 7.

/*
<article id="article">
    <section class="row">
        <h2>Section 1</h2>
    </section>
    <section class="row">
        <h2>Section 2</h2>
    </section>
    <section class="row">
        <h2>Section 3</h2>
    </section>
</article>
*/

// article 이라는 id 찾기
var artEl = document.getElementById("article");
// console.log(artEl);
// console.log(artEl.children);
// artEl의 자식요소[0번]에 red 클래스 추가
artEl.children[0].classList.add("red");
// artEl의 자식요소[2번]에 row 클래스 삭제
artEl.children[2].classList.remove("row");

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

// prompt : 메시지 + 입력가능한 인풋 + 확인 / 취소 다이얼로그
var name = prompt("이름을 입력해주세요.");

function enterName(){
    // 만약에 name 변수의 값이 null 이라면
    if(name == 'null'){
        console.log("입력이 취소되었습니다.");
    }
    // 만약에 name 변수 값의 타입이 string이 아니라면
    // if(typeof name !== 'string'){
    //     alert("이름을 정확히 입력해주세요.");
    // }
    // 작동 안됨 : 문자나 숫자를 적고 확인버튼을 눌러도 콘솔창에 출력이 안됨

    // 만약에 name 변수 값이 undefined 라면
    // if(name === undefined){
    //     alert("이름을 정확히 입력해주세요.")
    // }
    
    // 만약에 name 변수의 값이 공백(입력하지 않았다면)이라면
    if(name == ''){
        alert("이름을 정확히 입력해주세요.")
        // 공백으로 확인을 눌렀을 경우 위의 경고문 생성
        // 경고문 확인버튼 클릭 시 다시 처음 prompt 다이얼로그 생성되도록

        // 만약 name의 값이 ture (확인 버튼?) 일 경우
        // 첫 화면 재생성
        // if(name === true){
        //     name = prompt("이름을 입혁해주세요.")
        //     enterName();
        // }
        // alert("이름을 정확히 입력해주세요.") 경고문 무한 반복 생성
        // name의 값이 alert("이름을 정확히 입력해주세요.") 로 바뀌어져있음

        // name의 값을 다시한번 설정하여 실행
        name = prompt("이름을 입혁해주세요.")
        enterName();
    }

    // 만약에 name에 작성한 값의 타입이 문자열이라면
    if(typeof name == 'string'){
        // document.write('string');
        // 문서에 (작성된 문자)를 이어서 작성한다.
        // 문서의 끝부분에 이어쓰이므로 body의 끝부분에 추가
        document.write(name);
    }
}
enterName();

// 4. 사용자가 다이얼로그창에 문자를 입력하지 않고 확인을 클릭할 경우(string), 아래와 같은 문구의 경고창을 띄웁니다.
/*
다이얼로그창에 입력을 하지 않고 확인버튼을 클릭했을 때의 값이
입력된 값이 문자타입과 일치하지않다. typeof name !== 'string'
입력된 값이 없다와 일치 name === undefined 가 아니라
name == '' 입력된 값이 ''이다. 라고 공백으로 나와서 많이 헷갈렸습니다.

마지막에 문자를 입력후 확인을 눌렀을 때의 문제에서는
typeof name == 'string' 이 성립됬는데

문자를 입력하지 않았을때가 공백일때와 문자가 아닐때라고 생각을 해서
typeof name !== 'string' 을 사용했는데 이건 왜 성립이 안됬는지 이해를 하지 못하였습니다.
*/
