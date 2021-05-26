var galleryEl = document.getElementById('gallery');
// document.querySelector('#gallery');
var viewEl = galleryEl.querySelector('.view');
var viewContainerEl = viewEl.querySelector('.view-container');
var viewItemEls = viewContainerEl.querySelectorAll('.view-item');
var viewItemImgEls = viewContainerEl.querySelectorAll('.view-item > img');

var listEl = galleryEl.querySelector('ul.list');
var listItemEls = listEl.querySelectorAll('li'); // [li, li, li, li]
var btnListItemEls = listEl.querySelectorAll('li > a'); // [a, a, a, a]

var _galleryWidth = 1000;
// width - 800px
// height - 500px
var _galleryMax = viewItemEls.length;
// 전체 항목의 개수.

var _duration = 300;
var _addDuration = 100;

var cuId = 0;
var exId = cuId;

// NodeList[?,?,?,?] -> Array[?,?,?,?]
btnListItemEls = Array.prototype.slice.call(btnListItemEls);

function onTransitionEnd() {
    console.log('end!');
    viewContainerEl.style.removeProperty('transition');
}

function onClickBtnListItem(idx, e) {
    e.preventDefault();
    var el = e.currentTarget;
    // var idx = btnListItemEls.indexOf(el);
    var itemEl = el.parentElement;
    if (exId !== idx) {
        cuId = idx;
        listItemEls[exId].classList.remove('selected');
        itemEl.classList.add('selected');
        slideGallery();
    }
}

function slideGallery(static) {
    // transform : translateX(?)
    var bool = static ? static : false;
    var x = _galleryWidth * cuId * -1;
    viewContainerEl.style.transform = 'translate3d(' + x + 'px, 0, 0)';
    if (!bool) {
        var duration = _duration + _addDuration * Math.abs(exId - cuId); // 400, 500, 600
        // console.log(Math.abs(exId - cuId)); // - 탈락.
        // console.log(exId - cuId);
        // console.log(duration);
        var easing = 'cubic-bezier(0.455, 0.030, 0.515, 0.955)';
        // viewContainerEl.style.left = x + 'px';
        // viewContainerEl.style.transform = `translateX(${x}px)`;
        // viewContainerEl.style.transform = 'translateX(' + x + 'px)';
        // viewContainerEl.style.transform = `translate3d(${x}px, 0, 0)`;
        // viewContainerEl.style.transition = 'transform ' + duration + 'ms ease-in-out';
        viewContainerEl.style.transition = 'transform ' + duration + 'ms ' + easing;    
        exId = cuId;
    } else {
        viewContainerEl.style.removeProperty('transition');
    }
}

function resizeGallery() {
    // container width - 800px x 아이템의 개수
    var containerWidth = _galleryWidth * _galleryMax;
    // console.log(containerWidth);
    viewEl.style.width = _galleryWidth + 'px';
    viewContainerEl.style.width = containerWidth + 'px';
    for(var i = 0; i < _galleryMax; i++) {
        viewItemEls[i].style.width = _galleryWidth + 'px';
    }
    slideGallery(true);
}

function addEvent() {
    // transition webkit / moz / ms / o
    viewContainerEl.addEventListener('webkitTransitionend', onTransitionEnd);
    viewContainerEl.addEventListener('transitionend', onTransitionEnd);
    for(var i = 0; i < btnListItemEls.length; i++) {
        btnListItemEls[i].addEventListener('click', onClickBtnListItem.bind(null, i));
    }
}

function reset() {
    cuId = 3;
    listItemEls[exId].classList.remove('selected');
    listItemEls[cuId].classList.add('selected');
    resizeGallery();
    exId = cuId;
}

function init() {
    reset();
    addEvent();
}
init();