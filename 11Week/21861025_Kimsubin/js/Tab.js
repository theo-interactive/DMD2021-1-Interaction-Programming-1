// 요소
// 탭메뉴
// #tab-menu
var tabMenuEl = document.querySelector('#tab-menu');
var btnTabMenuEls = tabMenuEl.querySelectorAll('ul > li > a');

// 탭컨텐츠
var tabContentEls = document.querySelectorAll('.tab-content');

// 현재 값
var cuId = 0;
// 이전 값
// var exId = null;
var exId = cuId;

// (1) 배열 변환하여 현재 index 값 찾기
console.log(btnTabMenuEls);
// NodeList(4) -> Array(4)
btnTabMenuEls = Array.prototype.slice.call(btnTabMenuEls); // 배열 변환 적용
// console.log(btnTabMenuEls);

// 이벤트 핸들러
function onClickBtnTabMenuEls(idx, e){
    e.preventDefault();

    if(exId !== idx){ // 이전값과 현재 클릭된 값이 같지 않은 경우에만 변경.
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
function addEvent(){
    for(var i = 0; i < btnTabMenuEls.length; i++){
        // btnTabMenuEls[i].addEventListener('click', onClickBtnTabMenuEls);
        // (2) bind(value)
        btnTabMenuEls[i].addEventListener('click', onClickBtnTabMenuEls.bind(null, i));
    }
}

function init(){
    addEvent();
}
init()

