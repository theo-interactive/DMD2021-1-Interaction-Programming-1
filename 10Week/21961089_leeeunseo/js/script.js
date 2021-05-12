// 햄버거 메뉴.
// #btn-menu
var btnMenuEl = document.querySelector('b#btn-menu');
// .side-menu
var sideMenuEl = document.querySelector('#side-menu');
// .side-menu > ul > li
var sideMenuItemEl = sideMenuEl.querySelectorAll('li');
// #btn-close
var btnCloseEl = sideMenuEl.querySelector('#btn-close');
// 메뉴가 활성화 상태인지 판단하는 변수.
var isOpenMenu = false;
// 현재 애니메이션 중인지 판단하는 변수.
var isAni = false;

// 이벤트 핸들러.
function onClickBtnMenu(e) {
    e.preventDefault();
    console.log('click menu');
    if (isAni) { // 애니메이션 중일 경우.
        return; // 클릭되지 않도록 함.
    }
    if (!isOpenMenu) { // 메뉴가 비활성화된 경우.
        sideMenuEl.classList.add('open');
        isAni = true;
        setTimeout(function() {
            for (var i = 0; i < sideMenuItemEl.length; i++) {
                menuItemActive(i);
            }
        }, 380);
        isOpenMenu = true;
    }
}
function onClickBtnClose(e) {
    e.preventDefault();
    console.log('click close');
    if (isAni) { // 애니메이션 중일 경우.
        return; // 클릭되지 않도록 함.
    }
    if (isOpenMenu) { // 메뉴가 활성화된 경우.
        sideMenuEl.classList.remove('open');
        isAni = true;
        setTimeout(function() {
            menuItemReset();
            isAni = false;
        }, 280);
        isOpenMenu = false;
    }
}
// .side-menu > ul > li 의 모든 요소를 비활성화.
function menuItemReset() {
    for (var i = 0; i < sideMenuItemEl.length; i++) {
        sideMenuItemEl[i].classList.remove('ani');
    }
}
// .side-menu > ul > li 를 개별적으로 활성화.
function menuItemActive(id) {
    setTimeout(function() {
        sideMenuItemEl[id].classList.add('ani');
        if (id === sideMenuItemEl.length - 1) {
            isAni = false;
        }
    }, 50 * id);
}
// 이벤트 추가 함수.
function addEvent() {
    btnMenuEl.addEventListener('click', onClickBtnMenu);
    btnCloseEl.addEventListener('click', onClickBtnClose);
}
// 초기화 함수.
function init() {
    addEvent();
}
init();


// 메뉴 클릭 시 해당 섹션으로 이동.
// Main
sideMenuItemEl[0].addEventListener('click', () => {
    scrollTo(0, window.innerHeight * 0);
});
// About
sideMenuItemEl[1].addEventListener('click', () => {
    scrollTo(0, window.innerHeight * 1);
});
// Tableware
sideMenuItemEl[2].addEventListener('click', () => {
    scrollTo(0, window.innerHeight * 2);
});
// Contact
sideMenuItemEl[3].addEventListener('click', () => {
    scrollTo(0, window.innerHeight * 3);
});


// 탑버튼.
var btnTopEl = document.querySelector('#top-btn');
// console.log(window.scrollY);
// 스크롤 시 탑버튼 노출.
function showBtnTop() {
    if (window.scrollY > 30) {
        btnTopEl.style.display = 'block';
    } else {
        btnTopEl.style.display = 'none';
    }
}
window.onscroll = function() { showBtnTop() };
// 탑버튼 클릭 시 상단으로 이동.
function onClickBtnTop(e) {
    e.preventDefault();
    scrollTo(0, 0);
}
btnTopEl.addEventListener('click', onClickBtnTop);