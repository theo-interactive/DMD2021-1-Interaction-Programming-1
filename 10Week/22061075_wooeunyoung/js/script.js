
var btnMenuEl = document.querySelector('b#btn-menu');
var sideMenuEl = document.querySelector('#side-menu');
var sideMenuItemEl = sideMenuEl.querySelectorAll('li');
var btnCloseEl = sideMenuEl.querySelector('#btn-close');

var isOpenMenu = false;

var isAni = false;

// 이벤트 핸들러.
function onClickBtnMenu(e) {
    e.preventDefault();
    console.log('click menu');
    if (isAni) { 
        return;
    }
    if (!isOpenMenu) { 
        sideMenuEl.classList.add('open');
        isAni = true;
        setTimeout(function() {
            for(var i = 0; i < sideMenuItemEl.length; i++) {
                menuItemActive(i);
            }
        }, 380);
        isOpenMenu = true;
    }
}
function onClickBtnClose(e) {
    e.preventDefault();
    console.log('click close');
    if (isAni) { 
        return;
    }
    if (isOpenMenu) { 
        sideMenuEl.classList.remove('open');
        isAni = true;
        setTimeout(function() {
            menuItemReset();
            isAni = false;
        }, 280);
        isOpenMenu = false;
    }
}

// side-menu ul li 의 모든 요소를 비활성화 되도록 하는 기능
function menuItemReset() {
    for(var i = 0; i < sideMenuItemEl.length; i++) {
        sideMenuItemEl[i].classList.remove('ani');
    }
}

// side-menu ul li 가 개별적으로 활성화 되도록 하는 기능
function menuItemActive(id) {
    setTimeout(function() {
        sideMenuItemEl[id].classList.add('ani');
        if(id === sideMenuItemEl.length - 1) {
            isAni = false;
        }
    }, 50 * id);   
}

// 이벤트 추가 함수.
function addEvent() {
    btnMenuEl.addEventListener('click', onClickBtnMenu)
    btnCloseEl.addEventListener('click', onClickBtnClose);
}
// 초기화 함수.
function init() {
    addEvent();
}
init();
//console.log(btnMenuEl, sideMenuEl, sideMenuItemEl, btnCloseEl);