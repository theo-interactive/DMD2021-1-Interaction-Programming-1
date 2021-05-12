var btnMenuEl = document.querySelector('b#btn-menu');
var sideMenuEl = document.querySelector('#side-menu');
var sideMenuItemEl = sideMenuEl.querySelectorAll('li');
var btnCloseEl = sideMenuEl.querySelector('#btn-close');

var btnScrollEl = document.querySelector('.btnScroll');
var target = document.querySelectorAll('.section');

// menu 활성화 체크
var isOpenMenu = false;
// 애니메이션 중 체크
var isAni = false;

// 이벤트 핸들러 - 메뉴 버튼 클릭
function onClickBtnMenu(e) {
    e.preventDefault();
    console.log('click menu');

    if(isAni) { // 애니메이션 도중 클릭 방지
        return;
    }

    if(!isOpenMenu) { // 메뉴 비활성화된 경우
        sideMenuEl.classList.add('open'); // open 상태 클래스 메뉴 슬라이드에 추가
        isAni = true; // 애니메이션 중
        setTimeout(function() {
            for(var i = 0; i < sideMenuItemEl.length; i++) {
                menuItemActive(i); // side-menu li들에게 애니메이션 부여
            }
        }, 380);

        isOpenMenu = true; // 메뉴 활성화
    }
}

// 이벤트 핸들러 - 닫기 버튼 클릭
function onClickBtnClose(e) {
    e.preventDefault();
    console.log('click close');

    if(isAni) { // 애니메이션 도중 클릭 방지
        return
    }
    
    if(isOpenMenu) {
        sideMenuEl.classList.remove('open'); // open 상태 클래스 메뉴 슬라이드에서 제거
        isAni = true; // 애니메이션 중
        setTimeout(function() {
            menuItemReset(); // side-menu li들에게 애니메이션 제거
            isAni = false; // 애니메이션 종료
        }, 280);

        isOpenMenu = false; // 메뉴 비활성화
    }
}

// side-menu li의 요소들 비활성화
function menuItemReset() {
    for(var i = 0; i < sideMenuItemEl.length; i++){
        sideMenuItemEl[i].classList.remove('ani');
        // side-menu li 개수만큼 li들에게 애니메이션 클래스 제거
    }
}


// side-menu li의 요소들 활성화
function menuItemActive(id) {
    setTimeout(function() {
        sideMenuItemEl[id].classList.add('ani');
        if (id === sideMenuItemEl.length - 1) {
            isAni = false;
            // 현재 사이클의 id가 sideMenuItemEl의 개수보다 작아졌을 때 애니메이션 종료
        }
    }, 50 * id);
    // 순서대로 애니메이션 부여 (50, 100, 150 ...)
}

// main 'More Info' 버튼
function onClickBtnScroll(e) {
    window.scroll({
        top: target[1].offsetTop - 60,
        behavior: 'smooth'
      });
}

// 이벤트 추가
function addEvent() {
    btnMenuEl.addEventListener('click', onClickBtnMenu);
    btnCloseEl.addEventListener('click', onClickBtnClose);
    btnScrollEl.addEventListener('click', onClickBtnScroll);
}

// 초기화
function init() {
    addEvent();
}

init();