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

var btnStudent_Number = document.querySelector('#btn-student-number');
var btnStudent_Name = document.querySelector('#btn-student-name');
// btn-student-number와 btn-student-name id 요소를 찾아 변수에 할당

// 이벤트 핸들러 작성
function OnClickBtn_StudentNumber(){

    document.querySelector('#student-number').innerHTML = "21961027"; // span #student-number요소를 찾아 내부에 자신의 학번이 입력되도록 만듦.
    alert("학번이 입력되었습니다."); // 경고창으로 메세지 출력
}

btnStudent_Number.addEventListener('click',OnClickBtn_StudentNumber);
// 버튼에 위에 작성한 함수를 할당. 클릭했을 때 실행하도록 만듬

// 페이지에서 '학번 출력' 버튼을 누르면 # 우측에 자신의 학번이 입력됨

function OnClickBtn_StudentName(){

    document.querySelector('#student-name').innerHTML = "김지후"; // span #student-name요소를 찾아 내부에 자신의 이름이 입력되도록 만듦.
    alert("이름이 입력되었습니다."); // 경고창으로 메세지 출력
}

btnStudent_Name.addEventListener('click',OnClickBtn_StudentName);
// 마찬가지로 이벤트 리스너를 할당

// 각 버튼을 눌렀을 때 학번과 이름이 잘 출력되는 것을 확인, 문제 해결!



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


var btnWindow_Size = document.querySelector('#btn-window-size');
// btn-window-size id 요소를 찾아 변수에 할당

var width = window.innerWidth;
var height = window.innerHeight;
// 윈도우 콘텐츠 영역의 너비 값과 높이 값을 변수에 대입(간단하게 쓰기 위해)

// 할당할 이벤트 핸들러 작성
function OnClickBtn_WindowSize(){

    console.log(`윈도우 콘텐츠의 영역 width : ${width}px, height : ${height}px 입니다.`);
    // 윈도우 콘텐츠의 영역 값을 문자열 속에 포함시켜 출력하도록.
}

btnWindow_Size.addEventListener('click', OnClickBtn_WindowSize);
// 이벤트 리스너 할당, 클릭 시 실행되도록

// console에 값이 출력되는 것을 확인, 문제 해결!




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

var btnCheck_Id = document.querySelector('#btn-check-id') // 요소를 찾아 변수에 할당

function OnClickBtn_CheckID(e){

    e.preventDefault(); // 기본 이벤트를 방지하는 속성
    // (index의)form태그 내부의 버튼은 기본적으로 눌리면 자동으로 새로고침되므로, 버튼이 눌리자마자 새로고침 되는 것을 원치 않는다면 이렇게 이벤트를 막아주어야 함!(중요)

    var userId = document.querySelector('#user_id');
    
    var value_Length = userId.getAttribute('value').length; 
    // getAttribute를 통해 #user_id의 value 속성을 가져오고, 문자열의 길이를 반환("User id" = 7글자(공백 포함))

    console.log(`input#user_id - value 속성 값의 문자열 개수는 ${value_Length}입니다.`);
    // 문자열 출력.
}

btnCheck_Id.addEventListener('click', OnClickBtn_CheckID);
// 이벤트 리스너 할당, 클릭시 실행

// 문자열이 제대로 출력되는 것을 확인, 문제 해결!


/*
Quest 4.
1. button#btn-cancel 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 현재 브라우저 창이 새로고침 되도록 작성합니다.
*/
// Answer 4.

var btnCancle = document.querySelector('#btn-cancel');

function OnClickBtn_ReloadPage(e){
    e.preventDefault(); // 기본 이벤트(form 내부 버튼 강제 새로고침) 막음

    // console.log("페이지 새로고침♪"); //form태그 강제 새로고침이 막혔는지 확인, 확인 후 주석 처리

    window.location.reload(); // 페이지를 새로 고침
}

btnCancle.addEventListener('click', OnClickBtn_ReloadPage);
// 이벤트 리스너 할당, 클릭시 실행


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


var btnApply = document.querySelector('#btn-apply'); // 요소를 찾아 변수에 할당

function OnClickBtn_Apply(e){
    e.preventDefault(); // 기본 이벤트(form 내부 버튼 강제 새로고침) 막음

    var promptApply = confirm('가입하시겠습니까?'); // 메세지를 담은 확인창 출력.
    // 확인 = true, 취소 = false

    if(promptApply === true){ // 사용자가 확인을 선택한 경우
        alert('가입을 환영합니다!'); // 환영 메세지 경고창으로 출력
    }
    else { // 사용자가 취소를 선택한 경우
        alert('가입을 취소했습니다.'); // 가입 취소 메세지 출력
    }
    
}

btnApply.addEventListener('click', OnClickBtn_Apply);
// 이벤트 리스너 할당, 클릭시 실행

// 확인창과 각 경우 출력되는 메세지 확인, 문제 해결!



/*
Quest 6.
1. button#btn-reset 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '초기화하시려면 100을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 100을 정확하게 입력할 경우, input#user_id 와 input#user_pass 요소의 value 속성이 빈 값으로 초기화 되도록 작성합니다.
*/
// Answer 6.


var btnReset = document.querySelector('#btn-reset'); // 요소를 찾아 변수에 할당

function OnClickBtn_Reset(e){
    e.preventDefault(); // 기본 이벤트(form 내부 버튼 강제 새로고침) 막음

    var promptReset = prompt('초기화하시려면 100을 입력하세요.');
    // 취소 = null

    if(promptReset === '100'){ //100을 입력했을 때.
        var userId = document.querySelector('#user_id');
        var userPass = document.querySelector('#user_pass');
        //console.log("100입력 확인.");
        
        userId.setAttribute("value", "");
        userPass.setAttribute("value", ""); // value 속성이 빈 값으로 초기화되도록 작성.

    }
    else if(promptReset === null){ // 취소 버튼을 눌렀을 때.
        console.log("입력을 취소했습니다."); // 입력 취소 메세지를 출력하고 함수 종료.
        return;
    } 
    else{ // 100이 아닌 다른 문자를 입력했을 때.
        console.log("100이 아닌 수를 입력했습니다."); // 100이 아니라는 메세지를 출력하고 함수 종료.
        return;
    }

}

btnReset.addEventListener('click', OnClickBtn_Reset);
// 이벤트 리스너 할당, 클릭시 실행

// value 속성들의 값이 사라지는 것(value = "..."에서 => value가 됨)을 확인, 문제 해결!



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

var btnOdd = document.querySelector('#btn-odd'); //요소를 찾아 변수에 할당


function OnClickBtn_CheckOdd() {
    var promptCheckOdd = prompt('숫자를 입력해주세요');
    //다이얼로그가 포함된 입력창 띄우기.

    if (promptCheckOdd === null) { // 취소 버튼을 누르면
        console.log('입력 취소');
        return; // 함수를 종료
    }
    if (promptCheckOdd === '') {
        alert('숫자를 정확히 입력해 주세요'); // 아무 것도 입력하지 않으면 메세지 출력
    }

    var toInt = Number(promptCheckOdd); // 입력받은 문자열 값(기본 문자열)을 숫자 자료형으로 변환시켜줌
    //console.log(toInt); 결과값 확인(확인 후 주석 처리)

    if(toInt !== NaN){ // 입력받은 값이 숫자로 잘 변환되었다면(문자열 등을 넣으면 변환이 불가능하므로 NaN, 실행하려면 숫자를 넣어야만 함)아래 코드 실행.
        for(i = 0; i <= toInt; i++){ // 입력받은 값까지 반복문을 돌림

            if (i % 2 == 1) { // 현재 i의 값이 홀수면(2를 나눠서 1이 남으면 홀수)
                document.querySelector('#odd-result').innerHTML += i; // div#odd-result 의 내부에 결과값을 넣어줌.

                if(i <= toInt - 2){
                    document.querySelector('#odd-result').innerHTML +=  ', ';
                    // 출력하는 홀수 중 마지막 숫자 전까지는 뒤에 쉼표를 붙여 줌.
                }
                else{
                    document.querySelector('#odd-result').innerHTML +=  '. ';
                    // 마지막으로 출력하는 홀수이면 끝에 점을 찍어줌.
                }
            }

        }
    }
    else{ // 숫자가 아닌 다른 자료형 값을 입력했다면 toInt가 NaN이므로 아래 코드 실행
        console.log('숫자가 아닌 값이 입력되었습니다!');
    }

}


btnOdd.addEventListener('click', OnClickBtn_CheckOdd);
// 이벤트 리스너 할당, 클릭시 실행

// 홀수를 입력하면 제대로 출력됨을 확인, 문제 해결!

/*
Quest 8.
1. button#btn-add-city 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '도시명을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 도시명을 입력할 경우, ul#city-list 자식인 li 요소에 도시명 문자열이 추가되도록 작성합니다.
*/
// Answer 8.

var btnAdd_City = document.querySelector('#btn-add-city'); // 요소를 찾아 변수에 할당


function OnClickBtn_AddCity(){

    var promptAddCity = prompt('도시명을 입력하세요.');

    if(promptAddCity === null){ //취소 버튼을 눌렀을 때. 
        console.log("취소하였습니다.");
    }
    else if(promptAddCity !== ''){ // 뭐라도 입력된 것이 있다면
        //console.log(promptAddCity); 도시 이름을 확인(확인 후 주석 처리)

        var currentCity = document.querySelector('ul#city-list');// li를 만들어서 넣을 ul#city-list 리스트를 가져오고
        var newCity =  document.createElement("li"); // 리스트 요소를 만듬
        newCity.appendChild(document.createTextNode(promptAddCity)); // 정보를 담은 노드를 만들고 (promptAddCity는 string이라서 "" 안 붙여도 ok)
        currentCity.appendChild(newCity); // ul#city-list 리스트에 이어붙여준다.
    }

}

btnAdd_City.addEventListener('click', OnClickBtn_AddCity);
// 이벤트 리스너 할당, 클릭시 실행

// 텍스트를 입력했을 때 li가 추가되는 것을 확인, 문제 해결!

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

var btnColor = document.querySelector('#btn-color'); // 요소를 찾아 변수에 할당

var clickCount = 0; // 클릭한 횟수를 알아내기 위한 변수, 최초 클릭될 때 1이 됨

function OnClickBtn_Color(){


    var sentences = document.getElementsByTagName('p'); // p 태그가 있는 요소를 전부 찾아서

    for(i = 0; i < sentences.length; i++){
        //console.log(sentences[i]);
        sentences[i].style.color = 'red'; // 색상을 모두 빨간색으로 바꾸어줌.
    }

    sentences[clickCount].style = 'black'; // 현재 클릭획수의 글자는 검정색으로.
    clickCount++; // 글자색을 모두 바꾸고 나면 다음 글자의 색을 바꿀 수 있게끔 카운트를 1 더해줌.
    // console.log(clickCount); // 현재 클릭 횟수(순서)를 출력, 확인 후 주석 처리

    if (clickCount >= sentences.length) {
        clickCount = 0; // 마지막 요소에 다다르면 클릭횟수를 초기화시켜서 루프가 돌게끔.  
    }

    // 색을 빨강색으로 모두 바꾼 뒤 특정 순번의 p만 검정색으로 바꾸어 주는 처리를 해서 이전 순번에서 검정색으로 변했던 p가 계속 검정색으로 남아있지 않게해줌.


    /*
    삽질 기록장
    var sentences =  document.querySelectorAll('p.sentence');
    //console.log(sentences);

    for(i = 0; i < sentences.length; i++){
        console.log(sentences[i]);
        sentences[i].setAttribute("id", "color"); // 색상을 바꾸기 위해 id를 추가.
    }

    var toColorRed = document.getElementById('color');
    console.log(toColorRed.style);

    ??????
    ????????? =>   ???????????

    */

}

btnColor.addEventListener('click', OnClickBtn_Color);
// 이벤트 리스너 할당, 클릭시 실행

// 의도한 대로 작동을 확인, 문제 해결!


/*
Quest 10.
1. button#btn-go-top 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 스크롤이 현재 화면의 최상단으로 이동되도록 작성합니다.
*/
// Answer 10.

var btnGo_Top = document.querySelector('#btn-go-top'); // 요소를 찾아 변수에 할당

function OnClickBtn_Go_Top(){
    // console.log("최상단으로 스크롤");
    window.scrollTo(0, 0); // 화면 좌측 상단 기준 0px, 0px 위치로 이동시키도록.
}

btnGo_Top.addEventListener('click', OnClickBtn_Go_Top);
// 이벤트 리스너 할당, 클릭시 실행

// 잘 올라가는 것을 확인, 문제 해결!


