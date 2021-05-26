// .gallery > .view > .view-container > .view-item > img
var galleryEl = document.getElementById('gallery');
var viewEl = galleryEl.querySelector('.view');
var viewContainerEl = viewEl.querySelector('.view-container');
var viewItemEls = viewContainerEl.querySelectorAll('.view-item');
var viewItemImgEls = viewContainerEl.querySelectorAll('.view-item > img');

// .list > li > a
var listEl = document.querySelector('ul.list');
var listItemEls = listEl.querySelectorAll('li'); // [li, li, li, li]
var btnListItemEls = listEl.querySelectorAll('li > a') // [a, a, a, a]

var _galleryWidth = 800; // width - 800px / height - 500px
var _galleryMax = viewItemEls.length; // view-container의 최대 길이

var _duration = 0.1;
var _addDuration = 0.5;

var cuId = 0;
var exId = cuId;

// 1. NodeList -> Array 치환 (indexOf 사용으로 구분)
// 2. bind 적용(null, i) -> bind 숫자로 구분
btnListItemEls = Array.prototype.slice.call(btnListItemEls);


// functions
function onClickBtnListItem(idx, e) {
    e.preventDefault();
    // console.log('click');

    var el = e.currentTarget;
    // var idx = btnListItemEls.indexOf(el); // NodeList -> Array -> indexOf()
    var itemEl = el.parentElement // a 부모요소 (li)

    if (exId !== idx) {
        cuId = idx;
        listItemEls[exId].classList.remove('selected');
        itemEl.classList.add('selected');
        slideGallery();
    }
}

function slideGallery(static) {
    // X축을 기준으로 view content들을 슬라이드 시켜야 함

    var bool = static ? static : false;
    // 어떤 값이 들어온다면 그 값으로, 값이 들어오지 않는다면 false로
    
    var x = _galleryWidth * cuId * -1; // 왼쪽으로 이동되어야 하기 때문(-1)

    if (!bool) {
        var duration = _duration + (_addDuration * Math.abs(exId - cuId));
        // 슬라이드 간 거리에 따라 속도 추가 (Math.abs : '-' 탈락)
        console.log(duration);

        // gsap 이용한 슬라이드 효과
        gsap.killTweensOf(viewContainerEl);
        gsap.to(viewContainerEl, {top: 0, left: x, duration: duration, ease: 'power1.out'});
        exId = cuId;
    }

    else {
        gsap.killTweensOf(viewContainerEl);
    }
}

function resizeGallery() {
    // 브라우저 리사이즈 시 갤러리 크기 고정

    var containerWidth = _galleryWidth * _galleryMax;
    // 800 * gallery item 개수

    viewEl.style.width = _galleryWidth + 'px';
    viewContainerEl.style.width = containerWidth + 'px';

    for(var i = 0; i < _galleryMax; i++) {
        viewItemEls[i].style.width = _galleryWidth + 'px';
    }

    slideGallery(true);
}

function addEvent() {
    // gsap는 브라우저 리사이즈 시 트랜지션 효과 X
    // viewContainerEl.addEventListener('webkitTransitionend', onTransitionEnd);
    // viewContainerEl.addEventListener('transitionend', onTransitionEnd);

    for(var i = 0; i < btnListItemEls.length; i++) {
        btnListItemEls[i].addEventListener('click', onClickBtnListItem.bind(null, i));
    }
}

function reset() {
    cuId = 0; // 처음 시작될 이미지 슬라이드 값
    listItemEls[exId].classList.remove('selected');
    listItemEls[cuId].classList.add('selected');

    resizeGallery();
    exId = cuId;
}

function init() {
    addEvent();
    reset();
}

init();