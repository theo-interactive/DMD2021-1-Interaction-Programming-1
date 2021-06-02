//.accordion #accordion
//.view-item 
//.view-item .btn-close
var htmlEl = document.documentElement;
var accordionEl = document.querySelector('#accordion');
var viewItemEls = accordionEl.querySelectorAll('.view-item');
var btnCloseEls = accordionEl.querySelectorAll('.view-item > .btn-close');

var _cuId = null;
var _exId = _cuId;

var _timer;

function onResizeWindow() {
    // 리사이즈 중인지 체크의 용도.
    // clearTimeout(_timer);
    clearInterval(_timer);
    htmlEl.classList.add('on-resize');
    // .on-resize - 리사이즈 중에 애니메이션 기능 제거.
    _timer = setTimeout(function() {
        htmlEl.classList.remove('on-resize');
    }, 30);
}

function onClickViewItem(idx, e) {
    e.preventDefault();
    console.log('click :: .view-item');
    var el = e.currentTarget;
    if(!el.classList.contains('selected')) {
        _cuId = idx;
        if(_exId !== null) {
            viewItemEls[_exId].classList.remove('selected');
        }
        el.classList.add('selected');
        _exId = _cuId;
    }
}

function onClickBtnClose(idx, e) {
    e.preventDefault();
    // .btn-close 는 .view-item 안에 있는 요소이기 때문에 이벤트 버블링이 발생된다.
    // 이벤트 버블링 방지.
    e.stopPropagation();
    console.log('click :: .btn-close');
    var el = e.currentTarget;
    var itemEl = el.parentElement;
    if(itemEl.classList.contains('selected')) {
        if(_exId !== null) {
            itemEl.classList.remove('selected');
            _cuId = null;
            _exId = _cuId;
        }
    }
}

function addEvent() {
    window.addEventListener('resize', onResizeWindow);
    for(var i = 0; i < viewItemEls.length; i++) {
        viewItemEls[i].addEventListener('click', onClickViewItem.bind(null, i));
    }
    for(var j = 0; j < btnCloseEls.length; j++) {
        btnCloseEls[j].addEventListener('click', onClickBtnClose.bind(null, i));
    }
}

function init() {
    addEvent();
}

init();