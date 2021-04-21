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
var btnStuNum = document.querySelector('button#btn-student-number');
// button#btn-student-number 요소 변수 btnStuNum에 저장
var stuNum = document.querySelector('span#student-number');
// span#student-number 요소 변수 stuNum에 저장

btnStuNum.onclick = function() {
    // button#btn-student-number 요소에 클릭 이벤트 추가

    // console.log('click!');
    stuNum.innerHTML = '22061035';
    // 클릭 이벤트 호출 시 자신의 학번을 span#student-number 의 내부에 입력

    alert('학번이 입력되었습니다.');
    // '학번이 입력되었습니다.' 경고창으로 출력
}

var btnStuName = document.querySelector('button#btn-student-name');
// button#btn-student-name 요소 변수 btnStuName에 저장
var stuName = document.querySelector('span#student-name');
// span#student-name 요소 변수 stuName에 저장

btnStuName.onclick = function() {
    // button#btn-student-name 요소에 클릭 이벤트 추가

    // console.log('click!');
    stuName.innerHTML = '김채은';
    // 클릭 이벤트 호출 시 자신의 이름을 span#student-name 의 내부에 입력

    alert('이름이 입력되었습니다.');
    // '이름이 입력되었습니다.' 경고창으로 출력
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
var btnWinSiz = document.querySelector('button#btn-window-size');
// button#btn-window-size 요소 변수 btnWinSiz에 저장

btnWinSiz.onclick = function() {
    // button#btn-window-size 요소에 클릭 이벤트 추가

    // console.log('click!');
    console.log('윈도우 콘텐츠의 영역 width : ' + window.innerWidth + 'px, height : ' + window.innerHeight + 'px 입니다.');
    // 윈도우 콘텐츠 영역의 너비 값과 높이 값을 console 에 출력
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
var btnIdChk = document.querySelector('button#btn-check-id');
// button#btn-check-id 요소 변수 btnIdChk에 저장

btnIdChk.onclick = function(e) {
    // button#btn-check-id 요소에 클릭 이벤트를 추가

    e.preventDefault();
    // 클릭 이벤트 호출 시 브라우저 창 새로고침 방지

    var chkId = document.getElementById('user_id');
    // 클릭 이벤트 호출 시 id 가 'user_id' 인 요소를 찾아 변수 chkId에 저장
    var chkIdL = chkId.getAttribute('value');
    // id 가 'user_id' 인 요소의 value 속성의 값을 찾아 변수 chkIdL에 저장
    
    console.log('input#user_id - value 속성 값의 문자열 개수는 ' + chkIdL.length + '입니다.');
    // id 가 'user_id' 인 요소의 value 속성의 값의 문자열 개수를 console에 출력
}



/*
Quest 4.
1. button#btn-cancel 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 현재 브라우저 창이 새로고침 되도록 작성합니다.
*/
// Answer 4.
var btnCan = document.querySelector('button#btn-cancel');
// button#btn-cancel 요소 변수 btnCan에 저장

btnCan.onclick = function() {
    // button#btn-cancel 요소에 클릭 이벤트를 추가

    location.reload();
    // 클릭 이벤트 호출 시 브라우저 창 새로고침
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
var btnApp = document.querySelector('button#btn-apply');
// button#btn-apply 요소 변수 btnApp에 저장

btnApp.onclick = function(e) {
    // button#btn-apply 요소에 클릭 이벤트 추가

    var yesOrNo = confirm('가입하시겠습니까?');
    // 클릭 이벤트 호출 시 '가입하시겠습니까?' 확인창 출력 / 입력값 변수 yesOrNo에 저장

    e.preventDefault();
    // 클릭 이벤트 호출 시 브라우저 창 새로고침 방지
    
    if (yesOrNo == true) // 사용자가 확인을 선택한 경우
    {
        alert('가입을 환영합니다!');
        // '가입을 환영합니다!' 경고창 출력
    }

    if (yesOrNo == false) // 사용자가 취소를 선택한 경우
    {
        alert('가입을 취소하였습니다.');
        // '가입을 취소하였습니다.' 경고창 출력
    }
}





/*
Quest 6.
1. button#btn-reset 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '초기화하시려면 100을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 100을 정확하게 입력할 경우, input#user_id 와 input#user_pass 요소의 value 속성이 빈 값으로 초기화 되도록 작성합니다.
*/
// Answer 6.
var btnReset = document.querySelector('button#btn-reset');
// button#btn-reset 요소 변수 btnReset에 저장

btnReset.onclick = function(e) {
    // button#btn-reset 요소에 클릭이벤트 추가

    var oneHundred = prompt('초기화하시려면 100을 입력하세요.');
    // 클릭 이벤트 호출 시 '초기화하시려면 100을 입력하세요.' 다이얼로그창 출력 / 입력값 변수 oneHundred에 저장

    e.preventDefault();
    // 클릭 이벤트 호출 시 브라우저 창 새로고침 방지

    if (oneHundred === '100') // 사용자가 입력창에 100을 정확하게 입력할 경우
    {
        document.querySelector('input#user_id, input#user_pass').setAttribute("value", "");
        // input#user_id 와 input#user_pass 요소의 value 속성을 빈 값으로 초기화

        // document.querySelector('input#user_pass').setAttribute("value", "");
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
var btnOdd = document.querySelector('button#btn-odd');
// button#btn-odd 요소 변수 btnOdd에 저장

btnOdd.onclick = function() {
    // button#btn-odd 요소에 클릭 이벤트 추가

    var result = prompt('숫자를 입력해주세요.');
    // 클릭 이벤트 호출 시 '숫자를 입력해주세요.' 다이얼로그창 출력 / 입력값 변수 result에 저장

    var sayOdd = '';
    // 홀수 모음을 저장할 변수 sayOdd 선언
    
    for(i = 0; i <= result; i++)
    {   // 0부터 입력값 숫자 까지

        if ((i % 2 === 1) && (i > 0))
        {   // 현재 사이클의 숫자가 홀수이고 0보다 클 때

            if (sayOdd !== '') // 변수 sayOdd에 입력값이 존재할 경우
            {
                sayOdd += ', '; // ', ' sayOdd에 추가
            }

            sayOdd += i;  // 변수 sayOdd에 현재 사이클의 숫자 추가
            // 쉼표 먼저 추가 후 숫자를 추가하기 때문에 마지막에 온점 추가할 수 있음
        }
    }
    
    if (sayOdd !== '') // 변수 sayOdd에 입력값이 존재할 경우
    {
        sayOdd += '.'; // '.' sayOdd에 추가
    }

    document.querySelector('div#odd-result').innerHTML = sayOdd;
    // div#odd-result 요소 내부에 sayOdd 추가
}



/*
Quest 8.
1. button#btn-add-city 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '도시명을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 도시명을 입력할 경우, ul#city-list 자식인 li 요소에 도시명 문자열이 추가되도록 작성합니다.
*/
// Answer 8.
var btnCity = document.querySelector('button#btn-add-city');
// button#btn-add-city 요소 변수 btnCity에 저장

var cityUl = document.querySelector('ul#city-list');
// ul#city-list 요소 변수 cityUl에 저장

btnCity.onclick = function() {
    // button#btn-add-city 요소에 클릭 이벤트 추가

    var result = prompt('도시명을 입력하세요.');
    // 클릭 이벤트 호출 시 '도시명을 입력하세요.' 다이얼로그창 출력 / 입력값 변수 result에 저장
    
    if (result !== null) // 변수 result에 입력값이 존재할 경우
    {
        // cityUl.lastElementChild.innerHTML = result;
        // ul#city-list 요소의 마지막 자식 li 요소에 입력값 추가

        var cityChild = document.createElement('li');
        // 문서에 'li' 태그 요소 생성 후 변수 cityChild에 저장
        cityUl.appendChild(cityChild);
        // 변수 cityChild를 변수 cityUl(ul#city-list 요소)의 자식으로 추가
        cityChild.innerHTML = result;
        // 변수 cityChild의 내용을 변수 result의 입력값으로 변경
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
var btnColor = document.querySelector('button#btn-color');
// button#btn-color 요소 변수 btnColor에 저장
var p = document.querySelectorAll('p.sentence');
// sentence 클래스 가진 모든 p 요소 변수 p에 저장
var count = 0;
// 클릭 횟수를 저장하기 위한 변수 count 선언

btnColor.onclick = function() {
    // button#btn-color 요소에 클릭 이벤트 추가

    for (var i = 0; i < p.length; i++) // 변수 p의 처음 순서부터 마지막 순서까지
    {
        p[i].style.color = 'red';
        // 현재 사이클의 순서 p 요소의 글자 색 스타일 'red'로 변경 (sentence 클래스 가진 모든 p 요소에 글자 색 스타일 'red' 적용)
    }
}

btnColor.addEventListener('click', countClick);
// button#btn-color 요소에 이벤트 리스너 추가 / 해당 요소 click 시마다 함수 countClick() 호출

function countClick() {
    count += 1; // 클릭 카운트 횟수 +1 저장

    if(count > 4) // 클릭 카운트 횟수가 4번을 넘을 경우
    {
        count = 1; // 클릭 카운트 횟수 1로 초기화
    }

    // console.log(count);

    p[count - 1].style.color = 'black';
    // 현재 카운트 횟수 순서의 sentence 클래스 가진 p 요소의 글자 색 스타일 'black'으로 변경
    // count - 1 : 클릭 카운트 횟수는 추가하되 배열 순서에 맞추기 위함
}



/*
Quest 10.
1. button#btn-go-top 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 스크롤이 현재 화면의 최상단으로 이동되도록 작성합니다.
*/
// Answer 10.
var btnTop = document.querySelector('button#btn-go-top');
// button#btn-go-top 요소 변수 btnTop에 저장

btnTop.onclick = function() {
    // button#btn-go-top 요소에 클릭 이벤트 추가

    window.scrollTo(0, 0);
    // 클릭 이벤트 호출 시 스크롤 현재 화면의 최상단으로 이동
}


