// cursor dot(pointer)
// cursor bg(흰색 원)
// progress (가이드 문구)

var cursorDotEl = document.querySelector('#cursor-dot');
var cursorBGEl = document.querySelector('#cursor-bg');
var progressEl = document.querySelector('#progress');

var btnListItemEl = document.querySelectorAll('#list > li > a');

function onMoveWindow(e){
    var posX = e.clientX;
    var posY = e.clientY;
;
    gsap.killTweensOf(cursorDotEl);

    gsap.to(cursorDotEl, {top: posY, left: posX, duration: 0.1, ease: 'sine.inOut'});
    gsap.killTweensOf(cursorBGEl);
    gsap.to(cursorBGEl, {top: posY, left: posX, duration: 0.2});
    gsap.killTweensOf(progressEl);
    gsap.to(progressEl, {top: posY, left: posX, duration: 0.25});
}

function onEnterBtnListItenEl(){
    console.log('enter');
    if(!cursorBGEl.classList.contains('active')){
        cursorBGEl.classList.add('active');
    }
    if(!progressEl.classList.contains('active')){
        progressEl.classList.add('active');
    }
}

function onLeaveBtnListItenEl(){
    console.log('leave');
    if(cursorBGEl.classList.contains('active')){
        cursorBGEl.classList.remove('active');
    }
    if(progressEl.classList.contains('active')){
        progressEl.classList.remove('active');
    }
}

function addEvent(){
    // window mouse event
    window.addEventListener('mousemove', onMoveWindow);
    // mouse event
    for(var i = 0; i < btnListItemEl.length; i++){
        btnListItemEl[i].addEventListener('mouseenter', onEnterBtnListItenEl);
        btnListItemEl[i].addEventListener('mouseleave', onLeaveBtnListItenEl);
    }
}

function init(){
    addEvent();
}
init();








