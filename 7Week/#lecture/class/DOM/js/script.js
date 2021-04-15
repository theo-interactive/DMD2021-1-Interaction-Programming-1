var titleEl = document.getElementById('title');
console.log(titleEl);
// style.
console.log(titleEl.style);
titleEl.style.transition = 'all 200ms ease-in-out'; // 애니메이션 스타일 속성 부여.
// titleEl.style.color = '#ff0000';
// titleEl.style.width = '500px';
// titleEl.style.height = '500px';
// titleEl.style.fontSize = '80px';
// titleEl.style.lineHeight = '120px'; // line-height -> lineHeight
changeTitleStyle();
// css - font-size:80px;
// js - style :: fontSize = '80px'
titleEl.style.backgroundColor = '#000000';

function changeTitleStyle(is = false) {
    if (is) {
        titleEl.style.color = '#ffffff';
        titleEl.style.width = '100px';
        titleEl.style.height = '100px';
        titleEl.style.fontSize = '20px';
        titleEl.style.lineHeight = '30px';
    } else {
        titleEl.style.color = '#ff0000';
        titleEl.style.width = '500px';
        titleEl.style.height = '500px';
        titleEl.style.fontSize = '80px';
        titleEl.style.lineHeight = '120px';
    }
}

//titleEl.style.width = '100px';

// document.getElementById('id'); // 1 단일항목
// document.getElementsByClassName('class'); // [] 목록
// document.getElementsByName('name'); // [] 목록
// document.getElementsByTagName('tag'); // [] 목록

// document.querySelector() ** // 1 단일항목
var liItem2El = document.querySelector('#list.list .item.size');
console.log(liItem2El);
// #id.className {
// }
// document.querySelectorAll() ** // [] 목록
console.log(document.getElementsByClassName('box'));
var boxEls = document.querySelectorAll('.box');
console.log(boxEls);

var inputPasswordEl = document.querySelector('input[type=password]');
console.log(inputPasswordEl);


var ulEl = document.querySelector('ul#list');
console.log(ulEl);
// <li class="item">item 1</li>
var newLiEl = document.createElement('li');
// 아직 script 상의 새로운 <li></li>
newLiEl.innerHTML = '<b>item</b>';
// <li><b>item</b></li>
ulEl.appendChild(newLiEl);

// appendChild()
// removeChild()
// cloneNode()
console.log(liItem2El.cloneNode()); // <li class="item size"></li>
var newLiEl2 = liItem2El.cloneNode(); // 복제 - 요소 내부의 텍스트 제외.
newLiEl2.innerHTML = '<b>item</b>';
ulEl.appendChild(newLiEl2); // 자식노드로 추가.
ulEl.removeChild(newLiEl); // 자식노드 제거

// insertBefore(element, element)
// <div id="box-div"><p>div</p></div>
var boxDivEl = document.querySelector('#box-div');
var newBoxEl = document.createElement('div');
newBoxEl.classList.add('box');
newBoxEl.style.width = '200px';
newBoxEl.style.height = '200px';
newBoxEl.style.backgroundColor = '#00ff00';
newBoxEl.style.color = '#ffffff';
newBoxEl.innerHTML = 'box!!';
console.log(newBoxEl);
// element.insertBefore(newNode, refNode); // 새로운 노드(요소), 참조할 노드(요소) - 기준되는 요소.
document.body.insertBefore(newBoxEl, boxDivEl);
// 기준 요소의 앞쪽에 새로운 노드 추가.
ulEl.insertBefore(newLiEl2, liItem2El); // 문서 상에서 특정하는 요소가 있다면, 기준되는 요소의 앞쪽으로 이동이 된다.

// contains() **
// - 자식요소가 포함되어 있는지 확인. (모든 자식 요소들을 검색)
// 요소 안에 요소가 포함되어 있는지 확인. - boolean 반환.
console.log(ulEl.contains(newLiEl2)); // ul 자식요소에 포함되어 있음. true.
console.log(ulEl.contains(newLiEl)); // ul 자식요소에 포함되어 있지 않음. false.
console.log(document.body.contains(newBoxEl)); // true
console.log(document.body.contains(newLiEl2)); // true
console.log(document.body.contains(newLiEl)); // false

// getAttribute(attr)
// getAttributeNode()
// hasAttributes(attr)
// setAttribute(attr, value)
// removeAttribute(attr)
console.log(inputPasswordEl.getAttribute('type')); // 속성의 값을 반환.
console.log(inputPasswordEl.getAttributeNode('type'));
var tempEl = document.createElement('div'); // <div></div>
// tempEl.classList.add('box'); // <div class="box"></div>
console.log(inputPasswordEl.hasAttributes()); // 속성이 하나라도 기입되어 있으면 true. 완전히 속성이 없으면 false
console.log(tempEl.hasAttributes()); // 노드에 속성이 하나라도 기입되어 있을 때. true. / 기입된 내용이 없을 때. false.
console.log(inputPasswordEl.hasAttribute('type')); // type 속성이 있는지 없는지? boolean 반환.
// inputPasswordEl.setAttribute('type', 'text'); // type="password" -> type="text"
// if (inputPasswordEl.getAttribute('type') === 'password') {
//     inputPasswordEl.setAttribute('type', 'text');
// }

function toggleType() {
    var type = inputPasswordEl.getAttribute('type');
    if (type === 'password') {
        inputPasswordEl.setAttribute('type', 'text');
    } else {
        inputPasswordEl.setAttribute('type', 'password');
    }
}

// click()
var btnToggleEl = document.querySelector('#btn-toggle');
btnToggleEl.style.width = '50px';
btnToggleEl.style.height = '50px';
btnToggleEl.style.backgroundColor = '#000000';

btnToggleEl.onclick = function() {
    console.log('click!');
}
// addEventListener(event, function, options)
// removeEventListener(event, function, options)
function onClickBtnToggle() {
    console.log('click');
    toggleType();
}
// btnToggleEl.addEventListener('click', function() {
//     console.log('click');
//     toggleType();
// });
btnToggleEl.addEventListener('click', onClickBtnToggle); // click 타입의 이벤트를 추가
btnToggleEl.removeEventListener('click', onClickBtnToggle); // click 타입의 이벤트를 제거