/*
Quest 1.
1. button#btn-student-number 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 자신의 학번이 span#student-number 의 내부에 입력되고, 아래와 같은 메시지 결과값을 경고창으로 출력되도록 작성합니다.
----------
메시지)
학번이 입력되었습니다.
----------
3. button#btn-student-name 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
4. 3(순서) 이벤트 호출 시 자신의 이름이 span#student-name 의 내부에 입력되고, 아래와 같은 메시지 결과값을 경고창으로 출력되도록 작성합니다.
----------
메시지)
이름이 입력되었습니다.
----------
*/
// Answer 1.

// button#btn-student-number 요소를 찾아서 btn0El 변수에 대입
var btn0El = document.querySelector("button#btn-student-number");
// btn0El 에 click 이벤트를 추가하고 이벤트 핸들러를 포함하고 있는 onClickBtnToggle1 할당
btn0El.addEventListener("click", onClickBtnToggle1);

function onClickBtnToggle1(){
    // span#student-number 요소를 찾아서 number 변수에 대입
    var number = document.querySelector("span#student-number");
    // 자신의 학번이 span#student-number 의 내부에 입력
    number.innerText = "22061034";
    // 아래와 같은 메시지 결과값을 경고창으로 출력
    alert("학번이 입력되었습니다.");
}

// button#btn-student-name 요소를 찾아서 btn1El 변수에 대입
var btn1El = document.querySelector("button#btn-student-name");
// btn1El 에 click 이벤트를 추가하고 이벤트 핸들러를 포함하고 있는 onClickBtnToggle2 할당
btn1El.addEventListener("click", onClickBtnToggle2);

function onClickBtnToggle2(){
    // span#student-name 요소를 찾아서 number 변수에 대입
    var name = document.querySelector("span#student-name");
    // 자신의 이름이 span#student-name 의 내부에 입력
    name.innerText = "김채영";
    // 아래와 같은 메시지 결과값을 경고창으로 출력
    alert("이름이 입력되었습니다.");
}


/*
Quest 2.
1. button#btn-window-size 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 윈도우 콘텐츠 영역의 너비 값과 높이 값을 아래와 같은 문자열 결과값으로 console 에 출력되도록 작성합니다.
----------
문자열)
윈도우 콘텐츠의 영역 width : ____ px, height : ____ px 입니다.
----------
*/
// Answer 2.

// button#btn-window-size 요소를 찾아서 btn3El 변수에 대입
var btn2El = document.querySelector("button#btn-window-size");
// btn2El 에 click 이벤트를 추가하고 이벤트 핸들러를 포함하고 있는 onClickBtnToggle3 할당
btn2El.addEventListener("click", onClickBtnToggle3);

// 윈도우 콘텐츠 영역의 너비 값과 높이 값을 담을 변수 선언
var width = window.innerWidth;
var height = window.innerHeight;

function onClickBtnToggle3(){
    // 윈도우 콘텐츠 영역의 너비 값과 높이 값을 아래와 같은 문자열 결과값으로 console에 출력
    // "윈도우 콘텐츠의 영역 width : ____ px, height : ____ px 입니다." 라는 문자열이 출력되도록 함
    console.log("윈도우 콘텐츠의 영역 width :" + width + "px," + "height :" + height + "px 입니다.");
}


/*
Quest 3.
1. button#btn-check-id 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 id 가 'user_id' 인 요소를 찾고 value 속성의 값의 문자열 개수를 아래와 같은 문자열 결과값으로 console 에 출력되도록 작성합니다.
----------
문자열)
input#user_id - value 속성 값의 문자열 개수는 ____ 입니다.
----------
*/

// Answer 3.

// button#btn-check-id 요소를 찾아서 btn2El 변수에 대입
var btn3El = document.querySelector("button#btn-check-id");
// btn3El 에 click 이벤트를 추가하고 이벤트 핸들러를 포함하고 있는 onClickBtnToggle3 할당
btn3El.addEventListener("click", onClickBtnToggle3);

function onClickBtnToggle3(e)
{
    // input 타입으로 인해 버튼 클릭 시 새로고침이 되므로 이를 방지함
    e.preventDefault();

    // id 가 'user_id' 인 요소를 찾아서 id 변수에 대입
    var id = document.querySelector("#user_id");

    // value 속성의 값의 문자열 개수를 length를 이용해 도출
    var idLength = id.getAttribute('value').length;

    // value 속성의 값의 문자열 개수를 아래와 같은 문자열 결과값으로 console 에 출력되도록 작성합니다.
    console.log("input#user_id - value 속성 값의 문자열 개수는 " + idLength +  "입니다.");
}


/*
Quest 4.
1. button#btn-cancel 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 현재 브라우저 창이 새로고침 되도록 작성합니다.
*/
// Answer 4.

// button#btn-cancel 요소를 찾아서 btn4El 변수에 대입
var btn4El = document.querySelector("button#btn-cancel");

// btn4El 에 click 이벤트를 추가하고 이벤트 핸들러를 포함하고 있는 onClickBtnToggle4 할당
btn4El.addEventListener("click", onClickBtnToggle4);

// 이벤트 호출 시 현재 브라우저 창이 새로고침되도록 작성합니다.
function onClickBtnToggle4(e)
{
    // input 타입으로 인해 버튼 클릭 시 새로고침이 되므로 이를 방지함
    e.preventDefault()

    // reload 명령어를 이용해 현재 페이지를 새로고침함
    window.location.reload();
}


/*
Quest 5.
1. button#btn-apply 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '가입하시겠습니까?' 라는 메세지를 포함하고 있는 확인창을 출력합니다.
3. 사용자가 확인을 선택한 경우, 아래와 같은 메시지 결과값을 경고창으로 출력되도록 작성합니다.
----------
메시지)
가입을 환영합니다!
----------
4. 사용자가 취소를 선택한 경우, 아래와 같은 메시지 결과값을 경고창으로 출력되도록 작성합니다.
----------
메시지)
가입을 취소하였습니다.
----------
*/
// Answer 5.

// button#btn-apply 요소를 찾아서 btn5El 변수에 대입
var btn5El = document.querySelector("button#btn-apply");

// btn5El 에 click 이벤트를 추가하고 이벤트 핸들러를 포함하고 있는 onClickBtnToggle5 할당
btn5El.addEventListener("click", onClickBtnToggle5);

function onClickBtnToggle5(e)
{
    // input 타입으로 인해 버튼 클릭 시 새로고침이 되므로 이를 방지함
    e.preventDefault();

    //  1(순서) 이벤트 호출 시 '가입하시겠습니까?' 라는 메세지를 포함하고 있는 확인창을 출력합니다.
    var name = confirm("가입하시겠습니까?");

    // console.log(name);
    // 확인 | 취소 버튼을 누를 시 어떤 결과값이 나오는지 확인

    // 사용자가 확인을 선택한 경우
    if (name == true)
    {
        // 가입을 환영합니다! 라는 메시지 결과값을 경고창으로 출력되도록 작성
        alert("가입을 환영합니다!");
    }

    // 사용자가 취소를 선택한 경우,
    else if (name == false)
    {
        // 가입을 취소하였습니다. 라는 메시지 결과값을 경고창으로 출력되도록 작성
        alert("가입을 취소하였습니다.");
    }
}


/*
Quest 6.
1. button#btn-reset 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '초기화하시려면 100을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 100을 정확하게 입력할 경우, input#user_id 와 input#user_pass 요소의 value 속성이 빈 값으로 초기화 되도록 작성합니다.
*/
// Answer 6.

// button#btn-reset 요소를 찾아서 btn6El 변수에 대입
var btn6El = document.querySelector("button#btn-reset");

// btn6El 에 click 이벤트를 추가하고 이벤트 핸들러를 포함하고 있는 onClickBtnToggle6 할당
btn6El.addEventListener("click", onClickBtnToggle6);

// 1(순서)이벤트 호출 시 
function onClickBtnToggle6()
{
    // '초기화하시려면 100을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
    var name = prompt("초기화하시려면 100을 입력하세요.");

    // 사용자가 100을 정확하게 입력할 경우,
    if (name === "100")
    {
        // input#user_id와 input#user_pass 요소의 value 속성이 빈 값으로 초기화 되도록 작성합니다.

        // 우선 input#user_id와 input#user_pass 요소를 선언한 변수에 대입하고
        var user_id = document.querySelector("input#user_id");
        var user_pass = document.querySelector("input#user_pass");
        // value 속성이 빈 값으로 초기화되도록 합니다.
        user_id.setAttribute("value", "");
        user_pass.setAttribute("value", "");
    }

}


/*
Quest 7.
1. button#btn-odd 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '숫자를 입력해주세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 입력한 수를 기준으로 0부터 해당 숫자까지의 숫자 중 홀수인 숫자를 아래와 같이 문자열 연산하여 결과를 div#odd-result 의 내부에 입력될 수 있도록 작성합니다.
----------
메시지)
문자열 연산 예시)
2(순서) 다이얼로그창에 입력한 숫자가 10인 경우 : 1, 3, 5, 7, 9.
2(순서) 다이얼로그창에 입력한 숫자가 5인 경우 : 1, 3, 5.
----------
*/
// Answer 7.

// button#btn-odd 요소를 찾아서 btn7El 변수에 대입
var btn7El = document.querySelector("button#btn-odd");

// btn7El 에 click 이벤트를 추가하고 이벤트 핸들러를 포함하고 있는 onClickBtnToggle7 할당
btn7El.addEventListener("click", onClickBtnToggle7);

// 1(순서) 이벤트 호출 시 '숫자를 입력해주세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다
function onClickBtnToggle7()
{
    var name = prompt("숫자를 입력해주세요.");
    // 사용자가 입력한 수를 기준으로 0부터 해당 숫자까지의 숫자 중 홀수인 숫자를 아래와 같이 문자열 연산하여 결과를 
    // div#odd-result의 내부에 입력될 수 있도록 작성

    // 홀수만 담을 빈 문자열 선언
    var arr = "";

    // 사용자가 입력한 수를 기준으로 0부터 해당 숫자까지의 숫자 중 홀수인 숫자를 아래와 같이 문자열 연산
    for (i = 0; i < name; i++)
    {

        // 만약 홀수라면(나머지 연산자를 이용해 홀수 여부 판단)
        if (i % 2 == 1)
        {
              // 조건절을 통해 걸러진 홀수를 문자열에 누적 기입
              arr += i;
        if (i < name - 1)
        {
            // 조건 성립 시, 문자열에 , 추가
            arr += ",";
        }
        // .을 추가하기 위해 i가 i의 범위와 일치할 때(마지막 i)를 조건으로 설정
        else
        {
            // 조건 성립 시, 문자열에 . 추가
            arr += ".";
        }
        }
        // , 를 추가하기 위해 i가 i의 범위보다 작을 때를 조건으로 설정
    }
    // console.log(arr);
    var result = "다이얼로그창에 입력한 숫자가" + " " + name + "인 경우 :" + arr;
    // 결과를 div#odd-result 의 내부에 입력될 수 있도록 작성합니다.
    // div#odd-result 요소를 찾아서 oddResult 변수에 대입
    var oddResult = document.querySelector("div#odd-result");
    // innerHTML 명령어를 이용해 결과값이 입력되도록 합니다.
    oddResult.innerHTML = result;
}


/*
Quest 8.
1. button#btn-add-city 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '도시명을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 도시명을 입력할 경우, ul#city-list 자식인 li 요소에 도시명 문자열이 추가되도록 작성합니다.
*/
// Answer 8.

// button#btn-add-city 요소를 찾아서 btn8El 변수에 대입
var btn8El = document.querySelector("button#btn-add-city");
 
// btn8El 에 click 이벤트를 추가하고 이벤트 핸들러를 포함하고 있는 onClickBtnToggle8 할당
btn8El.addEventListener("click", onClickBtnToggle8);

// 1(순서) 이벤트 호출 시 '도시명을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다
function onClickBtnToggle8()
{
    var name = prompt("도시명을 입력하세요.");

    // 사용자가 도시명을 입력할 경우
    if (typeof name == "string")
    {
        // 조건절이 잘 작동되는지 확인하기 위해 콘솔창으로 실험
        // console.log("city");

        // ul#city-list 자식인 li 요소에 도시명 문자열이 추가되도록 작성

        // ul#city-list 요소를 찾아서 city 변수에 대입
        var city = document.querySelector("ul#city-list");
        // li 요소를 추가
        var LiEl = document.createElement('li');
        // 추가된 li에 사용자가 입력한 도시명 문자열 입력 
        LiEl.innerHTML = name;
        // 해당 문자열을 city의 자식 요소로 추가하여 문자열이 추가되도록 함
        city.appendChild(LiEl);

    }
}


/*
Quest 9.
1. button#btn-color 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 sentence 라는 클래스 이름을 가진 모든 p 요소의 글자 색 스타일을 'red' 로 변경합니다.
3. 단, 1(순서) 이벤트 호출 시 클릭된 횟수를 체크하여 현재 횟수에 위치하는 p 요소만 예외로 글자 색 스타일을 'black' 으로 변경합니다.(아래 예시 참고)
4. 1(순서) 이벤트가 여러 번 호출되어 마지막 p 요소가 예외 처리된 상황(글자 색 스타일 'black')에서 1(순서) 이벤트 호출 시 처음 위치한 p 요소부터 예외 처리 되도록 작성합니다.
----------
* 예시 - p요소의 전체 개수가 4개일 때, button#btn-color 클릭 횟수에 따른 p 요소 스타일 변경

횟수 1 : p요소(0) - 'black', p요소(1) - 'red', p요소(2) - 'red', p요소(3) - 'red'
횟수 2 : p요소(0) - 'red', p요소(1) - 'black', p요소(2) - 'red', p요소(3) - 'red'
횟수 3 : p요소(0) - 'red', p요소(1) - 'red', p요소(2) - 'black', p요소(3) - 'red'
횟수 4 : p요소(0) - 'red', p요소(1) - 'red', p요소(2) - 'red', p요소(3) - 'black'
횟수 5 : p요소(0) - 'black', p요소(1) - 'red', p요소(2) - 'red', p요소(3) - 'red'
횟수 6 : p요소(0) - 'red', p요소(1) - 'black', p요소(2) - 'red', p요소(3) - 'red'
...
...
----------
*/
// Answer 9.

// button#btn-color 요소를 찾아서 btn9El 변수에 대입
var btn9El = document.querySelector("button#btn-color");
 
// btn9El 에 click 이벤트를 추가하고 이벤트 핸들러를 포함하고 있는 onClickBtnToggle9 할당
btn9El.addEventListener("click", onClickBtnToggle9);

// 클릭한 횟수를 가질 변수 선언이 필요하여 이에 대해 선언해줍니다.
var clickCount = 0;

// 1(순서) 이벤트 호출 시
function onClickBtnToggle9()
{
    // console.log("click");
    // sentence 라는 클래스 이름을 가진 요소를 찾은 후 sentence 변수에 대입
    // var sentence = p.getElementsByClassName("sentence");
    // 원래는 p태그 요소를 모두 찾은 후 그 요소들 중 sentence 클래스가 들어간 요소를 찾으려 했으나
    // 잘 안 되었습니다. 이유는 아직 모르겠습니다.

    // p 태그를 가지고 있는 모든 요소를 p 변수에 대입
    var p = document.getElementsByTagName("p");

    // p요소가 배열 형식으로 나오므로 요소별 순서를 
    // 변수 i로 설정
    // i는 0부터 시작하여 p 요소의 끝자리까지 반복 실행
    for(i = 0; i < p.length; i++)
    {
        // 반복하여 글자색을 빨간색으로 바꿔줍니다.
        p[i].style.color = 'red';
        // 현재 횟수에 위치하는 p요소만 예외로 글자 색 스타일을 'black' 으로 변경합니다.
        // 처음에는 그렇다면 반복문 안에 넣어서 횟수를 1씩 증가시켜야 하는 거 아닌가 싶었지만
        // 그렇게 될 시 모든 횟수에서 다 스타일이 'black' 으로 변경될 것 같았습니다.
    }
    // 단, 이벤트 호출 시 클릭된 횟수를 체크하여
    // *현재 횟수에 위치하는 p 요소만* 예외로 글자 색 스타일을 'black' 으로 변경합니다.
    if (p[clickCount])
    {
        p[clickCount].style.color = 'black';
    }
    // 반복하여 실행할 때마다 클릭된 횟수가 1씩 증가
    clickCount++;
    // 이벤트가 여러 번 호출되어 마지막 p 요소가 예외 처리된 상황(글자 색 스타일 'black')에서 1(순서) 이벤트 호출 시 처음 위치한 p 요소부터 예외 처리 되도록 작성합니다.
    // 어떻게 할까 많이 고민했습니다.
    // 확실한 건 clickCount를 초기화시켜주거나 새로고침하는 것과 비슷한 조치가 필요했습니다.

    // 만약 clickCount의 횟수가 p의 길이보다 커지면
    if (clickCount > p.length)
    {
        // clickCount를 0으로 초기화해줍니다.
        clickCount = 0;
    }
}

/*
Quest 10.
1. button#btn-go-top 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 스크롤이 현재 화면의 최상단으로 이동되도록 작성합니다.
*/
// Answer 10.

// button#btn-go-top 요소를 찾아서 btn10El 변수에 대입
var btn10El = document.querySelector("button#btn-go-top");
 
// btn10El 에 click 이벤트를 추가하고 이벤트 핸들러를 포함하고 있는 onClickBtnToggle10 할당
btn10El.addEventListener("click", onClickBtnToggle10);

// 1(순서) 이벤트 호출 시
function onClickBtnToggle10()
{
    // 스크롤이 현재 화면의 최상단으로 이동
    window.scrollTo(0, 0);
}
