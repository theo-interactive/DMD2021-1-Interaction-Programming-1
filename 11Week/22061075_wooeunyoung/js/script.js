
// 요소.
// 탭메뉴.
// #tab-menu
var tabMenuEl = document.querySelector('#tab-menu');
var btnTabMenuEls = tabMenuEl.querySelectorAll('ul > li > a');
// 탭컨텐츠.
var tabContentEls = document.querySelectorAll('.tab-content');
// 현재 값.
var cuId = 0;
// 이전 값.
var exId = cuId;

// (1) 배열 변환하여 현재 index 값 찾기.
btnTabMenuEls = Array.prototype.slice.call(btnTabMenuEls); // 배열 변환 적용.

// 이벤트 핸들러.
function onClickBtnTabMenuEls(idx, e) {
    e.preventDefault();
    if (exId !== idx) { // 이전값과 현재 클릭된 값이 같지 않은 경우에만 변경.
        btnTabMenuEls[exId].classList.remove('selected');
        tabContentEls[exId].classList.remove('selected');
        // cuId 를 다시 설정.
        cuId = idx;
        btnTabMenuEls[cuId].classList.add('selected');
        tabContentEls[cuId].classList.add('selected');
        // 다음 이벤트에서 확인할 수 있도록 exId 의 값을 갱신.
        exId = cuId;
    }
}


var btnModeEls = document.querySelectorAll('.mode ul > li > a');
// console.log(btnModeEls);
var titleEl = document.querySelector('#title');
var htmlEl = document.documentElement;
// console.log(htmlEl);
var types = ['light', 'dark', 'red', 'green'];
var modeType = 'light'; // light | dark | red | green

function onClickBtnModeEls(e) {
    e.preventDefault();
    // console.log('click');
    var type = e.currentTarget.getAttribute('href').replace('#', '');
    if (modeType !== type) {
        modeType = type;
        setThemeMode()
    }
}

// // 첫글자 대문자 기능
function toCapitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

// // 문자열에 프로토타입 기능 함수 적용.
String.prototype.toCapitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}

function setThemeMode() {
    for(var i = 0; i < types.length; i++) {
        htmlEl.classList.remove('mode-' + types[i]);
    }
    htmlEl.classList.add('mode-' + modeType);
}


// cursor dot(pointer)
// cursor bg(흰색 원)
// progress(가이드 문구)
var cursorDotEl = document.querySelector('#cursor-dot');
var cursorBGEl = document.querySelector('#cursor-bg');
var progressEl = document.querySelector('#progress');
var btnListItemEl = document.querySelectorAll('a');

function onMoveWindow(e) {
    var posX = e.clientX;
    var posY = e.clientY;

    // 애니메이션 해제.
    gsap.killTweensOf(cursorDotEl);
    // 현재 값에서 arg 의 속성에 따라 애니메이션 적용.
    // duration - 시간.
    // ease - 가속도.
    // delay - 지연 시간.
    // gsap.to(element, args{});
    gsap.to(cursorDotEl, {top: posY, left: posX, duration: 0.1, ease: 'sine.inOut'});
    gsap.killTweensOf(cursorBGEl);
    gsap.to(cursorBGEl, {top: posY, left: posX, duration: 0.2});
    gsap.killTweensOf(progressEl);
    gsap.to(progressEl, {top: posY, left: posX, duration: 0.25});
}

function onEnterBtnListItemEl() {
    console.log('enter');
    if (!cursorBGEl.classList.contains('active')) {
        cursorBGEl.classList.add('active');
    }
    if (!progressEl.classList.contains('active')) {
        progressEl.classList.add('active');
    }
}
function onLeaveBtnListItemEl() {
    console.log('leave');
    if (cursorBGEl.classList.contains('active')) {
        cursorBGEl.classList.remove('active');
    }
    if (progressEl.classList.contains('active')) {
        progressEl.classList.remove('active');
    }
}





// 요소에 이벤트 추가

function addEvent() {
    for(var i = 0; i < btnModeEls.length; i++) {
        btnModeEls[i].addEventListener('click', onClickBtnModeEls);
    }
    for(var i = 0; i < btnTabMenuEls.length; i++) {
        btnTabMenuEls[i].addEventListener('click', onClickBtnTabMenuEls.bind(null, i));
    }
    // window mouse event.
    window.addEventListener('mousemove', onMoveWindow);
    // mouse event.
    for(var i = 0; i < btnListItemEl.length; i++) {
        btnListItemEl[i].addEventListener('mouseenter', onEnterBtnListItemEl);
        btnListItemEl[i].addEventListener('mouseleave', onLeaveBtnListItemEl);
    }
}


// initialize. - init (초기화)

function reset() {
    setThemeMode();
}

function init() {
    reset();
    addEvent();
}
init();