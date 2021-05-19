 
// cursor dot(pointer)
// cursor bg(흰색 원)
// progress (가이드 문구)
// list > li > a (a태그)

var cursorDot = document.querySelector('#cursor-dot');
console.log(cursorDot);

var cursorBGEl = document.querySelector('#cursor-bg');
console.log(cursorBGEl);

var progressEl = document.querySelector('#progress');

var btnListItemEl = document.querySelectorAll('#list > li > a');


function onMoveWindow(e){
    // 마우스 커서에 BG,Cursor가 따라다니도록.
    //console.log(e.clientX,  e.clientY, e.pageX ,e.pageY);
    var posX = e.clientX;
    var posY = e.clientY;
    // cursorDot.style.left = posX + 'px';
    // cursorDot.style.top = posY + 'px';

    // cursorBGEl.style.left = posX + 'px';
    // cursorBGEl.style.top = posY + 'px';

    // progressEl.style.left = posX + 'px';
    // progressEl.style.top = posY + 'px';

    //gsap.killTweensOf();
    // 애니메이션 해제.
    gsap.killTweensOf(cursorDot);
    //gsap.to(element, args{});
    // 현재 값에서 arg 의 속성에 따라 애니메이션 적용.
    // duration - 시간.
    // delay - 지연 시간. 딜레이 시간 내로 움직이면 요소가 따라오지 않음
    // easing - 시간 가속도
    gsap.to(cursorDot, {top: posY, left: posX, duration: 0.15, ease: 'sine.inout'});
    gsap.killTweensOf(cursorBGEl);
    gsap.to(cursorBGEl, {top: posY, left: posX, duration: 0.25, ease: 'sine.inout'});
    gsap.killTweensOf(progressEl);
    gsap.to(progressEl, {top: posY, left: posX, duration: 0.21, ease: 'sine.inout'});
    // to 는 명령어를 계속해서 줌 = 명령어가 중첩될 수 있음

}


function onEnterBtnListItemEl(){
    console.log('enter');
    if(!cursorBGEl.classList.contains('active')){
        cursorBGEl.classList.add('active');
    }
    if(!progressEl.classList.contains('active')){
        progressEl.classList.add('active');
    }

    //contain 속성으로 class가 있는지 없는지 확인!!
}

function onLeaveBtnListItemEl(){
    console.log('leave');    
    if(cursorBGEl.classList.contains('active')){
        cursorBGEl.classList.remove('active');
    }
    if(progressEl.classList.contains('active')){
        progressEl.classList.remove('active');
    }
}

function addEvent(){
    //window mouse Event.
    window.addEventListener('mousemove', onMoveWindow);
    // mouse Event

    for(var i = 0; i<btnListItemEl.length; i++){
        btnListItemEl[i].addEventListener('mousemove', onEnterBtnListItemEl);
        btnListItemEl[i].addEventListener('mouseleave', onLeaveBtnListItemEl);
    }
}

function init(){
    addEvent();
}


init();




