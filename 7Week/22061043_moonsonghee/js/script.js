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

// var bthStudentNumE1 = document.querySelector('button#btn-student-number') ;
// var spanStudentNum = document.querySelector('button#btn-student-name') ;
// //btn-student-number와 btn-student-name id 요소를 찾아 변수에 할당
// function OnClickBtnStudentNumber()
// {
    
//     spanStudentNum.innerHTML = '22061043'; // innerHTML 사용 내부입력하게 만든다
//     alert('학번이 입력되었습니다.');
// }
// btnStudent_Number.addEventListener('click',OnClickBtn_StudentNumber);

// function OnClickBtn_StudentName()
// {
//     spanStudentNum.innerHTML = "문송희"; // span #student-name요소를 통해 내부에 자신의 이름이 입력
//     alert("이름이 입력되었습니다."); // 경고창으로 메세지 출력
// }


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
var btnWinSixeE1 = document.querySelector('#btn-window-size');

var width = window.innerWidth;
var height = window.innerHeight;

function OnClockBtn_WindowSize()
{
    console.log('윈도우 콘텐츠의 영역 width : ${wWidth}px, height : ${wHeight}px 입니다.');
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
var btnCheck_Id = document.querySelector('button#btn-check-id');
var userIdE1 = document.getElementById('user_id');

function onClickBtnCheckId(e)
{
    e.preventEdfault();
    var id= document.querySelector('user_id');

    var idLength = id.getAttribute('value').length;

    console.log ("inter#user_id  - value 속성 값의 문자열 개수는 " + idLength +  "입니다.");
}



/*
Quest 4.
1. button#btn-cancel 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 현재 브라우저 창이 새로고침 되도록 작성합니다.
*/
// Answer 4.
var btnCancel = document.querySelector('#btn-cancel');
function OnClickBtnCancel()
{
    console.log('clicked');
    window.location.reload();
}
btnCancel.addEventListener('click', OnClickBtnCancel);


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
// var btnApply = document.querySelector('#btn-apply');
// function OnClickBtnApply(e)
// {
//     e.preventEdfault();
//     var promptApply = confirm('가입하시겠습니까?');
//     //true, false

//     if(promptApply === true)
//     {
//         alert('가입을 환영합니다');
//     }
//     else
//     {
//         alert('가입을 취소하였습니다');

//     }
// }
// btnApply.addEventListener('click', OnClockBtn_Apply);
//오류가 발생하는것같아 잘 모르겠어서 닫아두겠습니다...



/*
Quest 6.
1. button#btn-reset 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '초기화하시려면 100을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 100을 정확하게 입력할 경우, input#user_id 와 input#user_pass 요소의 value 속성이 빈 값으로 초기화 되도록 작성합니다.
*/
// Answer 6.
// var btnReset = document.querySelector('#btn-reset');
// var btnUserPass = document.querySelector('#user_pass');
//
// function OnClickBtnReset() { // 이벤트 핸들러 작성
//     console.log('clicked');
//     var result = prompt('초기화하시려면 100을 입력하세요.'); //다이얼로그창 출력.
//     if (result == '100')
       { 
//         userId.value = "userId";  
//         btnUserPass.value = "비밀번호 입력";
//     }
// }
// btnReset.addEventListener('click', OnClickBtnReset);
//에러때문인지 작동이 안되는것같습니다...



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


// var btnOddEl = document.querySelector('button#btn-odd');
// var divOddResult = document.querySelector('div#odd-result');

// function onClickBtnOdd() {
//     var oddResult = ''; // oddResult 변수를 선언
//     var oddPrompt = prompt('숫자를 입력해주세요.'); // 다이얼로그창 출력
//     for (var i = 0; i <= oddPrompt; i++){ // 작거나 같을 때까지 0부터 i를 반복
//         if (i % 2 == 1){ // 만약 i가 홀수
//             oddResult += i; 
//             if (i < oddPrompt - 1) // 만약 i가 oddPrompt -1보다 작을 경우
//             {
//                 oddResult += ', ';.
//             }
//             else // 만약 i가 oddPrompt -1보다 클떄 
//             {
//                 oddResult += '.'; 
//             }
//         }
//     }

              
    



/*
Quest 8.
1. button#btn-add-city 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '도시명을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 도시명을 입력할 경우, ul#city-list 자식인 li 요소에 도시명 문자열이 추가되도록 작성합니다.
*/
// Answer 8.
// var btnAddCityEl = document.querySelector('#btn-add-city');

// function onClickbtnAddCity(e) {
//     var city = prompt('도시명을 입력하세요')
//     var ulEl = document.querySelector('ul#city-list');
//     var newLiEl = document.createElement('li');
//     newLiEl.innerHTML = city;
//     ulEl.appendChild(newLiEl);
// }



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
//이문제는 해결 못했습니닷...



/*
Quest 10.
1. button#btn-go-top 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 스크롤이 현재 화면의 최상단으로 이동되도록 작성합니다.
*/
// Answer 10.
var btn10El = document.querySelector("button#btn-go-top");

btn10El.addEventListener("click", onClickBtnToggle10);

function onClickBtnToggle10() 
{
    window.scrollTo(0, 0); // 최상단으로 이동
}
btn10E1.addEventListener('click',onClickBtnToggle10);
       
}
