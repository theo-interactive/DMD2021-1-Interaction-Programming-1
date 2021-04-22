
// Mouse Events
var mouseEls = document.getElementsByClassName('mouse');
// mouseEls[0]
// mouseEls[1]
// mouseEls[2]
// for (var i = 0; i < mouseEls.length; i++) {
//     mouseEls[i]
// }
var isDrag = false;
// Mouse Down
// 마우스 버튼을 누를 때
function onMouseDown(e) {
    console.log('down');
    isDrag = true;
}
mouseEls[0].addEventListener('mousedown', onMouseDown)

// Mouse Move
// 마우스를 움직일 때
function onMouseMove(e) {
    if (isDrag) {
        console.log('move');
    }
}
mouseEls[0].addEventListener('mousemove', onMouseMove)

// Mouse Up
// 마우스 버튼을 뗄 때.
function onMouseUp(e) {
    console.log('up');
    isDrag = false;
}
mouseEls[0].addEventListener('mouseup', onMouseUp)

// Mouse Over
function onMouseOver(e) {
    console.log('over');
}
mouseEls[1].addEventListener('mouseover', onMouseOver)

// Mouse Out
function onMouseOut(e) {
    console.log('out');
}
mouseEls[1].addEventListener('mouseout', onMouseOut)

// Mouse Enter
function onMouseEnter(e) {
    console.log('enter');
    console.log(e.target, e.currentTarget);
    // mouseEls[2].classList.add('animated3', 'animated2');
    e.currentTarget.classList.add('animated3', 'animated2');
}
mouseEls[1].addEventListener('mouseenter', onMouseEnter);
mouseEls[2].addEventListener('mouseenter', onMouseEnter);

// Mouse Leave
function onMouseLeave(e) {
    console.log('leave');
    // mouseEls[2].classList.remove('animated3', 'animated2');
    e.currentTarget.classList.remove('animated3', 'animated2');
}
// for (var i = 0; i < mouseEls.length; i++) {
//     mouseEls[i].addEventListener('mouseleave', onMouseLeave);    
// }
mouseEls[1].addEventListener('mouseleave', onMouseLeave);
mouseEls[2].addEventListener('mouseleave', onMouseLeave);

// Input Event.
var nameInputEl = document.querySelector('input[name=name]');
console.log(nameInputEl);

// focus.
function onFocusInput(e) {
    console.log('focus, focusin');
    // nameInputEl.classList.add('red');
    // nameInputEl.style.border = '1px solid red';
    // nameInputEl.style.padding = '40px';
    nameInputEl.classList.add('active');
}
// nameInputEl.addEventListener('focus', onFocusInput);
nameInputEl.addEventListener('focusin', onFocusInput);

// blur.
function onBlurInput(e) {
    console.log('blur, focusout');
    nameInputEl.classList.remove('active');
}
// nameInputEl.addEventListener('blur', onBlurInput);
nameInputEl.addEventListener('focusout', onBlurInput);

// change
// 값이 변경되었을 때.
function onChangeInput(e) {
    console.log('change!');
    //console.log(e);
    console.log(e.target.value);
}
var emailInputEl = document.querySelector('input[name=email]');
emailInputEl.addEventListener('change', onChangeInput);
