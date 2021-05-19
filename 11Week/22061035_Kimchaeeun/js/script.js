// #tab-menu
var tabMenuEl = document.querySelector('#tab-menu');
var btnTabMenuEls = tabMenuEl.querySelectorAll('ul > li > a');
// console.log(tabMenuEl, btnTabMenuEls);

// .tab-content
var tabContentEls = document.querySelectorAll('.tab-content');
// tabContentEls[0].classList.remove('selected');
// tabContentEls[1].classList.add('selected');
// console.log(tabContentEls);

// cursor dot (pointer)
// cursor bg (원)
var cursorDotEl = document.querySelector('#cursor-dot');
var cursorBGEl = document.querySelector('#cursor-bg');

// #list > li > a
var btnListItemEl = document.querySelectorAll('#list > li > a');

// .mode ul > li > a
var btnModeEls = document.querySelectorAll('.mode ul > li > a');
var htmlEl = document.documentElement;

// Theme types
var types = ['light', 'dark', 'yellow', 'green'];
var modeType = 'light';


// tabmode
// currentID
var cuId = 0;
// ex-ID
var exId = cuId; // 현재 값을 이전 값으로 설정

btnTabMenuEls = Array.prototype.slice.call(btnTabMenuEls);
// btnTabMenuEls Node list를 배열로 변환


// 탭 버튼 클릭 시 해당 콘텐츠 노출 기능
function onClickBtnTabMenuEls(idx, e) { // idx = 순서 색인값
    e.preventDefault();
    // console.log('click');
    // console.log(e.target, e.currentTarget);
    // target : 클릭한 요소(자식)만 반환
    // currentTarget : EventListener가 부착되어있는 요소(부모)만 반환

    // 클릭한 요소가 EventListener가 부착되어있는 요소 중 몇번째인지 반환
    // console.log(btnTabMenuEls.indexOf(e.currentTarget));

    if(exId !== idx) { // 이전값(선택되어있는 값)과 현재 클릭된 값이 같지 않은 경우에만 변경
        btnTabMenuEls[exId].classList.remove('selected');
        tabContentEls[exId].classList.remove('selected');

        // 현재값 cuId를 다시 설정
        cuId = idx;
        btnTabMenuEls[cuId].classList.add('selected');
        tabContentEls[cuId].classList.add('selected');

        // 현재값 = 이전값 갱신 (다음 클릭 때 적용 위함)
        exId = cuId;
    }
}


// cursormove
// 요소를 커서를 따라 움직이게 하는 기능
function onMoveWindow(e) {
    // e.pageX / e.clientX : page(스크롤 포함 열린 창 기준) / client(브라우저 기준)
    var posX = e.clientX;
    var posY = e.clientY;

    // animation off 후 animation
    gsap.killTweensOf(cursorDotEl);
    gsap.to(cursorDotEl, {top: posY, left: posX, duration: 0.1, ease: 'power1.out'});

    gsap.killTweensOf(cursorBGEl);
    gsap.to(cursorBGEl, {top: posY, left: posX, duration: 0.15, ease: 'power1.out'});
}

// #list li 들에 마우스 출입 여부에 따라 커서 변화 기능
function onEnterBtnListItemEl() {
    // console.log('enter');

    if (!cursorBGEl.classList.contains('active')) {
        cursorBGEl.classList.add('active');
    }
}

function onLeaveBtnListItemEl() {
    // console.log('exit');

    if (cursorBGEl.classList.contains('active')) {
        cursorBGEl.classList.remove('active');
    }
}


// Theme
// mode 식별 후 테마 부착
function onClickBtnModeEls(e) {
    e.preventDefault();

    var type = e.currentTarget.getAttribute("href").replace("#","");
    // href 앵커포인트에서 # 제거

    if (modeType !== type) {
        modeType = type;
        setThemeMode();
    }
}

// 테마 부착
function setThemeMode() {
    // 적용된 mode들 제거
    for(var i = 0; i < types.length; i++) {
        htmlEl.classList.remove('mode-' + types[i]);
    }

    // 클릭된 모드 추가
    htmlEl.classList.add('mode-' + modeType);
}

function reset() { // 브라우저 로딩 시 테마 새로고침
    setThemeMode();
}


// 요소에 이벤트 추가 기능
function addEvent() {
    // window mouse event 추가
    window.addEventListener('mousemove', onMoveWindow);
    
    // #list li mouse event 추가
    for(var i = 0; i < btnListItemEl.length; i++) {
        btnListItemEl[i].addEventListener('mouseenter', onEnterBtnListItemEl);
        btnListItemEl[i].addEventListener('mouseleave', onLeaveBtnListItemEl);
    }

    // tab-menu event 추가
    for(var i = 0; i < btnTabMenuEls.length; i++) {
        // btnTabMenuEls[i].addEventListener('click', onClickBtnTabMenuEls);

        btnTabMenuEls[i].addEventListener('click', onClickBtnTabMenuEls.bind(null, i));
        // 각 currentTarget마다 해당 순서의 숫자로 색인 추가
    }

    for(var i = 0; i < btnModeEls.length; i++) {
        btnModeEls[i].addEventListener('click', onClickBtnModeEls);
    }
}

// 초기화 함수
function init() {
    reset();
    addEvent();
}

init(); // 초기화 함수 호출