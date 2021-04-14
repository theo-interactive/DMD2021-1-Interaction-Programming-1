/*
문제 풀이.
*/

/*
Quest 1.
1. 문서의 title을 '학번_이름' 으로 변경합니다.
*/
// Answer 1.

document.title = '22161154_현서영';
// title 태그의 값이 변경. // set


/*
Quest 2.
1. id 가 'title' 인 요소에 'Hello World' 문자열이 포함되도록 작성합니다.
*/
// Answer 2.
var titleEl = document.getElementById('title'); // 타이틀 요소에서 노드를 찾아온다.
titleEl.innerHTML = 'Hello World'; // 'Hello World' 문자열 반환(작성).


/*
Quest 3.
1. class 가 'title' 인 요소들에 '안녕하세요.' 문자열이 포함되도록 작성합니다.
*/
// Answer 3.
var titleEl2 = document.getElementsByClassName("title"); // 전달인자의 값과 동일한 class 이름의 요소들을 반환.
titleEl2[0].innerHTML = '안녕하세요.'; //// 복수의 목록으로 반환(배열사용)
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
    var row = document.getElementsByClassName('row'); // row와 같은 이름의 class 를 가진 element 노드 목록을 반환.
    var num = 0; //담아줄 그릇 만들고,
    for(i=0; i<row.length; i++) {  //요소의 개수만큼 반환.
        num+=1;
    } return num;
}
var rowCount = getRowCount();
console.log("row class의 개수는 " + rowCount + "개 입니다.");


/*
Quest 5.
1. 1 초 마다 'hello' 라는 문자열이 console 에 출력되도록 작성합니다.
2. 전역범위에 count 변수를 생성하여 매 출력시 console 에 몇 번의 출력이 되고있는지 번호가 함께 출력되도록 작성합니다.
3. 10 번의 출력 후 해당 기능이 실행되지 않도록 작성합니다.
*/
// Answer 5.
var count=0;
var timer = setInterval();
//*if문을 작성하여 타이머를 만드는 것 같은데, 매개변수로 어떤 것을 써줘야하는지, 구문작성이 막혔습니다..ㅜㅜ


/*
Quest 6.
1. id 가 'scroll' 인 요소에 'scroll' 이라는 class 를 추가합니다.
2. 1(순서) 요소의 위치를 x : 400px, y : 0px 로 좌표이동합니다.
*/
// Answer 6.
var scrollEl = document.getElementById('scroll');
scrollEl.classList.add('scroll'); // class 를 추가하는 메서드 사용.
//boxEl.style.? = (400, 0);
//좌표이동하는 방법이 무엇인지 잘 모르겠습니다ㅠㅠ


/*
Quest 7.
1. id 가 'article' 인 요소를 찾습니다.
2. 1(순서) 요소의 자식 중 첫번째 요소(.row)에 'red' 라는 class 를 추가합니다.
3. 1(순서) 요소의 자식 중 세번째 요소(.row)를 삭제합니다.
*/
// Answer 7.
var articleEl = document.getElementById('article'); //1.
articleEl.children[0].classList.add("red");  //2. [0] - 첫번째요소.
artEl.children[2].classList.remove("row");  //3. remove - 삭제 메서드.
 

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
var name = prompt("이름을 입력해주세요."); //문구와 입력창이 포함된 다이얼로그창.
function enterName() {
    if(name === 'null') { //사용자가 다이얼로그창의 취소를 클릭한 경우(null),
        console.log("입력이 취소되었습니다.")
    }
    else if (name === "") { //사용자가 다이얼로그창에 문자를 입력하지 않고 확인을 클릭할 경우(string),
        alert("이름을 정확히 입력해주세요.");
        //*8-5. 4(순서) 경우에서 경고창을 확인하면 1(순서) 함수를 다시 호출합니다.
        //* 다시호출하는 것이 그냥 다이얼로그창을 한번 더 입력해주면 되는건가요..?
        name = prompt("이름을 입력해주세요.");
        enterName(); //재출력,,
    }
    else if (typeof name === 'string') { //사용자가 문자 단어 하나라도 입력하고 확인을 클릭한 경우(string),
        document.write(name); // 입력된 사항을 body(화면)의 마지막 부분에 출력.
    }
} enterName(); // 8-7. enterName 함수를 호출.






//## 제출기한

//4월 14일 11시 업로드


