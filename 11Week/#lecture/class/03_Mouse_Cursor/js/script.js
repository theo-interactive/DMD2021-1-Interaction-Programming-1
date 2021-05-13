// cursor dot(pointer)
// cursor bg(흰색 원)
// progress(가이드 문구)
var cursorDotEl = document.querySelector('#cursor-dot');
var cursorBGEl = document.querySelector('#cursor-bg');
var progressEl = document.querySelector('#progress');
// list > li > a
var btnListItemEl = document.querySelectorAll('#list > li > a');

function onMoveWindow(e) {
    // console.log(e.pageX, e.pageY, e.clientX, e.clientY);
    var posX = e.clientX;
    var posY = e.clientY;
    // cursorDotEl.style.left = posX + 'px';
    // cursorDotEl.style.top = posY + 'px';
    // cursorBGEl.style.left = posX + 'px';
    // cursorBGEl.style.top = posY + 'px';
    // progressEl.style.left = posX + 'px';
    // progressEl.style.top = posY + 'px';

    // 애니메이션 해제.
    // gsap.killTweensOf(element);
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

function addEvent() {
    // window mouse event.
    window.addEventListener('mousemove', onMoveWindow);
    // mouse event.
    for(var i = 0; i < btnListItemEl.length; i++) {
        btnListItemEl[i].addEventListener('mouseenter', onEnterBtnListItemEl);
        btnListItemEl[i].addEventListener('mouseleave', onLeaveBtnListItemEl);
    }
}
function init() {
    addEvent();
}
init();