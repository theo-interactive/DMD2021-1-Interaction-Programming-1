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

// #btn-student-number 요소를 찾아서 변수 넣어줌
var btnStudentNumber = document.querySelector("#btn-student-number");

// 이벤트 핸들러를 만들어줌
function onClickBtnStudentNumber(){
    var SNumber =  document.querySelector("#student-number");
    SNumber.innerText = "22061075";   // 학번이 입력되고,
    alert("학번이 입력되었습니다."); //  경고창 출력
}
// btnStudentNumber 요소를 클릭하면 이벤트 핸들러로 간다.
btnStudentNumber.addEventListener("click",onClickBtnStudentNumber);


// button#btn-student-name 요소를 찾아서 변수 넣어줌
var btnStudentName = document.querySelector("button#btn-student-name");

// 이벤트 핸들러를 만들어줌
function onClickBtnStudentName() {
    var SNumber =  document.querySelector("span#student-name");
    SNumber.innerHTML = "우은영";   // 이름이 입력되고,
    alert("이름이 입력되었습니다.");    // 경고창 출력
}
// btnStudentName 요소를 클릭하면 이벤트 핸들러로 간다.
btnStudentName.addEventListener("click", onClickBtnStudentName);

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

// button#btn-window-size 요소를 찾아서 변수 넣어줌
var btnWindowSize = document.querySelector("button#btn-window-size");

// 이벤트 핸들러를 만들어줌
function onClickBtnWindowSize() {
    console.log("윈도우 콘텐츠의 영역 width : " + window.innerWidth +"px, height : " + window.innerHeight +"px 입니다."); 
    // " 윈도우 콘텐츠의 영역 width : 1005px, height : 951px 입니다. " 출력된다
}
// btnWindowSize 요소를 클릭하면 이벤트 핸들러로 간다.
btnWindowSize.addEventListener("click",onClickBtnWindowSize);




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

// button#btn-check-id 요소를 찾아서 변수 넣어줌
var btnCheckId = document.querySelector("button#btn-check-id");

// 이벤트 핸들러를 만들어줌
function onbtnCheckId(e) {
    e.preventDefault();     // 새로고침이 되지 않게 한다.
    var UserId = document.querySelector("input#user_id");
    var UserIdlength = UserId.getAttribute("value").length; 
    console.log("input#user_id - value 속성 값의 문자열 개수는" + UserIdlength + "입니다.");
    // "input#user_id - value 속성 값의 문자열 개수는7입니다." 출력된다.
}
// btnCheckId 요소를 클릭하면 이벤트 핸들러로 간다.
btnCheckId.addEventListener("click",onbtnCheckId);



/*
Quest 4.
1. button#btn-cancel 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 현재 브라우저 창이 새로고침 되도록 작성합니다.
*/
// Answer 4.

// button#btn-cancel 요소를 찾아서 변수 넣어줌
var btnCancel = document.querySelector("button#btn-cancel");

// 이벤트 핸들러를 만들어줌
function onClickBtnCancel() {
    location.reload(); // 새로고침이 된다.
}
// btnCancel 요소를 클릭하면 이벤트 핸들러로 간다.
btnCancel.addEventListener("click",onClickBtnCancel);




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

// button#btn-apply 요소를 찾아서 변수 넣어줌
var btnApply = document.querySelector("button#btn-apply");

// 이벤트 핸들러를 만들어줌
function onClickBtnApply(e) {
    e.preventDefault();  // 새로고침이 되지 않게 한다.
    var ApplyConfirm = confirm("가입하시겠습니까?");    // 버튼을 누르면 확인창이 뜨고
    if (ApplyConfirm) { 
        alert("가입을 환영합니다!");     // 확인이 되면 "가입을 환영합니다!" 라고 뜬다.
    } else { 
        alert("가입을 취소하였습니다.")     // 확인이 되지 않으면 "가입을 취소하였습니다." 라고 뜬다.
    };
}
// btnApply 요소를 클릭하면 이벤트 핸들러로 간다.
btnApply.addEventListener("click", onClickBtnApply);


/*
Quest 6.
1. button#btn-reset 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '초기화하시려면 100을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 100을 정확하게 입력할 경우, input#user_id 와 input#user_pass 요소의 value 속성이 빈 값으로 초기화 되도록 작성합니다.
*/
// Answer 6.

// button#btn-reset 요소를 찾아서 변수 넣어줌
var btnReset = document.querySelector("button#btn-reset");

// 이벤트 핸들러를 만들어줌
function onClickReset() {
    var ResetPrompt = prompt("초기화하시려면 100을 입력하세요."); 
    if(ResetPrompt === "100"){         //  다이얼로그창에 100을 입력하면
        var UserId2 = document.querySelector("input#user_id");      // input#user_id 요소를 찾아서 변수 넣어줌
        var UserPass = document.querySelector("input#user_pass");       // input#user_pass 요소를 찾아서 변수 넣어줌
        UserId2.setAttribute("value", "");      // input#user_id 가 초기화 된다.
        UserPass.setAttribute("value", "");     // input#user_pass 가 초기화 된다.
    }
}
// btnReset 요소를 클릭하면 이벤트 핸들러로 간다.
btnReset.addEventListener("click", onClickReset);



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

var btnOdd = document.querySelector("button#btn-odd");
var divOddResult = document.querySelector("div#odd-result");
var Result = "";

function onClickOdd() {
    var OddPrompt = prompt("숫자를 입력해주세요.");
    for (var i = 0; i <= OddPrompt; i++) {
        // if (i % 2 == 1) {
        //     console.log(i+2); // 홀수 중에서 1은 나오지 않음
        // }
        if (i % 2 == 1) {
            Result += i;
            if (i < OddPrompt) {
                Result += ', '
            } else {
                Result += '.';
            }
        }
    }
    divOddResult.innerHTML = Result;
}
btnOdd.addEventListener("click", onClickOdd);





/*
Quest 8.
1. button#btn-add-city 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '도시명을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 도시명을 입력할 경우, ul#city-list 자식인 li 요소에 도시명 문자열이 추가되도록 작성합니다.
*/
// Answer 8.

// button#btn-add-city 요소를 찾아서 변수 넣어줌
var btnAddCity = document.querySelector("button#btn-add-city");

// 이벤트 핸들러를 만들어줌
function onClickAddCity() {
    var AddCityPrompt = prompt("도시명을 입력하세요.");     // 다이얼로그창 출력
    if(AddCityPrompt !== ''){                               // 다이얼로그창에 빈칸이 아니고 무엇인가 써졌다면
        var City = document.querySelector("ul#city-list");      // ul#city-list 요소를 찾아서 변수 넣어줌      
        var CityLI = document.createElement("li");               
        CityLI.innerHTML = AddCityPrompt;
        City.appendChild(CityLI);                           // li 요소에 도시명 문자열 추가
    }
}
// btnAddCity 요소를 클릭하면 이벤트 핸들러로 간다.
btnAddCity.addEventListener("click",onClickAddCity);



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

var btnColor = document.querySelector("button#btn-color");
var ClickCount = 0;
function onClickColor() {
    var SentenceP = document.getElementsByTagName("p");
    for (i = 0; i < SentenceP.length; i++) {
        SentenceP[i].style.color = "red";
        if(i === ClickCount){
            SentenceP[i].style.color = "black";
        }
    }
    ClickCount++;
    if (ClickCount === SentenceP.length) {
        ClickCount = 0;
    }
}
btnColor.addEventListener("click",onClickColor);



/*
Quest 10.
1. button#btn-go-top 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 스크롤이 현재 화면의 최상단으로 이동되도록 작성합니다.
*/
// Answer 10.

// button#btn-go-top 요소를 찾아서 변수 넣어줌
var btnGoTop = document.querySelector("button#btn-go-top");   

// 이벤트 핸들러를 만들어줌
function onClickBtnGoTop() {
    // 화면의 0, 0 위치로 가게 한다. 
    window.scrollTo(0, 0); 
}
// button#btn-go-top 요소를 클릭하면 이벤트 핸들러로 간다.
btnGoTop.addEventListener("click", onClickBtnGoTop);




