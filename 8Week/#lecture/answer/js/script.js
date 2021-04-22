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
function onClickBtnStudentNumber(e) {
    var spanStudentNumber = document.querySelector('span#student-number');
    spanStudentNumber.innerText = '20210000';
    // spanStudentNumber.innerHTML = '';
    alert('학번이 입력되었습니다.');
}
var btnStudentNumber = document.querySelector('button#btn-student-number');
btnStudentNumber.addEventListener('click', onClickBtnStudentNumber);
function onClickBtnStudentName(e) {
    var spanStudentName = document.querySelector('span#student-name');
    spanStudentName.innerHTML = '<strong>김용원</strong>';
    alert('이름이 입력되었습니다.');
}
var btnStudentName = document.querySelector('button#btn-student-name');
btnStudentName.addEventListener('click', onClickBtnStudentName)


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
function onClickBtnWindowSize(e) {
    var msg = '윈도우 콘텐츠의 영역 width : ' + window.innerWidth + ' px, height : ' + window.innerHeight + ' px 입니다.'
    msg = `윈도우 콘텐츠의 영역 width : ${window.innerWidth} px, height : ${window.innerHeight} px 입니다.`;
    console.log(msg);
}
var btnWindowSize = document.querySelector('button#btn-window-size');
btnWindowSize.addEventListener('click', onClickBtnWindowSize);


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
function onClickBtnCheckId(e) {
    e.preventDefault(); // form (submit) 이벤트가 발생되지 않도록 적용.
    var userIdEl = document.getElementById('user_id');
    // console.log(userIdEl);
    
    // 속성을 찾는 방법. (getAttribute('속성명'))
    var value = userIdEl.getAttribute('value'); // 문서 상에 기입된 초기 속성값
    // console.log(value, value.length);
    var msg = `input#user_id - value 속성 값의 문자열 개수는 ${value.length} 입니다.`;
    console.log(msg);

    // input 의 value
    value = userIdEl.value; // input, textarea, select ... - 현재 상태의 값(value)을 받아온다.
    // console.log(value, value.length);
    msg = 'input#user_id - value 속성 값의 문자열 개수는 ' + value.length + ' 입니다.';
    console.log(msg);
}
var btnCheckId = document.querySelector('button#btn-check-id');
btnCheckId.addEventListener('click', onClickBtnCheckId);


/*
Quest 4.
1. button#btn-cancel 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 현재 브라우저 창이 새로고침 되도록 작성합니다.
*/
// Answer 4.
function onClickBtnCancel(e) {
    e.preventDefault();
    // window.location.reload();
    location.reload(); // 페이지 새로고침.
}
var btnCancel = document.querySelector('button#btn-cancel');
btnCancel.addEventListener('click', onClickBtnCancel);


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
function onClickBtnApply(e) {
    e.preventDefault();
    var isApply = confirm('가입하시겠습니까?');
    console.log(isApply);

    // if (isApply) { // true - 확인 버튼.
    //     alert('가입을 환영합니다!');
    // } else { // false - 취소 버튼.
    //     alert('가입을 취소하였습니다.');
    // }

    // var msg;
    // if (!isApply) { // false
    //     msg = '가입을 취소하였습니다.';
    // } else { // true
    //     msg = '가입을 환영합니다!';
    // }
    // ===
    // if else 축약형
    var msg = !isApply ? '가입을 취소하였습니다.' : '가입을 환영합니다!' ;
    alert(msg);

    // var msg;
    // if (isApply) {
    //     msg = '가입을 환영합니다!';
    // }
    // if 축약형
    // var msg = isApply && '가입을 환영합니다!';
}
var btnApply = document.querySelector('button#btn-apply');
btnApply.addEventListener('click', onClickBtnApply);


/*
Quest 6.
1. button#btn-reset 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '초기화하시려면 100을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 100을 정확하게 입력할 경우, input#user_id 와 input#user_pass 요소의 value 속성이 빈 값으로 초기화 되도록 작성합니다.
*/
// Answer 6.
function onClickBtnReset(e) {
    e.preventDefault();
    var number = prompt('초기화하시려면 100을 입력하세요.');
    // console.log(number);
    // console.log(parseInt(number, 10));
    if (parseInt(number, 10) === 100) {
        var userIdEl = document.querySelector('input#user_id');
        var userPassEl = document.querySelector('input#user_pass');
        // userIdEl.setAttribute('value', '');
        // userPassEl.setAttribute('value', '');
        userIdEl.value = '';
        userPassEl.value = '';
    }
}
var btnReset = document.querySelector('button#btn-reset');
btnReset.addEventListener('click', onClickBtnReset);


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
function onClickBtnOdd(e) {
    var max = prompt('숫자를 입력해주세요.');
    // console.log(parseInt(max, 10));
    // console.log(isNaN(parseInt(max, 10)));
    // console.log(typeof parseInt(max, 10) === 'number');
    if (!isNaN(parseInt(max, 10))) {
        var result = '';
        for (var i = 1; i <= parseInt(max, 10); i++) {
            // console.log(i);
            if (i % 2 === 1) {
                if (result !== '') {
                    result += ', ';
                }
                result += i;
                // console.log(i);
            }
            if (i === parseInt(max, 10)) {
                result += '.';
            }
        }
        var oddResultEl = document.querySelector('div#odd-result');
        oddResultEl.innerText = result;
    }
    // if (typeof parseInt(max, 10) === 'number') {
    // }
}
var btnOdd = document.querySelector('button#btn-odd');
btnOdd.addEventListener('click', onClickBtnOdd);


/*
Quest 8.
1. button#btn-add-city 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '도시명을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 도시명을 입력할 경우, ul#city-list 자식인 li 요소에 도시명 문자열이 추가되도록 작성합니다.
*/
// Answer 8.
function onClickBtnAddCity(e) {
    var newCity = prompt('도시명을 입력하세요.');
    if (newCity !== null && newCity !== '') {
        // console.log(newCity);
        var newItem = document.createElement('li');
        newItem.innerText = newCity;
        // console.log(newItem);
        var cityListEl = document.querySelector('ul#city-list');
        cityListEl.appendChild(newItem);
        // console.log(cityListEl);
    }
}
var btnAddCity = document.querySelector('button#btn-add-city');
btnAddCity.addEventListener('click', onClickBtnAddCity);


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
var currentId = 0;
// cuId = 0;
function onClickBtnColor(e) {
    var sentenceEls = document.getElementsByClassName('sentence');
    // console.log(sentenceEls);
    for (var i = 0; i < sentenceEls.length; i++) {
        var sentenceEl = sentenceEls[i];
        sentenceEl.style.color = 'red';
        if (i === currentId) {
            sentenceEl.style.color = 'black';
        }
    }
    currentId++;
    if (currentId >= sentenceEls.length) {
        currentId = 0; // 순환을 할 수 있도록 마지막에 해당하는 지점에서 다시 0 으로 현재값 변경.
    }
}
var btnColor = document.querySelector('button#btn-color');
btnColor.addEventListener('click', onClickBtnColor);


/*
Quest 10.
1. button#btn-go-top 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 스크롤이 현재 화면의 최상단으로 이동되도록 작성합니다.
*/
// Answer 10.
function onClickBtnGoTop(e) {
   window.scrollTo(0,0);
}
var btnGoTop = document.querySelector('button#btn-go-top');
btnGoTop.addEventListener('click', onClickBtnGoTop)