var btnModeEls = document.querySelectorAll('.mode ul > li > a');
console.log(btnModeEls);
var htmlEl = document.documentElement;
// console.log(htmlEl);
var types = ['light', 'dark', 'red', 'green']
var modeType = 'light'; // light | dark | red | green

function onClickBtnModeEls(e) {
    e.preventDefault();
    // console.log('click');
    var type = e.currentTarget.getAttribute('href').replace('#', '');
    // #light | #dark | #red | #green
    // 문자열 # 을 제거.
    // String.replace('찾는 문자열', '변경하는 문자열')
    console.log(type);
    if (modeType !== type) {
        modeType = type;
        setThemeMode();
    }
}


function setThemeMode() {
    for (var i = 0; i < types.length; i++) {
        htmlEl.classList.remove('mode-' + types[i]);
    }
    htmlEl.classList.add('mode-' + modeType);
    // 첫 글자만 대문자.

    // if(isMode){
    //     htmlEl.classList.add('mode-dark');
    //     titleEl.innerHTML = 'Dark Mode';
    // }else{
    //     htmlEl.classList.remove('mode-dark');
    //     titleEl.innerHTML = 'light Mode';
    // }
}


// 요소.
// 탭메뉴.
// #tab-menu
var tabMenuEl = document.querySelector('#tab-menu'),
    btnTabMenuEl = tabMenuEl.querySelectorAll('a'),
    tabContainerEl = document.querySelector('.tab-container'),
    tabContentEl = tabContainerEl.querySelectorAll('.tab-content'),
    cuId = 0,
    exId = null;

btnTabMenuEl = Array.prototype.slice.call(btnTabMenuEl);
function onClickTabMenu(e) {
    e.preventDefault();
    var el = e.currentTarget, index = btnTabMenuEl.indexOf(el);
    if(!el.classList.contains('selected')) {
        cuId = index;
        btnTabMenuEl[exId].classList.remove('selected');
        tabContentEl[exId].classList.remove('selected');
        el.classList.add('selected');
        tabContentEl[cuId].classList.add('selected');
        exId = cuId;
    }
}

// cursor dot(pointer)
// cursor bg(흰색 원)
// progress (가이드 문구)
// list > li > a

var cursorDotEl = document.querySelector('#cursor-dot');
var cursorBGEl = document.querySelector('#cursor-bg');
var progressEl = document.querySelector("#progress");

var btnListItemEl = document.querySelectorAll('#list li > a');

function onMoveWindow(e) {
    // console.log(e.clientX, e.clientY, e.pageX, e.pageY);
    // var posX = e.clientX;
    // var posY = e.clientY;
    // cursorDotEl.style.left = posX + 'px';
    // cursorDotEl.style.top = posY + 'px';
    // cursorBGEl.style.left = posX + 'px';
    // cursorBGEl.style.top = posY + 'px';
    // progressEl.style.left = posX + 'px';
    // progressEl.style.top = posY + 'px';

    // 애니메이션 해제.
    // gsap.killTweensof(element);
    gsap.killTweensOf(cursorDotEl);
    // 현재 값에서 arg의 속성에 따라 애니메이션을 적용.
    // duration -시간.
    // easing = 가속도
    // gasp.to(element.args{});
    gsap.killTweensOf(cursorDotEl);
    gsap.to(cursorDotEl, {top: e.pageY, left: e.pageX, duration: 0.1});
    gsap.killTweensOf(cursorBGEl);
    gsap.to(cursorBGEl, {top: e.pageY, left: e.pageX, duration: 0.1, ease: "sine.Out"});
    gsap.killTweensOf(progressEl);
    gsap.to(progressEl, {top: e.pageY, left: e.pageX, duration: 0.1, ease: "sine.Out"});
 
}
function onEnterBtenListItemEl(){
    if(!cursorBGEl.classList.contains("active")){
        cursorBGEl.classList.add("active");
    }
    if(!progressEl.classList.contains("active")){
        progressEl.classList.add("active");
    }
}
function onLeaveBtenListItemEl(){
    if(cursorBGEl.classList.contains("active"))
    {
        cursorBGEl.classList.remove("active");
    }
    if(progressEl.classList.contains("active")){
        progressEl.classList.remove("active");
    }
}
function addEvent() {
    for (var i = 0; i < btnModeEls.length; i++) {
        btnModeEls[i].addEventListener('click', onClickBtnModeEls);
    }
    for(var i = 0; i < btnTabMenuEl.length; i++) {
        btnTabMenuEl[i].addEventListener("click", onClickTabMenu);
    }
    window.addEventListener('mousemove', onMoveWindow);
    // Mouse event.
    for (var i = 0; i < btnListItemEl.length; i++) {
        btnListItemEl[i].addEventListener("mouseenter", onEnterBtenListItemEl);
        btnListItemEl[i].addEventListener("mouseleave", onLeaveBtenListItemEl);
    }
}

function reset() {
    setThemeMode();
}

function init() {
    reset();
    exId = cuId;
    addEvent();
}
init();
