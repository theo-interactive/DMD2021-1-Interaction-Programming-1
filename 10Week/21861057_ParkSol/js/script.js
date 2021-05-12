// btn-menu
// side-menu
// side-menu > ul > li
// btn-close
var btnMenuEl = document.querySelector('b#btn-menu');
var sideMenuEl = document.querySelector('#side-menu');
var sideMenuItemEl = sideMenuEl.querySelectorAll('li');
var btnCloseMenuEl = sideMenuEl.querySelector('#btn-close');
// 상태 체크를 위한 변수.
// 메뉴가 활성화? 비활성화?
var isOpenMenu = false;
// 현재 애니메이션 중인지? 종료?
var isAni = false;

// ***함수는 사용할 기능별로 구분하여 정리한다.

// 이벤트 핸들러.
function onClickBtnMenu(e) {
    e.preventDefault();
    console.log('click menu');
    if (isAni) { // 애니메이션 중이라면 클릭 X
        return;
    }
    if(!isOpenMenu){ // 메뉴가 비활성화된 경우.
        sideMenuEl.classList.add('open');
        isAni = true;
        setTimeout(function(){
            for(var i = 0; i < sideMenuItemEl.length; i++){
                menuItemActive(i);
            }
        }, 2000);
        isOpenMenu = true;
    }
}
function onClickBtnClose(e) {
    e.preventDefault();
    if (isAni) {
        return;
    }
    console.log('click close');
    if(isOpenMenu){ // 메뉴가 활성화된 경우.
        sideMenuEl.classList.remove('open');
        isAni = true;
        setTimeout(function(){
            menuItemReset();
            isAni = false;
        }, 280);
        isOpenMenu = false;
    }
}

// side-menu ul li의 모든 요소를 비활성화 되도록 하는 기능
function menuItemReset() {
    for (var i = 0; i < sideMenuItemEl.length; i++) {
        sideMenuItemEl[i].classList.remove('ani');
    }
}

// side-menu ul li 가 개별적으로 활성화 되도록 하는 기능
function menuItemActive(id) {
    setTimeout(function(){
        sideMenuItemEl[id].classList.add('ani');
        if (id === sideMenuItemEl.length -1){
            isAni = false
        }
        // isAni = !(id === sideMenuItemEl.length - 1)
    }, 50 * id);
    // 50 * 0 = 0
    // 50 * 1 = 50
    // 50 * 2 = 100
    // 50 * 3 = 150
    // 50 * 4 = 200
    // 50 * 5 = 250
    
}

// 이벤트 추가 함수.
function addEvent() {
    btnMenuEl.addEventListener('click', onClickBtnMenu);
    btnCloseMenuEl.addEventListener('click', onClickBtnClose);
}
// 초기화 함수.
function init() {
    addEvent();
}
init();

// console.log(btnMenuEl, sideMenuEl, sideMenuItemEl, btnCloseMenuEl);