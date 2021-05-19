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
// console.log(btnTabMenuEls);
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
    // 0번이 활성화 되어있고, 0번째 요소를 클릭. - 적용 필요 X
    // 0번이 활성화 되어있고, 1번째 요소를 클릭. - 적용 필요 O
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
function addEvent() {
    for(var i = 0; i < btnTabMenuEls.length; i++) {
        // btnTabMenuEls[i].addEventListener('click', onClickBtnTabMenuEls);
        // (2) bind(value)
        btnTabMenuEls[i].addEventListener('click', onClickBtnTabMenuEls.bind(null, i));
    }
}

// initialize. - init (초기화)
function init() {
    addEvent(); // 이벤트 추가 기능 호출
}

init() // 초기화 함수 호출