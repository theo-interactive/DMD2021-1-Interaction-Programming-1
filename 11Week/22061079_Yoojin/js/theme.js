var btnModeEls = document.querySelectorAll('.mode ul > li > a');
var titleEl = document.querySelector('#title');
var htmlEl = document.documentElement;
var types = ['light', 'dark', 'red', 'green'];
var modeType = 'light';

function onClickBtnModeEls(e){
    e.preventDefault();
    var type = e.currentTarget.getAttribute('href').replace('#', '');
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







