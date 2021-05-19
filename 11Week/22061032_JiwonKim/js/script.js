var tabMenuEl = document.querySelector('#tab-menu'),
    btnTabMenuEl = tabMenuEl.querySelectorAll('a'),
    tabContainerEl = document.querySelector('.tab-container'),
    tabContentEl = tabContainerEl.querySelectorAll('.tab-content'),
    cuId = 0,
    exId = null;

btnTabMenuEl = Array.prototype.slice.call(btnTabMenuEl);
function onClickTabMenu(e) {
    e.preventDefault();
    var el = e.currentTarget, index = btnTabMenuEl.indexOf(el);
    if(!el.classList.contains('selected')) {
        cuId = index;
        btnTabMenuEl[exId].classList.remove('selected');
        tabContentEl[exId].classList.remove('selected');
        el.classList.add('selected');
        tabContentEl[cuId].classList.add('selected');
        exId = cuId;
    }
}
function addEventTab() {
    for(var i = 0; i < btnTabMenuEl.length; i++) {
        btnTabMenuEl[i].addEventListener("click", onClickTabMenu);
    }
}
function initF() {
    exId = cuId;
    addEventTab();
}
initF();


var cursorDotEl = document.querySelector("#cursor-dot"),
    cursorBGEl = document.querySelector("#cursor-bg"),
    progressEl = document.querySelector("#progress");

var btnListItemEl = document.querySelectorAll('a');

function onMoveWindow(e) {
    var posX = e.clientX;
    var posY = e.clientY;
    // cursorDotEl.style.left = posX + 'px';
    // cursorDotEl.style.top = posY + 'px';
    // cursorBGEl.style.left = posX + 'px';
    // cursorBGEl.style.top = posY + 'px';
    // progressEl.style.left = posX + 'px';
    // progressEl.style.top = posY + 'px';
    gsap.killTweensOf(cursorDotEl);
    gsap.to(cursorDotEl, {top: posY, left: posX, duration: 0.1});
    gsap.to(cursorBGEl, {top: posY, left: posX, duration: 0.1});
    gsap.to(progressEl, {top: posY, left: posX, duration: 0.1});
}

function onEnterBtnListItemEl() {
    console.log('enter');
    if (!cursorBGEl.classList.contains('active')) {
        cursorBGEl.classList.add('active');
    }
    if (!progressEl.classList.contains('active')) {
    progressEl.classList.add('active');
    }
}
function onLeaveBtnListItemEl() {
    console.log('leave');
    if (cursorBGEl.classList.contains('active')) {
        cursorBGEl.classList.remove('active');
    }
    if (progressEl.classList.contains('active')){
    progressEl.classList.remove('active');
    }
}


function addEvent() {
    window.addEventListener('mousemove', onMoveWindow);
    for(var i = 0; i < btnListItemEl.length; i++){
        btnListItemEl[i].addEventListener('mouseenter', onEnterBtnListItemEl);
        btnListItemEl[i].addEventListener('mouseleave', onLeaveBtnListItemEl);
    }
}
function init() {
    addEvent();
}
init();