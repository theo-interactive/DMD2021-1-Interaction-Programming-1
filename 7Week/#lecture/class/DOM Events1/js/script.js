var divEl = document.querySelector('#div');
var divClassList = divEl.classList;
var btn1El = document.querySelector('#btn1');
var btn2El = document.querySelector('#btn2');
// Event Handler.
function onClickBtn1(e) {
    // console.log(event);
    // console.log(e);
    e.preventDefault(); // 기본 이벤트를 막겠다.
    // 이벤트의 내용이 반환된 변수를 전달 받을 수 있다.
    console.log('click!');
    divClassList.toggle('style1');
}
function onClickBtn2(e) {
    e.preventDefault();
}
function onDClickBtn2(e) {
    e.preventDefault();
    console.log('dblclick');
    if (!divClassList.contains('style2')) {
        divClassList.add('style2');
    } else {
        divClassList.remove('style2');
    }
}
// Event Listener.
btn1El.addEventListener('click', onClickBtn1);
btn2El.addEventListener('click', onClickBtn2);
btn2El.addEventListener('dblclick', onDClickBtn2);

// Form - 양식 입력
// Form 양식 안의 버튼이 클리되면 submit(전송) 이벤트가 발생된다.
// 기본 이벤트가 항상 존재한다.

// a - 링크
// a 태그에 href 값이 있다면 링크 이동이 된다.
// 기본 이벤트. 