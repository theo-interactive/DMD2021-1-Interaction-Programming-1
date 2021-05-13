var btnModeEls = document.querySelectorAll('.mode ul > li > a');
// console.log(btnModeEls);
var titleEl = document.querySelector('#title');
var htmlEl = document.documentElement;
// console.log(htmlEl);
var types = ['light', 'dark', 'red', 'green'];
var modeType = 'light'; // light | dark | red | green

function onClickBtnModeEls(e) {
    e.preventDefault();
    // console.log('click');
    var type = e.currentTarget.getAttribute('href').replace('#', '');
    // #light | #dark | #red | #green
    // 문자열 # 을 제거.
    // String.replace('찾는 문자열', '변경하는 문자열')
    // console.log(type);
    if (modeType !== type) {
        modeType = type;
        setThemeMode()
    }
}

// 첫글자 대문자 기능
function toCapitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

// 문자열에 프로토타입 기능 함수 적용.
String.prototype.toCapitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
}

function setThemeMode() {
    for(var i = 0; i < types.length; i++) {
        htmlEl.classList.remove('mode-' + types[i]);
    }
    htmlEl.classList.add('mode-' + modeType);

    // "hello".toUpperCase()
    // "hello".toCapitalize()

    // 첫글자만 대문자.
    // titleEl.innerHTML = modeType.charAt(0).toUpperCase() + modeType.slice(1)  + ' Theme';
    // titleEl.innerHTML = toCapitalize(modeType)  + ' Theme';
    titleEl.innerHTML = modeType.toCapitalize()  + ' Theme';
}

function addEvent() {
    for(var i = 0; i < btnModeEls.length; i++) {
        btnModeEls[i].addEventListener('click', onClickBtnModeEls);
    }
    
}

function reset() {
    setThemeMode();
}

function init() {
    reset();
    addEvent();
}
init();
