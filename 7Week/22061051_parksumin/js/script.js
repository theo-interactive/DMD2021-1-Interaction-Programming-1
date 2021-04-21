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
// var buttonEl = document.querySelector('#btn-student-number'); // 처음에는 이렇게 적었다가 아무런 표시가 안뜨길래 자세히보니 변수 이름을 잘못 지정
// var btnStudent-Number = document.querySelector('#btn-student-number'); // 다음에 이름대로 적었다가 빨간표시로 인해 또 고민
var btnStudent_Number = document.querySelector('#btn-student-number'); // 드디어 해결!
function OnClickBtnStudentNumber() { // 이벤트 핸들러 작성
    btnStudent_Number.innerHTML = '22061051';// innerHTML 사용! 내부에 입력되게 만듭니다.
    alert('학번이 입력되었습니다.'); // 경고창 출력
}
btnStudent_Number.addEventListener('click', OnClickBtnStudentNumber);// _인지 -인지 대소문자하나 실수에도 경고창이 뜨지 않아 매우 힘들었습니다..

// var btnStudent_Name = document.querySelector('#btn-student-name');
// function OnClickBtnStudentName() { // 이벤트 핸들러 작성
//     btnStudent_Name.innerHTML = '박수민';// innerHTML 사용! 내부에 입력되게 만듭니다.
//     alert('이름이 입력되었습니다.'); // 경고창 출력
// }
// btnStudent_Name.addEventListener('click', OnClickBtnStudentName); // number를 name으로 바꿨을뿐인데 창이 뜨질 않습니다......일단 주석으로 막아놓겠습니다..



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
// var btnWindowSize = document.querySelector('button#btn-window-size');
// var wWidth = window.innerWidth;
// var wHeight = window.innerHeight;
// // 위와 마찬가지로 inner사용 width height 변수를 만들어줍니다.
// function OnClickBtnWindowSize() { // 이벤트 핸들러 작성
//     console.log('clicked');
//     console.log('윈도우 콘텐츠의 영역 width : ${wWidth}px, height : ${wHeight}px 입니다.');//경고창이 아니기 때문에 console로 작성해줍니다.
// }
// btnWindowSize.addEventListener('click', OnClickBtnWindowSize); // 형식만 동일하고 window, width, height만 추가되고 문제가 없어 보이는데 왜 콘솔창에 숫자가 안뜨는지 모르겠습니다...일단 이것도 주석처리 했습니다..
//console.log('clicked')를 사용하면 clicked와 아래의 로고안에 들어있는 값이 같이 나옵니다..



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
// var btnCheckId = document.querySelector('#btn-check-id');
// var userId = document.getElementById('user-id');
// function OnClickBtnCheckId() { // 이벤트 핸들러 작성
//     console.log('clicked');
//     console.log('input#user_id - value 속성 값의 문자열 개수는 ${userId.length}입니다.');//경고창이 아니기 때문에 console로 작성해줍니다.
// }
// btnCheckId.addEventListener('click', OnClickBtnCheckId); //이렇게 하면 콘솔창에 뜨긴하는데 금방 사라져버립니다.
// 완벽하지 않기에 막아놨습니다...

/*
Quest 4.
1. button#btn-cancel 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 현재 브라우저 창이 새로고침 되도록 작성합니다.
*/
// Answer 4.
var btnCancel = document.querySelector('#btn-cancel');
function OnClickBtnCancel() { // 이벤트 핸들러 작성
    console.log('clicked');
    window.location.reload(); //새로고침
}
btnCancel.addEventListener('click', OnClickBtnCancel); //새로고침이 되는것 같긴한데....콘솔창에 clicked가 반짝 나타났다 사라집니다.

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
var btnApply = document.querySelector('#btn-apply');
function OnClickBtnApply() { // 이벤트 핸들러 작성
    console.log('clicked');
    var result = confirm('가입하시겠습니까?');
    if (result) {
        alert('가입을 환영합니다!');
    }
    else {
        alert('가입을 취소하였습니다.');
    }// 선택을 한 경우와 취소를 한 경우로 나뉘기 때문에 if 와 else(if가 아닌 나머지 전부)를 작성한다.
}
btnApply.addEventListener('click', OnClickBtnApply); //여기 부분에서 식을 다 적었는데도 되지않아 고민하던 도중 마지막줄을 apply로 수정하지 않은 것을 발견, 해결.


/*
Quest 6.
1. button#btn-reset 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '초기화하시려면 100을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 100을 정확하게 입력할 경우, input#user_id 와 input#user_pass 요소의 value 속성이 빈 값으로 초기화 되도록 작성합니다.
*/
// Answer 6.
// var btnReset = document.querySelector('#btn-reset');
// var btnUserPass = document.querySelector('#user_pass'); //user_pass 새로 작성.
// function OnClickBtnReset() { // 이벤트 핸들러 작성
//     console.log('clicked');
//     var result = prompt('초기화하시려면 100을 입력하세요.'); //입력창이 포함된 다이얼로그창 출력.
//     if (result == '100') { //100을 정확하게 입력했을 경우, 이번에는 정확하게 입력할 경우만 나와있으니 else는 사용을 안합니다.
//         userId.value = "userId"; //빈 값으로 만든다는 문장을 이해를 못해 기존 입력칸에 나와있는 문장을 적어봤습니다. 그런데 제대로 작동이 안되는 것 같아 이부분도 주석처리하겠습니다..  
//         btnUserPass.value = "비밀번호 입력";
//     }
// }
// btnReset.addEventListener('click', OnClickBtnReset);


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
// var btnOdd = document.querySelector('#btn-odd');
// var btnOddResult = document.querySelector('#odd-result'); // 새로 만들어줍니다.
// function OnClickBtnOdd() { // 이벤트 핸들러 작성
//     console.log('clicked');
//     var result = prompt('숫자를 입력해주세요.'); //입력창이 포함된 다이얼로그창 출력.
// 홀수를 구하는 법은 알겠지만 이를 식으로 쓰는 법은 잘 모르겠습니다ㅠㅠ
// }
// btnOdd.addEventListener('click', OnClickBtnOdd);


/*
Quest 8.
1. button#btn-add-city 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '도시명을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 도시명을 입력할 경우, ul#city-list 자식인 li 요소에 도시명 문자열이 추가되도록 작성합니다.
*/
// Answer 8.
// var btnAddCity = document.querySelector('#btn-add-city');
// var btnCityList = document.querySelector('#city-list'); // 새로 만들어줍니다.
// function OnClickBtnAddCity() { // 이벤트 핸들러 작성
//     var result = prompt('도시명을 입력하세요.'); //입력창이 포함된 다이얼로그창 출력.
//     if (result == "") { //사용자가 입력. 
//         var Citylist = document.createElement('li'); // li 태그 생성.
//         CityList.appendChild(Citylist); // appendChile를 이용ㅎ해 문자열 추가.
//         Citylist.innerHTML = result;
//     }
// }
// 중간에 식이 빠졌는지 알림창이 뜨지 않아 일단 막아 놓겠습니다

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
// var btnAddColor = document.querySelector('#btn-color');
// function OnClickBtnColor() { // 이벤트 핸들러 작성
    // var sentence = 
//     for (var i = 0; i < p.length; i++) 
//     {
//         p[i].style.color = 'red';
//     }
// }
// 범위를 이용해 푸는 것은 알겠는데 이 다음 부분을 잘 모르겠습니다.



/*
Quest 10.
1. button#btn-go-top 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 스크롤이 현재 화면의 최상단으로 이동되도록 작성합니다.
*/
// Answer 10.
var btnGoTop = document.querySelector('#btn-go-top'); 
    function onClickBtnGoTop() { // 이벤트 핸들러 작성
        window.scrollTo(0, 0); // 최상단 이동.
    }
btnGoTop.addEventListener('click', OnClickBtnGoTop);