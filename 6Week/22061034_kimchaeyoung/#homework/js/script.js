/*
문제 풀이.
*/

/*
Quest 1.
1. 문서의 title을 '학번_이름' 으로 변경합니다.
*/
// Answer 1.

// 문서의 제목 변경
document.title = "22061034_김채영";

/*
Quest 2.
1. id 가 'title' 인 요소에 'Hello World' 문자열이 포함되도록 작성합니다.
*/
// Answer 2.

// id가 title인 요소를 담을 변수 titleEl1 선언과 동시에
// title을 찾는 코드 작성
var titleEl1 = document.getElementById("title");
// id title 객체 내부에 Hello World 문자열을 포함하도록 코드 작성
titleEl1.innerHTML = 'Hello World';


/*
Quest 3.
1. class 가 'title' 인 요소들에 '안녕하세요.' 문자열이 포함되도록 작성합니다.
*/
// Answer 3.

// class가 title인 요소들을 담을 변수 titleEl2 선언과 동시에
// title을 찾는 코드 작성
var titleEl2 = document.getElementsByClassName("title");
// class title 객체 내부에 안녕하세요. 문자열을 포함하도록 코드 작성
titleEl2[0].innerHTML = '안녕하세요.';
titleEl2[1].innerHTML = '안녕하세요.';
titleEl2[2].innerHTML = '안녕하세요.';

/*
Quest 4.
1. getRowCount 이라는 함수를 선언합니다.
2. 'row' 라는 이름을 가진 class 를 찾고 요소의 개수를 반환합니다.
3. rowCount 변수를 선언, getRowCount() 를 호출하고 반환값을 할당받아 아래와 같이 console 에 출력되도록 작성합니다.
----------
문자열)
row class의 개수는 __개 입니다.
----------
*/
// Answer 4.

// 함수 getRowCount 선언
function getRowCount ()
{
    // row class를 찾을 변수 선언
    var rowEls = document.getElementsByClassName("row");
    // row class 요소의 개수 반환
    return rowEls.length;
}

// 변수 rowCount 선언과 동시에
// getRowCount()의 호출하여 반환값을 할당받음
var rowCount = getRowCount();
// 반환받은 값을 출력
console.log("row class의 개수는 " + rowCount + "개 입니다.");

/*
Quest 5.
1. 1 초 마다 'hello' 라는 문자열이 console 에 출력되도록 작성합니다.
2. 전역범위에 count 변수를 생성하여 매 출력시 console 에 몇 번의 출력이 되고있는지 번호가 함께 출력되도록 작성합니다.
3. 10 번의 출력 후 해당 기능이 실행되지 않도록 작성합니다.
*/
// Answer 5.

// // count 전역 변수 생성
// var count = 0;
// // 1초마다 'hello' 라는 문자열이 console에 출력되는 timer 변수 선언
// var timer = setInterval(function(){
//     // count가 10과 같거나 작을 때까지(10번까지만 반복하기 위해) hello와 count를 출력하도록 하며
//     // 매 실행마다 count를 1씩 증가
//     for(count = 1; count <= 10; count++)
//     {
//         console.log('hello');
//         console.log(count);
//     }
// }, 1000);
// 위 방식은 10번 출력하는 행위를 10초동안 반복하기 때문에 의도에서 한참 벗어났습니다.
// 그렇기에 뺄 부분은 빼서 제대로 다시 작성합니다.

// // count 전역 변수 생성
// var count = 1;
// // 1초마다 'hello' 라는 문자열이 console에 출력되는 timer 변수 선언
// var timer = setInterval(function(){
//     while(count <= 10)
//         {
//         // 1초마다 'hello' 문자열이 console에 출력
//         console.log('hello');
//         // 매 출력 시 몇 번의 출력이 되고 있는지를 나타낼 count 변수 출력
//         console.log(count + "번");
//         count++;
//         }
// }, 1000);
// 이렇게 했을 시에 1초가 흐를 때마다 출력되는 게 아닌, 한 번에 출력되어 이것도 아닌 것 같았습니다.

// count 전역 변수 생성
var count = 1;
// 1초마다 'hello' 라는 문자열이 console에 출력되는 timer 변수 선언
var timer = setInterval(function(){
        // 1초마다 'hello' 문자열이 console에 출력
        console.log('hello');
        // 매 출력 시 몇 번의 출력이 되고 있는지를 나타낼 count 변수 출력
        console.log(count + "번");
        count++;
        
        // 이제 10번이 되었을 때 그만두도록 합니다.
        // 만약 count가 10보다 크다면(10에서 멈추기 위해)
        if (count > "10")
        {
            // timer를 중지하도록 합니다.
            clearInterval(timer);
        }
}, 1000);

// 이렇게 하니까 잘 됩니다.
// 괜히 반복문을 삽입했습니다.


/*
Quest 6.
1. id 가 'scroll' 인 요소에 'scroll' 이라는 class 를 추가합니다.
2. 1(순서) 요소의 위치를 x : 400px, y : 0px 로 좌표이동합니다.
*/
// Answer 6.

// id가 scroll인 요소를 찾을 변수 scrollEls 선언
var scrollEl = document.getElementById("scroll");
// scroll이라는 class 추가
scrollEl.classList.add("scroll");
// 1요소의 위치를 x : 400px, y : 0px 로 좌표이동
scrollEl.scrollTo(400, 0);

/*
Quest 7.
1. id 가 'article' 인 요소를 찾습니다.
2. 1(순서) 요소의 자식 중 첫번째 요소(.row)에 'red' 라는 class 를 추가합니다.
3. 1(순서) 요소의 자식 중 세번째 요소(.row)를 삭제합니다.
*/
// Answer 7.

// is가 article인 요소를 찾을 변수 articleEl 선언
var articleEl = document.getElementById("article");
// 1 요소의 자식 중 첫번째 요소에 red라는 class 추가
articleEl.children[0].classList.add('red');
// 1 요소의 자식 중 세번째 요소를 삭제
articleEl.children[2].classList.remove('row');

/*
Quest 8.
1. enterName 이라는 함수를 선언하고 아래와 같이 정의합니다.
2. '이름을 입력해주세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 다이얼로그창의 취소를 클릭한 경우(null), 아래와 같이 console 에 출력되도록 작성합니다.
----------
문자열)
입력이 취소되었습니다.
----------
4. 사용자가 다이얼로그창에 문자를 입력하지 않고 확인을 클릭할 경우(string), 아래와 같은 문구의 경고창을 띄웁니다.
----------
문자열)
이름을 정확히 입력해주세요.
----------
5. 4(순서) 경우에서 경고창을 확인하면 1(순서) 함수를 다시 호출합니다.
6. 사용자가 문자 단어 하나라도 입력하고 확인을 클릭한 경우(string), 입력된 사항을 body(화면)의 마지막 부분에 출력합니다.
7. enterName 함수를 호출합니다.
*/
// Answer 8.

// var result = prompt('이름을 입력해주세요.');
// console.log(result);
// var dialog = " ";
    
// enterName 함수 선언
// function enterName()
// {
//     // '이름을 입력해주세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력할
//     // result 변수 선언
//     // (입렵창이 포함된 다이얼로그창은 prompt 코드)
//     // var result = prompt('이름을 입력해주세요.');

//     // 만약 result가 null일 경우
//     if (result == "null")
//     {
//         // "입력이 취소되었습니다." 출력
//         console.log("입력이 취소되었습니다.");
//     }
//     // 사용자가 다이얼로그창에 문자를 입력하지 않고 확인을 클릭한 경우
//     else if (result == " ")
//     {
//         // "이름을 정확히 입력해주세요." 출력
//         alert("이름을 정확히 입력해주세요.");
//         // 경고창을 확인하면 1함수를 다시 호출
//         // enterName();
//         return result;
//     }
//     // 사용자가 문자 단어 하나라도 입력하고 확인을 클릭한 경우 
//     else
//     {
//         // 입력된 사항을 body(화면)의 마지막 부분에 출력
//         document.write(result);
//     }
//     // 결과값 result를 반환
//     // return dialog;
// }
// var result = prompt('이름을 입력해주세요.');
// // enterName() 함수 호출
// enterName();


// '이름을 입력해주세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력할
// result 변수 선언
// (입렵창이 포함된 다이얼로그창은 prompt 코드)
var name = prompt('이름을 입력해주세요.');

// enterName 함수 선언
function enterName ()
{ // 만약 result가 null일 경우
    if (name === 'null')
    { 
        // "입력이 취소되었습니다." 출력
        console.log('입력이 취소되었습니다.');
    }
    // 사용자가 다이얼로그창에 문자를 입력하지 않고 확인을 클릭한 경우
    else if (name === '')
    { 
        // "이름을 정확히 입력해주세요." 출력
        alert('이름을 정확히 입력해주세요.');
        // 이후 경고창을 확인하면
        // 함수를 다시 호출
        // 경고창 이후의 진행이 안 되어서 다시 입력창을 넣었습니다.
        // 이게 맞는지는 모르겠습니다.
        name = prompt('이름을 입력해주세요.');
        enterName();
    }
     // 사용자가 문자 단어 하나라도 입력하고 확인을 클릭한 경우 
    else if (typeof name === 'string')
    {
        // 입력된 사항을 body(화면)의 마지막 부분에 출력
        document.write(name);
    }
}
// enterName() 함수 호출
enterName();
// 아무리 코드를 바꿔보고 다르게 시도해보아도 안되다가 변수명을
// name으로 변경하자 너무 작동이 잘 되어 당황스럽습니다.
// 다이얼로그 명령 코드 중 name이라는 변수명에 뭔가 기능이 있는건가요?
