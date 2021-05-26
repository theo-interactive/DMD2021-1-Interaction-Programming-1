// find #gallery
var galleryEl = document.querySelector('#gallery');
// find #gallery > .view
var viewEl = galleryEl.querySelector('.view');
// find .view > .view-container
var viewContainerEl = viewEl.querySelector('.view-container');
// find .view-container > .view-item
var viewItemEls = viewContainerEl.querySelectorAll('.view-item');
// find .view-item > img
var viewItemImgEls = viewContainerEl.querySelectorAll('.view-item > img');

// find ul.list
var listEl = galleryEl.querySelector('ul.list');
// find ul.list > li
var listItemEls = listEl.querySelectorAll('li');
// find li > a
var btnListItemEls = listEl.querySelectorAll('li > a');

// create variables.
var _galleryWidth = 500;
var _galleryMax = viewItemEls.length;

var _duration = 300;
var _addDuration = 100;

var cuId = 0;
var exId = cuId;

// convert arguments to array.
btnListItemEls = Array.prototype.slice.call(btnListItemEls);

// remove transitions when transitions are ended.
function onTransitionEnd() {
    console.log('end');
    viewContainerEl.style.removeProperty('transition');
}

// when thumbnail is clicked.
function onClickBtnListItem(idx, e) {
    e.preventDefault();
    var el = e.currentTarget; // a
    // console.log(el);
    var itemEl = el.parentElement; // li
    // console.log(itemEl);
    if (exId !== idx) {
        cuId = idx;
        listItemEls[exId].classList.remove('selected');
        itemEl.classList.add('selected');
        slideGallery();
    }
}

// slide the gallery to left.
function slideGallery(static) {
    var bool = static ? static : false;
    // * -1 : move left
    var x = _galleryWidth * cuId * -1;
    viewContainerEl.style.transform = 'translate3d(' + x + 'px, 0, 0)';
    if (!bool) {
        var duration = _duration + _addDuration * Math.abs(exId - cuId);
        var easing = 'cubic-bezier(0.455, 0.030, 0.515, 0.955)';
        viewContainerEl.style.transition = 'transform ' + duration + 'ms ' + easing;
        exId = cuId;
        console.log(cuId);
    } else {
        viewContainerEl.style.removeProperty('transition');
    }
}

// resize images in the gallery.
function resizeGallery() {
    var containerWidth = _galleryWidth * _galleryMax;
    viewEl.style.width = _galleryWidth + 'px';
    viewContainerEl.style.width = containerWidth + 'px';
    for (var i = 0; i < _galleryMax; i++) {
        viewItemEls[i].style.width = _galleryWidth + 'px';
    }
    slideGallery(true);
}

// find #cursor-dot
var cursorDotEl = document.querySelector('#cursor-dot');
// find #cursor-bg
var cursorBGEl = document.querySelector('#cursor-bg');
// find #progress
var progressEl = document.querySelector('#progress');

// move cursor.
function onMoveWindow(e) {
    // console.log(e.pageX, e.pageY, e.clientX, e.clientY);
    var posX = e.clientX;
    var posY = e.clientY;

    // remove animations.
    gsap.killTweensOf(cursorDotEl);
    gsap.to(cursorDotEl, {top: posY, left: posX, duration: 0.2});
    gsap.killTweensOf(cursorBGEl);
    gsap.to(cursorBGEl, {top: posY, left: posX, duration: 0.2});
    gsap.killTweensOf(progressEl);
    gsap.to(progressEl, {top: posY, left: posX, duration: 0.25});
}

// enter thumbnail list.
function onEnterBtnListItemEl(e) {
    // console.log('enter');
    if (!cursorBGEl.classList.contains('active')) {
        cursorBGEl.classList.add('active');
    }
    if (!progressEl.classList.contains('active')) {
        progressEl.classList.add('active');
    }
}

// leave thumbnail list.
function onLeaveBtnListItemEl(e) {
    // console.log('leave');
    if (cursorBGEl.classList.contains('active')) {
        cursorBGEl.classList.remove('active');
    }
    if (progressEl.classList.contains('active')) {
        progressEl.classList.remove('active');
    }
}

// add event.
function addEvent() {
    viewContainerEl.addEventListener('webkitTransitionend', onTransitionEnd);
    viewContainerEl.addEventListener('transitionend', onTransitionEnd);
    for (var i = 0; i < btnListItemEls.length; i++) {
        // bind.
        btnListItemEls[i].addEventListener('click', onClickBtnListItem.bind(null, i));

        // mouse enter, leave.
        btnListItemEls[i].addEventListener('mouseenter', onEnterBtnListItemEl);
        btnListItemEls[i].addEventListener('mouseleave', onLeaveBtnListItemEl);
    }
    // window mouse event.
    window.addEventListener('mousemove', onMoveWindow);
}

// reset.
function reset() {
    cuId = 0;
    listItemEls[exId].classList.remove('selected');
    listItemEls[cuId].classList.add('selected');
    resizeGallery();
    exId = cuId;
}

// initialize.
function init() {
    reset();
    addEvent();
}
init();

