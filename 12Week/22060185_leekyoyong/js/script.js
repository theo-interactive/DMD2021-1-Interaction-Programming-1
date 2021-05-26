var galleryEl = document.getElementById("gallery1");
// document.querySelector("#gallery");
var viewEl = galleryEl.querySelector(".view");
var viewContainerEl = viewEl.querySelector(".view-container");
var viewItemEls = viewContainerEl.querySelectorAll(".view-item");
var viewIemImgEls = viewContainerEl.querySelectorAll(".view-item > img");

var listEl = galleryEl.querySelector("ul.list");
var listItemEls = listEl.querySelectorAll("li"); // [li, li, li, li]
var btnListItemEls = listEl.querySelectorAll("li > a"); // [a, a, a, a]
var listh2 = document.querySelector('.gallery1 >h2');

var _galleryWidth = 1420;

var _galleryMax = viewItemEls.length;
// 전체 항목의 개수

var _duration = 400;
var _addDuration = 100;

var cuId = 0;
var exId = cuId;

// NodeList[?,?,?,?] -> Array[?,?,?,?]
btnListItemEls = Array.prototype.slice.call(btnListItemEls);

function onTransitionEnd() {
    // console.log('end!');
    viewContainerEl.style.removeProperty('transition');
}

function onClickBtnListItem(idx, e) {
    e.preventDefault();
    var el = e.currentTarget;
    // var idx = btnListItemEls.indexOf(el);
    var itemEl = el.parentElement; // a 의 부모요소 (li)

    if (exId !== idx) {
        cuId = idx;
        // li > a
        // li.selected > a
        listItemEls[exId].classList.remove("selected");
        // listItemEls[exId].classList.add("selected");
        itemEl.classList.add("selected");
        slideGallery();
    }
}

function slideGallery(static) {
    // transform - translate(?)
    var bool = static ? static : false;
    var x = _galleryWidth * cuId * -1;
    viewContainerEl.style.transform = 'translate3d(' + x + 'px, 0, 0)';
    if (!bool) {
        var duration = _duration + _addDuration * Math.abs(exId - cuId); //500 , 600, 700
        // console.log(Math.abs(exId-cuId));// -탈락.
        var easing = 'ease-in-out';
        // console.log(x);
        // viewContainerEl.style.left = x + "px";
        // viewContainerEl.style.transform = `translate3d(${x}px, 0, 0)`;
        // viewContainerEl.style.transition = 'transform 300ms ease-in-out';
        viewContainerEl.style.transition = 'transform ' + duration + 'ms ' + easing;
        exId = cuId;
    } else {
        viewContainerEl.style.removeProperty('transition');
    }
}

function resizeGallery() {
    // container-width = 800px * 아이템의 개수
    var containerWidth = _galleryWidth * _galleryMax;
    // console.log(containerWidth);
    viewEl.style.width = _galleryWidth + "px";
    viewContainerEl.style.width = containerWidth + "px";
    for (var i = 0; i < _galleryMax; i++) {
        viewItemEls[i].style.width = _galleryWidth + "px";
    }
    slideGallery(true);
}

function onChangeBtncolor(e) {
    var el = e.currentTarget;
    var idx = btnListItemEls.indexOf(el);
    listh2.style.color = "#fff";
    for (var a = 0; a < btnListItemEls.length; a++) {
        btnListItemEls[a].style.color = "#fff";
    }    
}
function onChangeBtncolor1(e) {
    listh2.style.color = "#000";
    for (var a = 0; a < btnListItemEls.length; a++) {
        btnListItemEls[a].style.color = "#000";
    }
}

function addEvent() {
    //transitin webkit / moz / ms / o

    for(var c = 0; c<btnListItemEls.length; c++){
        btnListItemEls[c].addEventListener('click', onChangeBtncolor1);
    }
    for (var b = 2; b < 4; b++) {
        btnListItemEls[b].addEventListener('click', onChangeBtncolor);
    }
    viewContainerEl.addEventListener('webkitTransitionend', onTransitionEnd);
    viewContainerEl.addEventListener('transitionend', onTransitionEnd);
    for (var i = 0; i < btnListItemEls.length; i++) {
        btnListItemEls[i].addEventListener("click", onClickBtnListItem.bind(null, i));
        // onClickBtnListItem.bind(null, i);
    }
}
function reset() {
    cuId = 0;
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