var galleryEl = document.getElementById('gallery');
var viewEl = galleryEl.querySelector('.view');
var viewContainerEl = viewEl.querySelector('.view-container');
var viewItemEls = viewContainerEl.querySelectorAll('.view-item');
var viewItemImgEls = viewContainerEl.querySelectorAll('.view-item > img');

var listEl = galleryEl.querySelector('ul.list');
var listItemEls = listEl.querySelectorAll('li');
var btnListItemEls = listEl.querySelectorAll('li > a');



/* 리사이즈 함수용 변수. */

var _galleryWidth = 800;
// width = 800픽셀.
var _galleryMax = viewItemEls.length; 
// 갤러리 전체 항목의 갯수 = 총 갯수.

/* */

var _duration = 500;
var _addDuration = 300;


var cuId = 0;
var exId = cuId;



// NodeList[?,?,?,?]. => Array[?,?,?,?] 로 변환.
// 어디의 몇번째인지 확인하기 위해.
btnListItemEls = Array.prototype.slice.call(btnListItemEls);


function onResizeWindow(){
    console.log('resize!!');
}

function onTransitionEnd(){
    /* 트랜지션이 끝나고 호출되는 함수. */
    console.log('end!!');


    // 트랜지션이 끝나면 아래서 부여한 트랜지션 속성 제거하기.
    viewContainerEl.style.removeProperty('transition');



}


function onClickBtnListItemEls(idx, e){
    e.preventDefault();
    //console.log("clicked");

    var el = e.currentTarget; // 현재 클릭한 타겟을 찾는 변수.
    //현재 타겟(버튼) 확인
    // var idx = btnListItemEls.indexOf(el);

    //li > a
    //li.selected > a 이전의 값을 삭제하고 현재 선택된 버튼에
    //selected를 넣어야 함!!
    var itemEl = el.parentElement; // a의 부모요소(li)
    

    if(exId !== idx){ // 현재 선택버튼 != 이전 선택버튼일 때
        cuId = idx;
        // 이전 아이템 selected 제거, 현재 버튼에 추가
        listItemEls[exId].classList.remove('selected');
        itemEl.classList.add('selected');
        /* listItemEls[idx].classList.add('selected'); 와 같음. */
        
        slideGallery();
    
    
    }

}

function slideGallery(static){
    // transform : translateX(Value);
    var bool = static ? static : false;
    // left 값을 찾기.
    // 좌측으로 이동할 수 있게끔 -1을 곱해 음수로 만듦.
    var x = _galleryWidth * cuId * -1; 
    //console.log(x);   
    //viewContainerEl.style.left = x + 'px'; 가 아니라 아래처럼!

    //viewContainerEl.style.transform = `translate3d(${x}px , 0, 0)`;
    viewContainerEl.style.transform = 'translate3d(' + x + 'px, 0, 0)';


    if(!bool){
        
        // 거리만큼 이동시간 길게. - 거리를 구하기 위해 양수로 만듦
        var duration = _duration + _addDuration * Math.abs(exId - cuId);
        var easing = 'cubic-bezier(0.480, 0.010, 0.150, 1.330)';
        //viewContainerEl.style.transition = 'transform 600ms ease-in-out';

        viewContainerEl.style.transition = 'transform ' + duration + 'ms ' + easing;
        // 이렇게 변수로 만들어 사용할 때는 띄어쓰기 필수!!

        // https://matthewlein.com/tools/ceaser 사이트에서
        // 커스텀 혹은 지정된 커브를 가져와 쓸 수 있음.
            
        exId = cuId; // 이전 선택 버튼 = 현재 버튼으로 대입해 갱신.
        // 이동이 모두 끝나고나서 이전 선택 버튼 갱신.
    }
    else{
        viewContainerEl.style.removeProperty('transition');
    }

}


function resizeGallery(){
    /* 갤러리 리사이즈 함수 */
    // container width = 800px x 아이템의 갯수

    var containerWidth = _galleryWidth * _galleryMax;
    // 항목에 맞춰서 가로폭이 늘어남, 그에 맞춰 이미지가 늘어지도록
    viewEl.style.width = _galleryWidth + 'px';
    viewContainerEl.style.width = containerWidth + 'px';
    for(var i =0; i < _galleryMax; i++){
        viewItemEls[i].style.width = _galleryWidth + 'px';
    }
    
    
}


function addEvent(){

    /* 버튼들에 이벤트 핸들러 할당 */
    // transition webkit / moz / ms / o 
    viewContainerEl.addEventListener('transitionend', onTransitionEnd);
    viewContainerEl.addEventListener('webkitTransitionend', onTransitionEnd);



    for(var i=0; i <btnListItemEls.length; i++){
        //console.log(i);
        btnListItemEls[i].addEventListener('click',onClickBtnListItemEls.bind(null, i));
    }

}

function reset(){
    //cuId = 1;
    listItemEls[exId].classList.remove('selected');
    listItemEls[cuId].classList.add('selected');
    resizeGallery();
    exId = cuId;
}

function init(){
    reset();
    addEvent();
}

init();