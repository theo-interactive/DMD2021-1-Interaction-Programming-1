// 요소.
// 탭메뉴.
// #tab-menu
var tabMenuEl = document.querySelector('#tab-menu');
var btnTabMenuEls = tabMenuEl.querySelectorAll('ul > li > a');
// console.log(tabMenuEl, btnTabMenuEls);
// btnTabMenuEls[0].classList.remove('selected');
// btnTabMenuEls[1].classList.add('selected');

// 탭컨텐츠.
var tabContentEls = document.querySelectorAll('.tab-content');
// console.log(tabContentEls);
// tabContentEls[0].classList.remove('selected');
// tabContentEls[1].classList.add('selected');
// 현재 값.
var cuId = 0;
// 이전 값.
// var exId = null;
var exId = cuId;

// (1) 배열 변환하여 현재 index 값 찾기.
console.log(btnTabMenuEls);
// NodeList(4) -> Array(4)
btnTabMenuEls = Array.prototype.slice.call(btnTabMenuEls); // 배열 변환 적용.


// 이벤트 핸들러.
function onClickBtnTabMenuEls(idx, e) {
    e.preventDefault();
    // console.log('click');
    // console.log(e.target, e.currentTarget);
    // 요소의 몇번째 ?
    // console.log(btnTabMenuEls.indexOf(e.currentTarget));
    // var idx = btnTabMenuEls.indexOf(e.currentTarget);
    // console.log(idx);
    // 클릭된 요소가 비활성화되어 있을 때만.
    // 0번이 활성화 되어있고, 0번째 요소를 클릭. - 적용 필요 x
    // 0번이 활성화 되어있고, 1번째 요소를 클릭. - 적용 필요 o
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


// 요소에 이벤트 추가 기능
function tabAddEvent() {
    for(var i = 0; i < btnTabMenuEls.length; i++) {
        // btnTabMenuEls[i].addEventListener('click', onClickBtnTabMenuEls);
        // (2) bind(value)
        btnTabMenuEls[i].addEventListener('click', onClickBtnTabMenuEls.bind(null, i));
    }
}

// initialize. - init (초기화)
function tabInit() {
    tabAddEvent(); // 이벤트 추가 기능 호출
}
tabInit() // 초기화 함수 호출

// --------------------------------------------------------------------------------
// mode

var btnModeEls = document.querySelectorAll('.mode li a');
// console.log(btnModeEls);
var titleEl = document.querySelector('#title');
var htmlEl = document.documentElement;
// console.log(htmlEl);
var types = ['light', 'dark', 'blue', 'yellow'];
var modeType = 'light'; // light | dark | blue | yellow

function onClickBtnModeEls(e) {
    e.preventDefault();
    // console.log('click');
    var type = e.currentTarget.getAttribute('href').replace('#','');
    // #light | #dark | #red | #green
    // 문자열 # 을 제거.
    // String.replace('찾는 문자열', '변경하는 문자열')
    // console.log(type);
    if (modeType !== type) {
        modeType = type;
        setThemeMode()
    }
}

function setThemeMode() {
    for (var i = 0; i < types.length; i++){
        htmlEl.classList.remove('mode-' + types[i]);
    }
    htmlEl.classList.add('mode-' + modeType);
    titleEl.innerHTML = modeType + 'Theme';
    // 첫글자만 대문자.
}

function addEvent() {
    for(var i = 0; i < btnModeEls.length; i++){
        btnModeEls[i].addEventListener('click', onClickBtnModeEls);
    }
    
}

function reset() {
    setThemeMode()
}

function init() {
    reset();
    addEvent();
}
init();

// cursor----------------------------------------

var cursorDotEl = document.querySelector("#cursor-dot"),
    cursorBGEl = document.querySelector("#cursor-bg"),
    progressEl = document.querySelector("#progress"),
    listEl = document.querySelector(".tab-container"),
    btnListEl = listEl.querySelectorAll("img");
btnListEl = Array.prototype.slice.call(btnListEl);
function onMouseMoveWindow(e) {
    gsap.killTweensOf(cursorDotEl);
    gsap.to(cursorDotEl, {top: e.pageY, left: e.pageX, duration: 0.1});
    gsap.killTweensOf(cursorBGEl);
    gsap.to(cursorBGEl, {top: e.pageY, left: e.pageX, duration: 0.3, ease: "sine.Out"});
    gsap.killTweensOf(progressEl);
    gsap.to(progressEl, {top: e.pageY, left: e.pageX, duration: 0.25, ease: "sine.Out"});
}
function onClickList(e) {
    e.preventDefault();
    var index = btnListEl.indexOf(e.currentTarget);
    console.log(index);
}
function onMouseEnterList() {
    if(!cursorBGEl.classList.contains("active")){
        cursorBGEl.classList.add("active");
    }
    if(!progressEl.classList.contains("active")){
        progressEl.classList.add("active");
    }
}
function onMouseLeaveList() {
    if(cursorBGEl.classList.contains("active")){
        cursorBGEl.classList.remove("active");
    }
    if(progressEl.classList.contains("active")){
        progressEl.classList.remove("active");
    }
}
function cursorAddEvent() {
    window.addEventListener("mousemove", onMouseMoveWindow);
    for(var i = 0; i < btnListEl.length; i++){
        btnListEl[i].addEventListener("click", onClickList);
        btnListEl[i].addEventListener("mouseenter", onMouseEnterList);
        btnListEl[i].addEventListener("mouseleave", onMouseLeaveList);
    }
}
function cursorInit() {
    cursorAddEvent();
}
cursorInit();
