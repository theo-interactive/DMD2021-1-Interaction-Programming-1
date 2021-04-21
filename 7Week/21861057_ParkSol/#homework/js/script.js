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
var btnNumberEl = document.querySelector('#btn-student-number'); // btnNumberEl 변수를 만들어, button#btn-student-number 요소를 대입합니다.
btnNumberEl.addEventListener('click', onClickBtnNumber);

function onClickBtnNumber() {
    var numberAdd = document.getElementById('student-number'); // numberAdd 변수를 만들어, student-number 요소를 대입합니다.
    numberAdd.innerHTML = '21861057' // 해당 변수 내부에 학번을 추가시켜줍니다.
    alert('학번이 입력되었습니다.'); // 경고창이 출력됩니다.
}

var btnNameEl = document.querySelector('#btn-student-name'); // btnNameEl 변수를 만들어, button#btn-student-name 요소를 대입합니다.
btnNameEl.addEventListener('click', onClickBtnName);

function onClickBtnName() {
    var nameAdd = document.getElementById('student-name'); // nameAdd 변수를 만들어, student-name 요소를 대입합니다.
    nameAdd.innerHTML = '박솔' // 해당 변수 내부에 이름을 추가시켜줍니다.
    alert('이름이 입력되었습니다.'); // 경고창이 출력됩니다.
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
var btnWinEl = document.querySelector('#btn-window-size'); // btnWinEl 변수를 만들어, button#btn-window-size 요소를 대입합니다.
btnWinEl.addEventListener('click', onClickBtnWinSize);

function onClickBtnWinSize() {
    console.log('윈도우 콘텐츠의 영역 width : '+ window.innerWidth + ' px, height : ' + window.innerHeight + 'px 입니다.');
    // 이벤트를 호출하면, 윈도우 콘텐츠 영역의 너비 값과 높이 값이 console에 출력됩니다.
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
var btnIdEl = document.querySelector('#btn-check-id'); // btnIdEl 변수를 만들어, button#btn-check-id 요소를 대입합니다.
var userIdEl = document.getElementById('user_id'); // userIdEl 변수를 만들어, id가 user_id인 요소를 찾아줍니다.

btnIdEl.addEventListener('click', onClickBtnCheckId); 

function onClickBtnCheckId(e){
    e.preventDefault(); // 우선 새로고침을 막아줍니다.
    console.log('input#user_id - value 속성 값의 문자열 개수는 ' + userIdEl.value.length + '입니다.');
    // 한꺼번에 해주기 위해, userIdEl의 value 속성 값을 찾고 그 값의 개수를 바로 출력시켜줍니다.
} 


/*
Quest 4.
1. button#btn-cancel 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 현재 브라우저 창이 새로고침 되도록 작성합니다.
*/
// Answer 4.
var btnCancelEl = document.querySelector('#btn-cancel'); // btnCancelEl 변수를 만들어, button#btn-cancel 요소를 대입합니다.
btnCancelEl.addEventListener('click', onClickBtnCancel);

function onClickBtnCancel(){
    window.location.reload()
    // 이벤트 호출 시, window.location.reload()로 새로고침을 해줍니다.
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
var btnApplyEl = document.querySelector('#btn-apply'); // btnApplyEl 변수를 만들어, button#btn-apply 요소를 대입합니다.
btnApplyEl.addEventListener('click', onClickBtnApply);

function onClickBtnApply(){
    applyConfirm = confirm('가입하시겠습니까?'); // 메세지를 포함한 확인창을 출력합니다.
    if (applyConfirm == true){ // 만약 사용자가 확인을 선택한 경우
        alert('가입을 환영합니다!') // 해당 메시지 결과값이 출력됩니다.
    }
    else if (applyConfirm == false){ // 만약 사용자가 취소를 선택한 경우
        alert ('가입을 취소하였습니다.') // 해당 메시지 결과값이 출력됩니다.
    }
}


/*
Quest 6.
1. button#btn-reset 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '초기화하시려면 100을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 100을 정확하게 입력할 경우, input#user_id 와 input#user_pass 요소의 value 속성이 빈 값으로 초기화 되도록 작성합니다.
*/
// Answer 6.
var btnResetEl = document.querySelector('#btn-reset'); // btnResetEl 변수를 만들어, button#btn-reset 요소를 대입합니다.
var userPassEl = document.getElementById('user_pass'); // userPassEl 변수를 만들어, id가 user_pass인 요소를 찾아줍니다.

btnResetEl.addEventListener('click', onClickBtnReset);

function onClickBtnReset(e){
    e.preventDefault(); // 우선 새로고침을 막아줍니다.
    var resetPrompt = prompt('초기화하시려면 100을 입력하세요.'); // 입력창이 포함된 다이얼로그창을 출력합니다.
    if (resetPrompt === '100'){ // 만약 사용자가 100을 정확하게 입력할 경우
        userIdEl.setAttribute("value", ""); // input#user_id 요소의 value 속성을 빈 값으로 초기화시킵니다.
        userPassEl.setAttribute("value", ""); // input#user_pass 요소의 value 속성을 빈 값으로 초기화시킵니다.
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
var btnOddEl = document.querySelector('#btn-odd'); // btnOddEl 변수를 만들어, button#btn-odd 요소를 대입합니다.

btnOddEl.addEventListener('click', onClickBtnOdd);

function onClickBtnOdd(){
    var oddResult = ''; // 결과를 다 넣어줄 oddResult 변수를 선언합니다.
    var oddPrompt = prompt('숫자를 입력해주세요.'); // 입력창이 포함된 다이얼로그창을 출력합니다.
    for (var i = 0; i <= oddPrompt; i++){ // oddPrompt보다 작거나 같을 때까지 0부터 i를 반복시켜줍니다.
        if (i % 2 == 1){ // 만약 i가 홀수일 경우
            oddResult += i; // oddResult에 추가됩니다.
            if (i < oddPrompt - 1) // 만약 i가 oddPrompt -1보다 작을 경우
            {
                oddResult += ', '; // ,를 넣어줍니다.
            }
            else // 만약 i가 oddPrompt -1보다 클 경우
            {
                oddResult += '.'; // .을 넣어줍니다.
            }
        }
    }
    var DivOddResult = document.getElementById('odd-result'); // DivOddResult 변수를 만들어, id가 odd-result인 요소를 찾아줍니다.
    DivOddResult.innerHTML = oddResult; // DivOddResult에 oddResult 값을 추가시켜줍니다.
}

/*
Quest 8.
1. button#btn-add-city 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '도시명을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 도시명을 입력할 경우, ul#city-list 자식인 li 요소에 도시명 문자열이 추가되도록 작성합니다.
*/
// Answer 8.
var btnAddCityEl = document.querySelector('#btn-add-city'); // btnAddCityEl 변수를 만들어, button#btn-add-city 요소를 대입합니다.

btnAddCityEl.addEventListener('click', onClickBtnAddCity);

function onClickBtnAddCity(){
    var AddCityPrompt = prompt('도시명을 입력하세요.'); // 입력창이 포함된 다이얼로그창을 출력합니다.
    
    if (typeof AddCityPrompt == 'string'){ // 만약 사용자가 도시명을 입력할 경우
        var ulCityList = document.querySelector('ul#city-list'); // ulCityList 변수를 만들어, ul#city-list 요소를 대입합니다.
        var ulcityListLi = document.createElement('li'); // li 요소를 추가해줍니다.
        ulcityListLi.innerHTML = AddCityPrompt; // ulcityListLi에 AddCityPrompt를 추가시켜줍니다.
        ulCityList.appendChild(ulcityListLi);

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
var btnColorEl = document.querySelector('#btn-color'); // btnColorEl 변수를 만들어, button#btn-color 요소를 대입합니다.
var clickCount = 0; // 몇 번 클릭했는지 세어줄 변수를 만들어줍니다.

btnColorEl.addEventListener('click', onClickBtnColor);

function onClickBtnColor(){
    var pSentenceEls = document.querySelectorAll('p.sentence'); // pSentenceEls라는 변수를 만들어, p 요소 중 sentence라는 클래스 이름을 가진 것들을 모두 가져옵니다.
    for (i = 0; i < pSentenceEls.length; i++) { // i가 pSentenceEls의 길이보다 작을 때 0부터 반복합니다.
        pSentenceEls[i].style.color = 'red'; // 해당 요소들의 컬러를 모두 red로 바꿔줍니다.

        if (i === clickCount) { // 예외가 있는데, 만약 i값이 clickcount와 같을 경우
            pSentenceEls[i].style.color = 'black'; // 해당 요소만은 black으로 바꿔줍니다.
        }
    }
    clickCount++; // 그리고 한번 클릭할 때마다 clickCount는 올라갑니다.

    if (clickCount === pSentenceEls.length){
        // 만약 clickCount가 pSentenceEls의 길이와 같다면, 다시 처음부터 p 요소가 black이 되어야 하기에,
        clickCount = 0; // clickCount를 0으로 바꿔줍니다. 그러면 지속적으로 반복시킬 수 있습니다.
    }
}


/*
Quest 10.
1. button#btn-go-top 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 스크롤이 현재 화면의 최상단으로 이동되도록 작성합니다.
*/
// Answer 10.
var btnGoTopEl = document.querySelector('#btn-go-top'); // btnGoTopEl 변수를 만들어, button#btn-go-top 요소를 대입합니다.

btnGoTopEl.addEventListener('click', onClickBtnGoTop);

function onClickBtnGoTop(){
    window.scrollTo(0, 0); // 이벤트 호출 시 스크롤이 화면의 최상단으로 가도록 값을 지정해줍니다.
}

