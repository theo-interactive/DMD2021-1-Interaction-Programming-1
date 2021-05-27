var galleryEl = document.getElementById('gallery');
var viewEl = galleryEl.querySelector('.view');
var viewContainerEl = viewEl.querySelector('.view-container');
var viewItemEls = viewContainerEl.querySelectorAll('.view-item');
var viewItemImgEls = viewContainerEl.querySelectorAll('.view-item > img');

var paddleNavEl = document.querySelector('.paddle-nav');
var btnPaddleEls = paddleNavEl.querySelectorAll('.arrow');
var btnPrevEl = paddleNavEl.querySelector('.arrow.prev');
var btnNextEl = paddleNavEl.querySelector('.arrow.next');

var listEl = galleryEl.querySelector('ul.list');
var listItemEls = listEl.querySelectorAll('li');
var btnListItemEls = listEl.querySelectorAll('li > a');

// 애니메이션 상태 체크.
var _isAni = false;

var _galleryWidth = null;
var _galleryHeight = null;

var _galleryMax = viewItemEls.length;
var _imageWidth = 1600;
var _imageHeight = 1000;

var _duration = 300;
var _addDuration = 100;

var cuId = 0;
var exId = cuId;

btnListItemEls = Array.prototype.slice.call(btnListItemEls);

function onResizeWindow() {
    console.log('resize');
    console.log(window.innerWidth, window.innerHeight);
    _galleryWidth = window.innerWidth;
    _galleryHeight = window.innerHeight;
    resizeGallery();
}

function onTransitionEnd() {
    console.log('end!');
    viewContainerEl.style.removeProperty('transition');
}

function onClickBtnPaddle(e) {
    if (_isAni) {
        return;
    }
    var el = e.currentTarget;
    console.log(el);
    console.log('prev', el === btnPrevEl)
    console.log('next', el === btnNextEl)
    if(el === btnPrevEl) {
        cuId--;
        if(cuId < 0) {
            cuId = 0;
        }
    }else if(el === btnNextEl) {
        cuId++;
        if(cuId > _galleryMax - 1) {
            cuId = _galleryMax - 1;
        }
    }
    if(exId !== cuId) {
        slideGallery()
    }
}

function onClickBtnListItem(idx, e) {
    e.preventDefault();
    if (_isAni) {
        return;
    }
    if (exId !== idx) {
        cuId = idx;
        slideGallery();
    }
}

function setPaddleActive() {
    if(cuId === 0) {
        btnPrevEl.classList.add('disabled');
        btnNextEl.classList.remove('disabled');
    }else if(cuId === _galleryMax - 1) {
        btnPrevEl.classList.remove('disabled');
        btnNextEl.classList.add('disabled');
    }else{
        btnPrevEl.classList.remove('disabled');
        btnNextEl.classList.remove('disabled');
    }
}

function setListActive() {
    listItemEls[exId].classList.remove('selected');
    listItemEls[cuId].classList.add('selected');
}

function slideGallery(static) {
    var bool = static ? static : false;
    var x = _galleryWidth * cuId * -1;
    _isAni = true;
    // 애니메이션 시작 시 _isAni 의 상태를 true 로 변경.
    setPaddleActive();
    setListActive();
    gsap.killTweensOf(viewContainerEl);
    if (!bool) {
        // Animation.
        var duration = (_duration + _addDuration * Math.abs(exId - cuId)) / 1000;
        gsap.to(viewContainerEl, {x: x, duration: duration, ease: "power2.inOut", onComplete: function() {
            // 애니메이션 종료.
            console.log('Animation End');
            _isAni = false;
            // 애니메이션 상태 변경(false)
        }});
        // 애니메이션이 종료된 후 _isAni 의 상태를 false 로 변경.
        exId = cuId;
    } else {
        // Resize.
        gsap.set(viewContainerEl, {x: x});
        _isAni = false;
    }
}

function resizeGallery() {
    var containerWidth = _galleryWidth * _galleryMax;
    viewEl.style.width = _galleryWidth + 'px';
    viewEl.style.height = _galleryHeight + 'px';
    viewContainerEl.style.width = containerWidth + 'px';
    for(var i = 0; i < _galleryMax; i++) {
        viewItemEls[i].style.width = _galleryWidth + 'px';
    }
    // 이미지 계산 방법.
    // (window) width : (window) height
    // (img) original width : (img) original height = (img) window width : ?
    // ? = (img) original height * (img) window width / (img) original width
    // 1600 : 1000 = 2000 : height
    // height = 1000 * 2000 / 1600
    // 1600 : 1000 = width : 2000
    // width = 1600 * 2000 / 1000

    var width = _galleryWidth;
    var height = _imageHeight * width / _imageWidth;
    var x = 0;
    var y = 0;
    console.log('image calc', width, height);
    // 적용한 이미지 높이가 _galleryHeight(window.innerHeight) 보다 작은 경우 높이를 기준으로 다시 계산.
    if(height <= _galleryHeight) {
        height = _galleryHeight;
        // 1600 : 1000 = width : _galleryHeight
        width = _imageWidth * height / _imageHeight;
        console.log('image calc (height)', width, height);
    }
    // 가운데로 위치하도록 계산. 
    // (window width 의 반값) - (image width 의 반값)
    // (window height 의 반값) - (image height 의 반값)
    x = _galleryWidth / 2 - width / 2;
    y = _galleryHeight / 2 - height / 2;
    //console.log(x, y);
    for(var i = 0; i < viewItemImgEls.length; i++) {
        // viewItemImgEls[i].style.width = width + 'px';
        // viewItemImgEls[i].style.height = height + 'px';
        // 이미지의 위치 적용(브라우저 사이즈 대응한)
        // marginTop, marginLeft
        // viewItemImgEls[i].style.marginLeft = x + 'px';
        // viewItemImgEls[i].style.marginTop = y + 'px';
        // translateX(), translateY()
        // viewItemImgEls[i].style.transform = 'translateX(' + x + 'px) translateY(' + y + 'px)';
        gsap.set(viewItemImgEls[i], {x: x, y: y, width: width, height: height});
        //gsap.to()
    }
    slideGallery(true);
}

function addEvent() {
    window.addEventListener('resize', onResizeWindow);
    for(var i = 0; i < btnPaddleEls.length; i++) {
        btnPaddleEls[i].addEventListener('click', onClickBtnPaddle)
    }
    for(var i = 0; i < btnListItemEls.length; i++) {
        btnListItemEls[i].addEventListener('click', onClickBtnListItem.bind(null, i));
    }
}

function reset() {
    cuId = 0;
    exId = cuId;
}

function init() {
    reset();
    addEvent();
    window.dispatchEvent(new Event('resize'));
}
init();