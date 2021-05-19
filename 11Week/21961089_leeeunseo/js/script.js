// find #tab-menu
var tabMenuEl = document.querySelector('#tab-menu');
// find #tab-menu > ul > li > a
var btnTabMenuEls = tabMenuEl.querySelectorAll('ul > li > a');
// console.log(tabMenuEl, btnTabMenuEls);

// find .tab-content
var tabContentEls = document.querySelectorAll('.tab-content');
// console.log(tabContentEls);

var cuId = 0;
var exId = cuId;

// convert to array.
btnTabMenuEls = Array.prototype.slice.call(btnTabMenuEls);

// event handler.
function onClickBtnTabMenuEls(idx, e) {
    // disable hyperlinks.
    e.preventDefault();
    // console.log('click');

    // 클릭된 요소가 비활성화되어 있을 때만 반복문 실행.
    // 0번이 활성화되어 있고, 0번째 요소를 클릭일 경우에는 적용하지 않음.
    // 0번이 활성화되어 있고, 1번째 요소를 클릭일 경우에는 적용.
    if (exId !== idx) {
        btnTabMenuEls[exId].classList.remove('selected');
        tabContentEls[exId].classList.remove('selected');
        cuId = idx; // cuId 값 재설정.
        btnTabMenuEls[cuId].classList.add('selected');
        tabContentEls[cuId].classList.add('selected');
        exId = cuId; // exId 값 초기화.
    }
}



// find #cursor-dot
var cursorDotEl = document.querySelector('#cursor-dot');
// find #cursor-bg
var cursorBGEl = document.querySelector('#cursor-bg');
// find #progress
var progressEl = document.querySelector('#progress');

// move cursor.
function onMoveWindow(e) {
    // console.log(e.pageX, e.pageY, e.clientX, e.clientY);
    var posX = e.clientX;
    var posY = e.clientY;

    // 마우스 좌표는 계속 변하므로 매번 애니메이션 해제.
    gsap.killTweensOf(cursorDotEl);
    gsap.to(cursorDotEl, {top: posY, left: posX, duration: 0.2});
    gsap.killTweensOf(cursorBGEl);
    gsap.to(cursorBGEl, {top: posY, left: posX, duration: 0.2});
    gsap.killTweensOf(progressEl);
    gsap.to(progressEl, {top: posY, left: posX, duration: 0.25});
}
// enter tab menu.
function onEnterBtnTabMenuItemEl(e) {
    // console.log('enter');
    if (!cursorBGEl.classList.contains('active')) {
        cursorBGEl.classList.add('active');
    }
    if (!progressEl.classList.contains('active')) {
        progressEl.classList.add('active');
    }
}
// leave tab menu.
function onLeaveBtnTabMenuItemEl(e) {
    // console.log('leave');
    if (cursorBGEl.classList.contains('active')) {
        cursorBGEl.classList.remove('active');
    }
    if (progressEl.classList.contains('active')) {
        progressEl.classList.remove('active');
    }
}
// add event.
function addEvent() {
    for (var i = 0; i < btnTabMenuEls.length; i++) {
        // bind.
        btnTabMenuEls[i].addEventListener('click', onClickBtnTabMenuEls.bind(null, i));

        // mouse enter, leave.
        btnTabMenuEls[i].addEventListener('mouseenter', onEnterBtnTabMenuItemEl);
        btnTabMenuEls[i].addEventListener('mouseleave', onLeaveBtnTabMenuItemEl);
    }
    // window mouse event.
    window.addEventListener('mousemove', onMoveWindow);
}
// initialize.
function init() {
    addEvent();
}
init()
