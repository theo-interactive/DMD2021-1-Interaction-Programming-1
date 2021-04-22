
var radioEls = document.querySelectorAll('input[name=select_number]');
// console.log(radioEls);

var radioValue = 1;
function onChangeInput(e) {
    // console.log(e.target.value);
    radioValue = e.target.value;
}
for (var i = 0; i < radioEls.length; i++) {
    //console.log(radioEls[i]);
    radioEls[i].addEventListener('change', onChangeInput);
}

function onChangeSelect(e) {
    console.log(e.target.value);
}
var selectEl = document.querySelector('select[name=select_browser]');
// console.log(selectEl);
selectEl.addEventListener('change', onChangeSelect);

// window event.
// resize
function onResize() {
    // console.log('resize');
    console.log(window.innerWidth, window.innerHeight);
}
window.addEventListener('resize', onResize);
// scroll
function onScroll() {
    // console.log('scroll');
    // console.log(window.scrollX, window.scrollY);
    var posY = window.scrollY;
    // 특정 요소의 좌표 - 비교...
}
window.addEventListener('scroll', onScroll);
// element.addEventListener('scroll', scrollHandler);
// window 이외의 스크롤되는 요소에서 이벤트 적용 가능


var divEl = document.getElementById('div');
var pEl = document.getElementById('p');
var spanEl = document.getElementById('span');

function onClickDiv(event) {
    event.preventDefault(); // 태그의 기본 이벤트가 있다고 하면 기본 이벤트 방지.
    console.log('div click');
}
function onClickP(evt) {
    console.log('p click');
}
function onClickSpan(e) {
    e.stopPropagation(); // 이벤트의 버블링을 방지.
    console.log('span click');
}
divEl.addEventListener('click', onClickDiv);
pEl.addEventListener('click', onClickP);
spanEl.addEventListener('click', onClickSpan);