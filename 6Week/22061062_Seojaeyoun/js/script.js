/*
문제 풀이.
*/

/*
Quest 1.
1. 문서의 title을 '학번_이름' 으로 변경합니다.
*/
// Answer 1.
document.title = "22061062_서재윤"; // 학번_이름으로 변경


/*
Quest 2.
1. id 가 'title' 인 요소에 'Hello World' 문자열이 포함되도록 작성합니다.
*/
// Answer 2.
var titleEl1 = document.getElementById('title'); // 변수 선언과 함께 title 요소를 넣음
titleEl1.innerHTML = "Hello World"; // 'Hello World' 문자열을 포함하도록 함


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
function getRowCount()
{
    var rowEl = document.getElementsByClassName('row');
    var result = rowEl.length; //요소의 개수를 result에 저장
    
    return result; // 반환
}
var rowCount = getRowCount(); //rowCount 변수를 선언, getRowCount() 를 호출
console.log("row class의 개수는 " + rowCount + "개 입니다."); //출력



/*
Quest 5.
1. 1 초 마다 'hello' 라는 문자열이 console 에 출력되도록 작성합니다.
2. 전역범위에 count 변수를 생성하여 매 출력시 console 에 몇 번의 출력이 되고있는지 번호가 함께 출력되도록 작성합니다.
3. 10 번의 출력 후 해당 기능이 실행되지 않도록 작성합니다.
*/
// Answer 5.

var count = 0;
var timer = setInterval(function(){
    if(count < 10){//count가 10보다 작을 경우 
        console.log('hello ' + count); // 문자열과 함께 번호를 출력
        count++; // count의 숫자 증가
    }
    else{//count가 10에 도달 했을 경우 타이머 기능을 멈추도록함
        clearInterval(timer);
    }
},1000); // 0~9 까지 출력됨


/*
Quest 6.
1. id 가 'scroll' 인 요소에 'scroll' 이라는 class 를 추가합니다.
2. 1(순서) 요소의 위치를 x : 400px, y : 0px 로 좌표이동합니다.
*/
// Answer 6.
var scrollEl = document.getElementById('scroll'); // 변수에 scroll 요소 추가
scrollEl.classList.add('scroll');  // 변수에 class 추가
scrollEl.scrollTo(400,0); //요소의 위치를 400,0 으로 이동


/*
Quest 7.
1. id 가 'article' 인 요소를 찾습니다.
2. 1(순서) 요소의 자식 중 첫번째 요소(.row)에 'red' 라는 class 를 추가합니다.
3. 1(순서) 요소의 자식 중 세번째 요소(.row)를 삭제합니다.
*/
// Answer 7.
var articleEl = document.getElementById('article');
articleEl.children[0].classList.add('red'); // 자식 중 첫번째 요소에 red 추가
articleEl.children[2].classList.remove('row'); // 자식 중 세번째 요소 삭제


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

function enterName(){ // 함수 선언
    var name = prompt('이름을 입력해주세요.');
    if(name === 'null'){ //사용자가 다이얼로그창의 취소를 클릭한 경우(null)
        console.log('입력이 취소되었습니다.')
    }
    else if(name === '') { //사용자가 다이얼로그창에 문자를 입력하지 않고 확인을 클릭할 경우
        alert('이름을 정확히 입력해주세요.');
        name = prompt('이름을 입력해주세요.'); // 다시 다이얼로그창을 불러오기..?
        enterName();
    }
    else if(typeof name === 'string'){//사용자가 문자 단어 하나라도 입력하고 확인을 클릭한 경우
        document.write(name); //입력된 사항을 body(화면)의 마지막 부분에 출력
    }
}
enterName();