
//요소.

//탭 메뉴.
//#tab-menu를 찾아오기.

var tabMenuEl = document.querySelector('#tab-menu'); 
var btnTabMenuEls = tabMenuEl.querySelectorAll('ul>li>a');
//console.log(tabMenuEl);
//console.log(btnMenuEl);
// btnTabMenuEl[0].classList.remove('selected');
// btnTabMenuEl[1].classList.add('selected');

//탭 컨텐츠.

var tabContentEls = document.querySelectorAll('.tab-content');
//console.log(tabContentEls);
// tabContentEls[0].classList.remove('selected');
// tabContentEls[1].classList.add('selected');

//클릭한 부분의 순서를 찾고 그 부분의 컨텐츠를 찾아서 활성화/비활성화해주는 코드를 작성.

// 현재 값.
var cuId = 0; // 초기 값은 0(가장 첫번째 탭)

// 이전 값.
var exId = cuId;
// 이후 var exId = cuId가 됨.


// (1번째 방법)배열 변환하여 현재 index 값 찾기.
console.log(btnTabMenuEls);
// 배열처럼 보이지만, 리스트에 담긴 목록이다.
// NodeList -> Array로 변경해 주어야 indexOf로 가져올 수 있음
// NodeList(4) -> Array(4)로!!
btnTabMenuEls = Array.prototype.slice.call(btnTabMenuEls); // 배열 변환기능.
// 노드 리스트가 배열로 변환됨!

// 요소 이벤트 핸들러.
function onClickBtnTabMenuEls(idx, e){ // e는 뒤로 가야함.
    e.preventDefault();// 이벤트의 초기 함수 작동시키지 않도록.
    // console.log('click'); 

    // console.log(e.target, e.currentTarget);
    // 요소의 몇번째에 해당하는 건지 확인. 
    //현재 사용해야할 것은 currentTarget임.
    // btnTabMenuEls.indexOf(e.currentTarget);
    //console.log(btnTabMenuEls.indexOf(e.currentTarget));
    //console.log(idx); // 몇번째 눌리는 건지 확인.

    if(exId !== idx){ //현재 클릭된 요소가 비활성화상태일 때만. 
        //이전 값과 현재 눌린 버튼의 값이 같지 않을 때만
    btnTabMenuEls[exId].classList.remove('selected'); // 이전에 클릭한 요소의 선택기록을 삭제
    tabContentEls[exId].classList.remove('selected');

    //눌릴 때마다 cuId를 재설정해야함.

    cuId = idx; // 받아온 값 = 눌린 버튼의 값
    btnTabMenuEls[cuId].classList.add('selected');
    tabContentEls[cuId].classList.add('selected');

    // 다음 이벤트에서 확인할 수 있도록 exId의 값을 갱신.
    // (맨 마지막에 해야 cuId가 갱신된 값으로 바꿀 수 있음.)
    
    exId = cuId;

    }

}


// 요소에 이벤트 추가하는 기능
function addEvent(){
    for(var i=0; i<btnTabMenuEls.length; i++){
        //btnTabMenuEls[i].addEventListener('click', onClickBtnTabMenuEls);
        //(2번째 방법 bind 사용하기) bind(value)
        btnTabMenuEls[i].addEventListener('click', onClickBtnTabMenuEls.bind(null, i));
    }
    // 반복문을 사용해, 이벤트 핸들러를 탭 버튼 요소에 장착시켜줌.
}

function init(){
    addEvent(); // 이벤트 추가기능 호출.
}

// initialize - init(초기화)
init(); // 페이지가 처음 열렸을 때 초기화 함수 호출.








