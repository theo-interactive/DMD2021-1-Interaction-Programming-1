  
// a태그에 각 색상 버튼이 있어, a를 찾아와야함.
var btnModeEls = document.querySelectorAll('.mode li a');
// console.log(btnModeEls);

var titleEl = document.querySelector('#title');

var htmlEl = document.documentElement;
//console.log(htmlEl);

var types = ['light', 'dark', 'red', 'green'];

var modeType = 'light'; // light | dark | red | green


function onClickBtnModeEls(e){
    e.preventDefault();
    var type = e.currentTarget.getAttribute('href').replace('#',''); 
    // 해시태그에 해당하는 버튼의 타입을 호출.
    // #light | #dark | #red | #green 이런식. 
    // 여기서 #를 제거하면 됨!
    // String.replace('찾는 문자열', '변경될 문자열');을 통해서.
    // console.log(type);
    if(modeType!==type){
        modeType = type;
        setcolorMode();
    }
    
}

function setcolorMode(){
    for(var i =0; i<types.length; i++){
        htmlEl.classList.remove('mode-' + types[i]);
    }
    //htmlEl.classList.remove(); // html자체의 class를 전부 지움. -> 안됌;;
    htmlEl.classList.add('mode-' + modeType);
    //titleEl.innerHTML = modeType+ ' Mode';
    // 첫글자만 대문자로 바꾸기 = 검색해서 해라?

    // "hello".toUpperCase();
    // "hello".toCapitalize();
}


function reset(){

    setcolorMode();
    
}


function addEvent(){
    for(var i = 0; i < btnModeEls.length; i++){
        btnModeEls[i].addEventListener('click', onClickBtnModeEls);
    }
    
}

function init(){
    reset();
    addEvent();
}

init();

//









