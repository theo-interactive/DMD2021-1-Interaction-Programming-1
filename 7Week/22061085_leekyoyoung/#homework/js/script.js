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
function onClickBtn1(e) {
    var spanEl = document.getElementById('student-number');
    spanEl.innerHTML = '22061085'
    alert('학번이 입력되었습니다.');
}
btn1El.addEventListener('click', onClickBtn1);

var btn2El = document.querySelector('#btn-student-name');
function onClickBtn2(e) {
    var span2El = document.getElementById('student-name');
    span2El.innerHTML = '이교영'
    alert('이름이 입력되었습니다');
}
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
function onClickBtn3(e) {
    console.log('윈도우 콘텐츠의 영역 width' + innerWidth + 'px, height : ' + innerHeight + 'px 입니다')
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

// undefined로 뜨는데 이유를 모르겠습니다...
var btn4El = document.querySelector('#btn-check-id');
function onClickBtn4(e) {
    var divEl = document.getElementById('user_id');
    console.log('value 속성 값의 문자열 개수는' + divEl.length + '입니다.');
    e.preventDefault();
}
btn4El.addEventListener('click', onClickBtn4);


// answer
// function onClickbtnCheckId(e) {
//     e.preventDefault();
//     var userIdEl = document.getElementById('user_id');
//     // console.log(userIdEl);
//     // 속성을 찾는 방법
//     var value = userIdEl.getAttribute('value'); // 문서상에 기입된 초기 속성값.
//     // console.log(value, value.length);
//     var msg = `input#user_id - value 속성 값의 문자열 개수는 ${value.length} 입니다.`;
//     console.log(msg);
//     // input 의 value
//     value = userIdEl.value; // input, textarea, select ... - 현재 상태의 값(value)를 받아온다
//     // console.log(value, value.length);
//     msg = 'input#user_id - value 속성 값의 문자열 개수는' + value.length + '입니다.';
//     console.log(msg);
// }

// var btnCheckId = document.querySelector('button#btn-check-id');
// btnCheckId.addEventListener('click', onClickbtnCheckId);
/*
Quest 4.
1. button#btn-cancel 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 현재 브라우저 창이 새로고침 되도록 작성합니다.
*/
// Answer 4.

var btn5El = document.querySelector('#btn-cancel');
function onClickBtn5(e) {
    location.reload();
    e.preventDefault();
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
    var apply = confirm('가입을하시겠습니까?', '0');
    if (apply == true) {
        alert('가입을 환영합니다');
    } else {
        alert('가입을 취소하였습니다.');
    }
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
function onClickbtn7(e) {
    e.preventDefault();
    var number1 = prompt('초기화하시려면 100을 입력하세요.');
    if (number1 == 100) {
        var input = document.getElementById('user_pass'); input.value = null;
        var input = document.getElementById('user_id'); input.value = null;
    }
}
btn7El.addEventListener('click', onClickbtn7);
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
var result = '', i;

var btn8El = document.querySelector('#btn-odd');
function onClickbtn8(e) {
    e.preventDefault();
    var inputNumber = prompt('숫자를 입력해주세요');
    for (i = 0; inputNumber >= i; i++) {
        if (i % 2 !== 0) {
            result += i;
            if (i < inputNumber - 1) {
                result += ', '
            } else {
                result += '.';
            }
        }
    }
    var divId = document.getElementById('odd-result');
    divId.innerHTML = result;

}
btn8El.addEventListener('click', onClickbtn8);
/*
Quest 8.
1. button#btn-add-city 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '도시명을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 도시명을 입력할 경우, ul#city-list 자식인 li 요소에 도시명 문자열이 추가되도록 작성합니다.
*/
// Answer 8.
var btn11El = document.querySelector('#btn-add-city')

function onClickBtn11(e) {
    var city = prompt('도시명을 입력하세요')
    var ulEl = document.querySelector('ul#city-list');
    var newLiEl = document.createElement('li');
    newLiEl.innerHTML = city;
    ulEl.appendChild(newLiEl);
}
btn11El.addEventListener('click', onClickBtn11);

// answer
// function onClickBtnAddCity(e) {
//     var newCity = prompt('도시명을 입력하세요.');
//     if (newCity !== null && newCity !== '') {
//         // console.log(newCity);
//         var newItem = document.createElement('li');
//         newItem.innerText = newCity;
//         // console.lof(newItem);
//         var cityListEl = document.querySelector('ul#city-list');
//         cityListEl.appendChild(newItem);
//         // console.lof(cityListEl);
//     }
// }

// var btnAddCity = document.querySelector('button#btn-add-city');
// btnAddCity.addEventListener('click', onClickBtnAddCity)
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
var btn9El = document.querySelector('#btn-color');
var Psen = document.querySelectorAll('p.sentence');
var Count = 0;
function onClickBtn9(e) {
    for (i = 0; i < Psen.length; i++) {
        Psen[i].style.color = 'red';
        if(i == Count){
            Psen[i].style.color = 'black';
        }
    }
    Count++;
    if (Count == Psen.length) {
        Count = 0;
    }
    e.preventDefault();
}
btn9El.addEventListener('click', onClickBtn9)

// answer
// var currentId = 0;
// function onclickBtnColor(e) {
//     var sentenceEls = document.getElementsByClassName('sentence');
//     // console.log(sentenceEls);
//     for (var i = 0; i < sentenceEls.length; i++) {
//         var sentenceEl = sentenceEls[i];
//         sentenceEl.style.color = 'red';
//         if (i === currentId) {
//             sentenceEl.style.color = 'black';
//         }
//     }
//     currentId++;
//     if(currentId >= sentenceEls.length){
//         currentId = 0;
//     }
// }

// var btnColor = document.querySelector('button#btn-color');
// btnColor.addEventListener('click', onclickBtnColor);
/*
Quest 10.
1. button#btn-go-top 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 스크롤이 현재 화면의 최상단으로 이동되도록 작성합니다.
*/
// Answer 10.

var btn10El = document.getElementById('btn-go-top');

function onClickbtn10(e) {
    e.preventDefault();
    window.scrollTo(0, 0);
}
btn10El.addEventListener('click', onClickbtn10);

