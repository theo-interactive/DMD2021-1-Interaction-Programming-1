var btnModeEls = document.querySelectorAll('.mode ul > li > a');
// console.log(btnModeEls);
var titleEl = document.querySelector('#title');
var htmlEl = document.documentElement;
// console.log(htmlEl);
var types = ['light', 'dark', 'red', 'green'];
var modeType = 'light'; // light | dark | red | green

function onClickBtnModeEls(e){
    e.preventDefault();
    // console.log('click');
    var type = e.currentTarget.getAttribute('href').replace('#', '');
    // #light | #dark | #red | #green
    // 문자열 # 을 제거
    // String.replace ('찾는 문자열', '변경하는 문자열')
    console.log(type);
    if(modeType !== type){
        modeType = type;
        setThemeMode();
    }
}

function setThemeMode(){
    for(var i = 0; i < types.length; i++){
        htmlEl.classList.remove('mode-' + types[i]);
    }
    htmlEl.classList.add('mode-' + modeType);
    titleEl.innerHTML = modeType + ' Mode';
    // 첫글자만 대문자
}

function addEvent(){
    for(var i = 0; i < btnModeEls.length; i++){
        btnModeEls[i].addEventListener('click', onClickBtnModeEls);
    }
}

function reset(){
    setThemeMode();
}

function init(){
    reset();
    addEvent();
}
init();







