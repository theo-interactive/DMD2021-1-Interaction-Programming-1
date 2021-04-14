/*
DOM
문서의 객체 속성.
Document Object Modal
*/

// console.log(window.document);
// console.log(document);

// console.log(document.documentElement);
// <html> 노드 반환
// console.log(document.body);
// <body> 노드 반환

// cookie
// domain
// console.log(document.scripts);

// console.log(document.title); // 문서의 제목 (get)
// document.title = "제목" // 문서의 제목 변경 (set)

// createElement();
var div = document.createElement('div');
// console.log(div);
// 매개변수에 명칭되어있는 해당 태그로 요소(노드) 생성. <div></div>

var header = document.createElement("header"); // <header></header>
// console.log(header);

var a = document.createElement("a"); // <header></header>
// console.log(a);

// script 상에서 태그(노드) 생성.

// id 로 된 요소 찾기.
var titleEl = document.getElementById('title');
// console.log(titleEl);

// class 이름으로 된 요소들 찾기.
var boxEls = document.getElementsByClassName('box');
// console.log(boxEls); // Node 목록으로 반환.

// name 속성 이름으로 된 요소들 찾기.
var inputEls = document.getElementsByName('user_id');
// console.log(inputEls);

// tag 이름으로 된 요소들 찾기.
var divEls =document.getElementsByTagName('div');
// console.log(divEls);

// write('string');
document.write("hello~~~~~");
// 문서의 맨 하단 (body 바로 위)에 내용 추가.

// DOM Element
// console.log(titleEl.attributes);
// 해당하는 요소가 가지고 있는 속성들
// console.log(inputEls[0].attributes);

var ulEl = document.getElementById('list');
// console.log(ulEl.childNodes); // Node(모든 자식 항목 - 공백 텍스트 포함)
// console.log(ulEl.children); // Element(모든 자식 요소)
// console.log(ulEl.children[1]);

for (var i = 0; i < 3; i++) {
    // console.log(i, ulEl.children[i]);
}

var li2El = ulEl.children[1];
// console.log(li2El.classList); // 해당 요소가 가지고 있는 클래스 이름들.
var li2Class = li2El.classList;


// 요소에 클래스명 추가.
// classList.add();
li2El.classList.add('red');
li2Class.add('red', 'padding');
// 요소에 클래스명 삭제.
// classList.remove();
li2El.classList.remove('size');
li2Class.remove('size', 'red');
// classList.toggle();
// 요소에 클래스명 추가 또는 삭제
// (클래스가 없을 추가 / 클래스 있을 때 삭제)
li2Class.toggle('size');
li2Class.toggle('red', false); // remove('red');
li2Class.toggle('size', true); // add('size');
// 2번째 매개변수가
// true 일 때 add()
// false 일 때 remove()
// classList.contains();
// if (true) {
// }

// 해당 요소에 클래스가 있는지 없는지 확인. boolean 반환 (true/false)
if (li2Class.contains('padding')) { // true
    // console.log('padding');
}
if (!li2Class.contains('size')) { // false
    // console.log('size');
}

// 속성에 대한 값을 반환.
// console.log(inputEls[0].id); // id 속성
// console.log(inputEls[0].className); // class 속성

console.log(ulEl.firstChild); // Node 를 포함한 첫번째 자식 항목.
console.log(ulEl.firstElementChild); // 첫번째 자식 요소.
console.log(ulEl.lastChild); // 마지막 자식 항목.
console.log(ulEl.lastElementChild); // 마지막 자식 요소.

var boxDivEl = document.getElementById('box-div');
console.log(boxDivEl.innerHTML); // get
boxDivEl.innerHTML = '<h2>안녕하세요.</h2>'; // set