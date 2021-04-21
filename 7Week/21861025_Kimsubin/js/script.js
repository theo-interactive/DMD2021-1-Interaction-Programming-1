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

var btn1El = document.querySelector('#btn-student-number');
// console.log(btn1El);
// 문서의 #btn-student-number 노드를 탐색하고 첫번째 노드로 반환
var btn2El = document.querySelector('#btn-student-name');

function onClickBtn1(e) {
    e.preventDefault(); // 기본 이벤트를 막는 기능
    console.log('학번이 입력되었습니다.'); // 해당 함수가 실행 시에 콘솔창에 출력
    document.getElementById("student-number").innerText = "21861025";
    // 문서에 있는 id = "student-number" 를 찾는다.텍스트를 추가 = 텍스트입력;
}

function onClickBtn2(e) {
    e.preventDefault(); // 기본 이벤트를 막는 기능
    window.alert('이름이 입력되었습니다.'); // 해당 함수가 실행 시에 경고창 생성
    document.getElementById("student-name").innerText = "김수빈";
    // 문서에 있는 id = "student-name" 를 찾는다.텍스트를 추가 = 텍스트입력;
}

btn1El.addEventListener('click', onClickBtn1);
// btn1El.addEventListener : btn1El 노드에 이벤트 핸들러를 할당
// ('click', onClickBtn1); : 클릭이벤트, 함수이름??
btn2El.addEventListener('click', onClickBtn2);

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

var btn3El = document.querySelector('#btn-window-size');

function Size(){
    winsize = ''; // 값을 넣을 변수
    winWidth = window.innerWidth, winHeight = window.innerHeight;
    // 변수이름 = 윈도우화면의 Width값, 변수이름 = 윈도우화면의 Height값
    // 윈도우 콘텐츠의 영역 width : ____ px, height : ____ px 입니다.
    var winsize = "윈도우 콘텐츠의 영역 width : " + winWidth + "px, height : " + winHeight + "px 입니다.";
    return winsize;
}   

function onClickBtn3(e) {
    e.preventDefault();
    var WS = Size();
    console.log(WS);
} 

btn3El.addEventListener('click', onClickBtn3);

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

var btn4El = document.querySelector('#btn-check-id');

function idvalue(){
    valid = '';
    var uservalue = document.getElementById("user_id").value;
    // 문서에 있는 id = "student-name" 를 찾는다.
    var valid = "input#user_id - value 속성 값의 문자열 개수는 " + uservalue.length + " 입니다.";
    return valid;
}

function onClickBtn4(e) {
    e.preventDefault();
    var iV = idvalue();
    console.log(iV);
}

btn4El.addEventListener('click', onClickBtn4);


/*
Quest 4.
1. button#btn-cancel 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 현재 브라우저 창이 새로고침 되도록 작성합니다.
*/
// Answer 4.

var btn5El = document.querySelector('#btn-cancel');

function onClickBtn5(e) {
    e.preventDefault();

    window.location.reload();
}

btn5El.addEventListener('click', onClickBtn5);

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

var btn6El = document.querySelector('#btn-apply');

function onClickBtn6(e) {
    e.preventDefault();

    function conapply(){
        var CA = window.confirm('가입하시겠습니까?');

        if(CA){
            alert("가입을 환영합니다!");
        }
        else{
            alert("가입을 취소하였습니다.");
        }
    }
    conapply();
}

btn6El.addEventListener('click', onClickBtn6);

/*
Quest 6.
1. button#btn-reset 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '초기화하시려면 100을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 100을 정확하게 입력할 경우, input#user_id 와 input#user_pass 요소의 value 속성이 빈 값으로 초기화 되도록 작성합니다.
*/
// Answer 6.

var btn7El = document.querySelector('#btn-reset');

function onClickBtn7(e) {
    e.preventDefault();

    var PR = window.prompt('초기화하시려면 100을 입력하세요.');

    if(PR == 100){ 
        window.location.reload();
    }
}

btn7El.addEventListener('click', onClickBtn7);

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

//~~~~~~~~~~~~~ 더 풀어봐야 함 ~~~~~~~~~~~~`

var btn8El = document.querySelector('#btn-odd');

function onClickBtn8(e) {
    e.preventDefault();

    var arr = window.prompt('숫자를 입력해주세요.');

    console.log(arr);

    var DivOdd = "";
    // var DivOdd = document.getElementById("odd-result").innerText;

    for(i = 0; i <= arr; i++){
        if(i % 2 == 1){
            DivOdd += i

            if(i < arr - 1){
                DivOdd += ", ";
            }
            else{
                // 위의 조건에 해당되지 않을 경우 (마지막으로 반복된 수)
                DivOdd += "."
            }
        }
        // document.getElementById("odd-result").innerText = DivOdd;
    }
    var Numresult = "숫자가 " + arr + " 인 경우 : " + DivOdd;
    document.getElementById("odd-result").innerText = Numresult;
}
btn8El.addEventListener('click', onClickBtn8);

/*
Quest 8.
1. button#btn-add-city 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '도시명을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 도시명을 입력할 경우, ul#city-list 자식인 li 요소에 도시명 문자열이 추가되도록 작성합니다.
*/
// Answer 8.

var btn9El = document.querySelector('#btn-add-city');
var cityEl = document.querySelector('ul#city-list');

function onClickBtn9(e) {
    e.preventDefault();

    var city = window.prompt('도시명을 입력하세요.');

    if(city !== ""){
        var cityli = document.createElement('li')
        cityli.innerHTML = city;
        cityEl.appendChild(cityli);
    }

    // if(typeof city === 'string'){
    //     // document.createElement('li');
    //     document.getElementById("city-list").innerText = city;
    // }

    document.createElement('li');
    // document.getElementById("city-list").innerText = city;

}

btn9El.addEventListener('click', onClickBtn9);

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

var btn10El = document.querySelector('#btn-color');

var count = 0;

function onClickBtn10(e) {
    e.preventDefault();

    var pEl = document.getElementsByTagName('p')
    for(i = 0; i < pEl.length; i++){
        pEl[i].style.color = 'red';

        if(i == count){
            pEl[i].style.color = 'black';
        }
    }
    count++;
    // 여기까지만 하면 1번 2번 3번 4번 하고 그 이후엔 실행이 되지않음
    // 다시 원점으로 돌아와서 반복되도록 해야함

    if(count == pEl.length){
        count = 0;
        // count = 1; // 원소의 시작은 0부터 카운트
    }

    // for(i == count){
    //     pEl[i].style.color = 'black';
    // }
    // document.getElementsByClassName('sentence');
    // pClassList.toggle('style1');

    // var count = 0;
 
    // function button_onclick(){
    //     count++; 
    // }
}

btn10El.addEventListener('click', onClickBtn10);


/*
Quest 10.
1. button#btn-go-top 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 스크롤이 현재 화면의 최상단으로 이동되도록 작성합니다.
*/
// Answer 10.

var btn11El = document.querySelector('#btn-go-top');

function onClickBtn11(e) {
    e.preventDefault();

    window.scrollTo(0, 0);
    // 문서를 (X, Y) 위치로 스크롤 이동
}

btn11El.addEventListener('click', onClickBtn11);
