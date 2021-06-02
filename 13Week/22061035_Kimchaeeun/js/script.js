// #accordion .accordion
// .accordion > .view-item > .btn-close

var htmlEl = document.documentElement;
var accordionEl = document.querySelector('#accordion');
var viewItemEls = accordionEl.querySelectorAll('.view-item');
var btnCloseEls = accordionEl.querySelectorAll('.view-item > .btn-close');

var cuId = null;
var exId = cuId;

var timer;

// 브라우저 리사이즈 시 애니메이션 방지
function onResizeWindow() {
    clearInterval(timer);
    htmlEl.classList.add('on-resize');
    timer = setTimeout(function() {
        htmlEl.classList.remove('on-resize');
    }, 30);
}

function onClickViewItem(idx, e) {
    e.preventDefault();
    // console.log('click .view-item');

    var el = e.currentTarget;
    if(!el.classList.contains('selected')) {
        // console.log('!');
        cuId = idx;
        // console.log(exId);

        if(exId !== null) {
            viewItemEls[exId].classList.remove('selected');
        }

        el.classList.add('selected');
        exId = cuId;
    }
}

function onClickBtnClose(idx, e) {
    e.preventDefault();
    e.stopPropagation();

    console.log('click .btn-close');

    var el = e.currentTarget;
    var itemEl = el.parentElement;
    console.log(el, itemEl);

    if(itemEl.classList.contains('selected')) {
        if(exId !== null) {
            itemEl.classList.remove('selected');
            cuId = null;
            exId = cuId;
        }
    }
}

function addEvent() {
    window.addEventListener('resize', onResizeWindow);

    for(var i = 0; i < viewItemEls.length; i++) {
        viewItemEls[i].addEventListener('click', onClickViewItem.bind(null, i));
    }

    for(var j = 0; j < btnCloseEls.length; j++) {
        btnCloseEls[j].addEventListener('click', onClickBtnClose.bind(null, j));
    }
}

function init() {
    addEvent();
}

init();