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

var btn_StudNum = document.querySelector('#btn-student-number'); // -> button#btn-student-number 요소를 찾아줄 변수를 선언합니다.
var btn_StudName = document.querySelector('#btn-student-name'); // -> button#btn-student-name 요소를 찾아줄 변수를 선언합니다.


function OnClickBtnStudNumber() { // ... 이벤트 핸들러를 할당합니다.

    document.querySelector('#student-number').innerHTML = "21755074"; // -> 함수 호출시에 innerHTML 속성을 사용하여 제 학번이 #student-number 의 안에 입력됩니다.
    alert("학번이 입력되었습니다."); // alert 속성 사용하여 메세지 학번이 입력되었습니다. 를 출력합니다.
}

btn_StudNum.addEventListener('click', OnClickBtnStudNumber); // 이벤트 리스너 속성을 사용하여 클릭 시에 실행될 수 있게 구현하도록 합니다.


function OnClickBtnStudName() { // ... 이벤트 핸들러를 할당합니다.

    document.querySelector('#student-name').innerHTML = "전형욱"; // -> 함수 호출시에 innerHTML 속성을 사용하여 제 학번이 #student-name 의 안에 입력됩니다.
    alert("이름이 입력되었습니다."); // alert 속성 사용하여 메세지 이름이 입력되었습니다. 를 출력합니다.
}

btn_StudName.addEventListener('click', OnClickBtnStudName); // 이벤트 리스너 속성을 사용하여 클릭 시에 실행될 수 있게 구현하도록 합니다.



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


var btn_WinSize = document.querySelector('button#btn-window-size'); // -> button#btn-window-size 요소를 찾아줄 변수를 선언합니다.

var winWidth = window.innerWidth;
var winHeight = window.innerHeight; // -> 윈도우 콘텐츠의 영역 width : ____ px, height : ____ px 입니다. 에서 각 영역별 속성을 변수로 담아줍니다.


function OnClickBtnWinSize(){ // -> ... 이벤트 핸들러를 할당합니다.

    console.log(`윈도우 콘텐츠의 영역 width : ${width}px, height : ${height}px 입니다.`); // -> 윈도우의 각 영역 속성의 값을 파라미더 %{}를 이용하여 넣어주도록 합니다.

}

btn_WinSize.addEventListener('click', OnClickBtnWinSize); // 이벤트 리스너 속성을 사용하여 클릭 시에 실행될 수 있게 구현하도록 합니다.




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

var btn_CheckId = document.querySelector('button#btn-check-id') // button#btn-check-id 요소를 찾아줄 변수를 선언합니다.

function OnClickBtnCheckID(e){ // ... 이벤트 핸들러를 할당합니다.

    e.preventDefault(); // 이벤트 디폴트 액션을 방지하는 속성을 사용합니다.

    var userId = document.querySelector('#user_id');  // id가 userId인 element를 찾아서 userID 변수에 넣어줍니다.
    
    var userIdLength = userId.getAttribute('value').length; //  value 속성의 값의 문자열 개수는 .length 함수를 이용하여 구하도록 합니다.
''
    console.log(`input#user_id - value 속성 값의 문자열 개수는 ${userIdLength}입니다.`) // "input#user_id - value 속성 값의 문자열 개수는 ____ 입니다." 문자열을 출력해줍니다.
}

btn_CheckId.addEventListener('click', OnClickBtnCheckID); // 이벤트 리스너 속성을 사용하여 클릭 시에 실행될 수 있게 구현하도록 합니다.


/*
Quest 4.
1. button#btn-cancel 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 현재 브라우저 창이 새로고침 되도록 작성합니다.
*/
// Answer 4.

var btn_Cancle = document.querySelector('button#btn-cancel'); // -> button#btn-cancel 요소를 찾아줄 변수를 선언합니다.

function OnClickBtnReloadPage(e){ // ... 이벤트 핸들러를 할당합니다.

    e.preventDefault(); // 이벤트 디폴트 액션을 방지하는 속성을 사용합니다.

    window.location.reload(); // -> 페이지 자체를 새로 고침하는 속성을 적용합니다.
}

btn_Cancle.addEventListener('click', OnClickBtnReloadPage); // 이벤트 리스너 속성을 사용하여 클릭 시에 실행될 수 있게 구현하도록 합니다.


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


var btn_Apply = document.querySelector('button#btn-apply'); // button#btn-apply 요소를 찾기 위한 변수를 먼저 선언해둡니다.

function OnClickBtnApply(e){ // ... 이벤트 핸들러를 할당합니다.

    e.preventDefault(); // 이벤트 디폴트 액션을 방지하는 속성을 사용합니다.

    var promptApply = confirm('가입하시겠습니까?'); // 메세지를 담은 확인창이 출력되도록 하는 변수를 가집니다. 이제 이 변수를 가지고 boolean 속성을 이용하여 사용자가 확인 및 취소를 선택하는 것에 대한 코딩 두 가지를 만들도록 하겠습니다.

    if(promptApply == true) { // 위의 행에서 언급한것처럼 boolean 값의 비교를 이용하려고 하기 때문에, 임의의 boolean값 true 값을 가져옵니다.

        console.log("가입을 환영합니다!"); // 사용자가 확인을 선택한 경우에 환영 메세지가 출력되도록 합니다.
    }
    else if(promptApply == false) { // 앞서 true값으로 boolean 비교를 실행했던것처럼 false와 동일한 경우에도 조건으로 설정을 두도록 합니다.

        console.log("가입을 취소했습니다."); // 사용자가 취소를 선택한 경우에 가입 취소 메세지가 출력되도록 합니다.
    }
    
}

btn_Apply.addEventListener('click', OnClickBtnApply); // 이벤트 리스너 속성을 사용하여 클릭 시에 실행되도록 구현하도록 합니다.




/*
Quest 6.
1. button#btn-reset 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '초기화하시려면 100을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 100을 정확하게 입력할 경우, input#user_id 와 input#user_pass 요소의 value 속성이 빈 값으로 초기화 되도록 작성합니다.
*/
// Answer 6.


var btn_Reset = document.querySelector('button#btn-reset'); // button#btn-reset 요소를 찾기 위한 변수를 먼저 선언해둡니다.

function OnClickBtnReset() { // ... 이벤트 핸들러를 할당합니다.

    var inputBox = prompt("초기화하시려면 100을 입력하세요."); // -> 1(순서) 이벤트 호출 시 '초기화하시려면 100을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.

    if (inputBox === "100") // 사용자가 텍스트 100을 정확히 일치하게 끔 입력할 경우에만 조건문을 호출하도록 하겠습니다.
    {
        // input#user_id 와 input#user_pass 요소의 value 속성이 빈 값으로 초기화 되도록 작성합니다. -> -> input#user_id, input#user_pass 요소를 찾기 위한 변수들을 선언해줍니다.
        var user_id = document.querySelector("input#user_id");
        var user_pass = document.querySelector("input#user_pass");

        // 먼저, 요소의 속성값을 정하는 메스드를 사용하도록 하겠습니다. 이번에는 value 속성이 아예 텍스트가 첨가되지 않는 빈 값으로 초기화 된 것으로 변환해주도록 합니다.
        user_id.setAttribute("value", "");
        user_pass.setAttribute("value", "");
    }

}

btn_Reset.addEventListener('click', OnClickBtnReset); // 이벤트 리스너 속성을 사용하여 클릭 시에 실행될 수 있게 구현하도록 합니다.



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

var btn_Odd = document.querySelector('button#btn-odd'); // button#btn-odd 요소들을 찾기 위한 변수를 선언해줍니다.
var div_OddResult = document.getElementById('div#odd-result'); // div#odd-result 요소들을 찾기 위한 변수를 선언해줍니다.
var oddNum = ""; // 다이얼로그창에 숫자를 입력할때 순서대로 담아질 홀수들을 담을 blank 형태의 문자열 변수를 선언해줍니다.

function onClickbtnOdd(e) { // ... 이벤트 핸들러를 할당합니다. 

    e.preventDefault(); // 이벤트 디폴트 액션을 방지하는 속성을 사용합니다.

    var DIYNum = prompt('숫자를 입력해주세요'); // -> 1(순서) 이벤트 호출 시 '숫자를 입력해주세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.

    for (i = 0; i <= DIYNum; i++) { // 일단은 순서를 살펴보면, 예시 상의 인풋되는 숫자드의 규칙을 토대로 보면 입력 숫자와 같거나 보다 작은, 정수 1부터의 정수형 홀수들이 따라오게 되는 것을 확인할 수 있고 이를 토대로 조건문을 구성해보겠습니다.

        if (i % 2 !== 0) { // 홀수의 조건을 그대로 중첩 if문의 조건으로 채용을 한 다음,

            oddNum += i; // 홀수를 담아주는 변수에 따라오게 된 모든 홀수들을 넣어줍니다.

            if (i < DIYNum - 1) { // 또 한번 if문을 중첩으로 써보도록 하겠습니다. 이번에는 예시상에서 확인하면 반점, 온점들이 따라오게 되는 것을 확인할 수 있기 때문입니다. 입력숫자보다 작은 홀수들을 불러오는 조건을 작성하여,

                oddNum += ', '; // 조건에 해당하는 모든 홀수들의 뒤에 반점이 따라붙게 되어지고,

            } else { // 타 잉여 조건의 경우에는 가장 마지막 순서에 배치되는 최대값의 홀수에 대한 경우로 이어지겠지요?

                oddNum += '.'; // 그런 경우에는 온점을 붙여주도록 함으로써, 예시상의 문자열 연산 배열 형태의 구성을 완료했습니다.
            }
        }
    }
    divId.innerHTML = oddNum; // innerHTML 속성을 이용하여 구성된 결과값이 할당될 수 있도록 합니다.

}
btn_Odd.addEventListener('click', onClickbtnOdd); // 이벤트 리스너 속성을 사용하여 클릭 시에 실행될 수 있게 구현하도록 합니다.



/*
Quest 8.
1. button#btn-add-city 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 '도시명을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 도시명을 입력할 경우, ul#city-list 자식인 li 요소에 도시명 문자열이 추가되도록 작성합니다.
*/
// Answer 8.


var btn_AddCity = document.querySelector('button#btn-add-city'); // button#btn-add-city 요소를 찾아줄 변수를 선언합니다.

function OnClickBtn_AddCity() { // ... 이벤트 핸들러를 할당합니다.

    var city = prompt('도시명을 입력하세요.'); // -> 1(순서) 이벤트 호출 시 '도시명을 입력하세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.

    if(city !== '') { // 해당 다이얼로그창에 문자열이 존재한다는 가정하에 if문을 호출,

        var knownCity = document.querySelector('ul#city-list'); // ul#city-list 요소를 찾아줄 변수를 선언,

        var newCity = document.createElement('li'); // li 요소를 새로 만들어줄 속성의 변수 또한 선언해주도록 합니다.

        newCity.innerHTML = city; // li에 사용자가 입력한 도시명 문자열을 차곡차곡 입력해줍니다.

        knownCity.appendChild(newCity); // 입력된 문자열을 변수 knownCity의 문자열로 입력될 수 있게 해줍니다.
    }
}

btn_AddCity.addEventListener('click', OnClickBtn_AddCity); // 이벤트 리스너 속성을 사용하여 클릭 시에 실행될 수 있게 구현하도록 합니다.


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

var btn_Color = document.querySelector('button#btn-color'); // button#btn-color 요소를 찾아줄 변수를 선언합니다.

var p_Sentence = document.querySelectorAll('p.sentence'); // sentence 클래스의 p 요소를 찾아줄 변수를 선언합니다.

var allClickCount = 0; // 클릭한 횟수를 담아내기 위한 변수도 선언합니다.

function OnClickBtn_Colors(e) { // ... 이벤트 핸들러를 할당합니다.
    
    e.preventDefault(); // 이벤트 디폴트 액션을 방지하는 속성을 사용합니다.


    for(i = 0; i < sentences.length; i++){
        p_Sentence[i].style.color = 'red'; // 반복문 for을 사용해서, 모든 p 요소의 글자 색상을 모두 빨간색으로 바꾸어주도록 하며,
        if (i == p_Sentence) { // 카운트 글자일때의 경우도 고려해보아 if문 중첩을 진행하겠습니다.
            p_Sentence[i].style.color = 'black'; // 카운트 되는 시작 시점에는 검정색상이 들어가게 됩니다.
        }
    
    allClickCount++ // 정수 1씩 카운트를 진행해보면서...
    
    // 카운트를 초기화하면서 루프를 진행하는 작업도 진행해볼려고 합니다.
    if (allClickCount === p_Sentence.length) { // 카운트가 sentence 크기만큼 카운팅 되었을 시점의 경우에 if문을 한번더 호출해서,
        allClickCount = 0; // 카운트 작업이 다시 초기화시켜 버립니다.
    }

}

btn_Color.addEventListener('click', OnClickBtn_Color); // 이벤트 리스너 속성을 사용하여 클릭 시에 실행될 수 있게 구현하도록 합니다.


/*
Quest 10.
1. button#btn-go-top 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당합니다.
2. 1(순서) 이벤트 호출 시 스크롤이 현재 화면의 최상단으로 이동되도록 작성합니다.
*/
// Answer 10.

var btn_GoTop = document.querySelector('button#btn-go-top'); // -> button#btn-go-top 요소를 찾기 위한 변수를 먼저 선언해둡니다.

function OnClickBtnGoTop() {  // ... 이벤트 핸들러를 할당합니다.

    window.scrollTo(0, 0); // 화면에서 제일 좌측이며 동시에 제일 상단에 속하는 위치로 이동됩니다.
}

btn_GoTop.addEventListener('click', OnClickBtnGoTop); // 이벤트 리스너 속성을 사용하여 클릭 시에 실행될 수 있게 구현하도록 합니다
}