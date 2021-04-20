/*
문제 풀이.
*/

/*
Quest 1.
1. 문서의 title을 '학번_이름' 으로 변경합니다.
*/
// Answer 1. ok
// Answer 1.
document.title = "21961027_김지후"; // 문서의 title을 바꿔줌



/*
Quest 2.
1. id 가 'title' 인 요소에 'Hello World' 문자열이 포함되도록 작성합니다.
*/
// Answer 2.
var titleEl = document.getElementById('title'); // 변수를 만들어 title의 element를 가져오고,
titleEl.innerHTML = 'Hello World'; // innerHTML을 이용해 문자열 기입,  문제 해결!


/* 7주차 수업 풀이 때 작성 */

titleEl.innerText = 'Hello World'; // innerText는 무조건 문자열만 기입 가능!!
titleEl.innerHTML = '<div class="box">Hello World</div>'
// innerHTML은 객체를 만들어서 붙여줄 수가 있음. 

var html = '';
html += '<div class="box">';
for(var i = 0; i < 10; i++){
    html += 'Hello World 입력';
    html += '<br />'
}

html +='</div>';

titleEl.innerHTML = html;

// 이 과정을 innerText를 이용해 하면 태그들이 전부 문자열로 출력되어 버림.

/* 7주차 수업 풀이 때 작성 */


/*
Quest 3.
1. class 가 'title' 인 요소들에 '안녕하세요.' 문자열이 포함되도록 작성합니다.
*/
// Answer 3.
var titleEl2 = document.getElementsByClassName('title'); // title 요소들을 전부 찾고,
titleEl2[0].innerHTML = '안녕하세요.';
titleEl2[1].innerHTML = '안녕하세요.';
titleEl2[2].innerHTML = '안녕하세요.'; // 요소들에 (전부 3개) 문자열 기입, 문제 해결!


/* 7주차 수업 풀이 때 작성 */

for(i = 0; i < titleEl2.length; i++){
    
    //titleEl2[i].innerHTML = '안녕하시유';

    var titkeEl = titleEl2[i];
    titleEl.innerHTML = '안녕하시유'; // 위랑 같음.
}

/* 7주차 수업 풀이 때 작성 */


/*
Quest 4.
1. getRowCount 이라는 함수를 선언합니다.
2. 'row' 라는 이름을 가진 class 를 찾고 요소의 개수를 반환합니다.
3. rowCount 변수를 선언, getRowCount() 를 호출하고 반환값을 할당받아 아래와 같이 console 에 출력되도록 작성합니다.
----------
문자열)
row class의 개수는 __개 입니다.
----------
*/
// Answer 4.

function getRowCount(){
    var row =  document.getElementsByClassName('row'); // row라는 이름을 가진 class들을 찾고,
    var number1 = 0;
    for(i = 0; i < row.length; i++){  // 요소의 개수를 반환하기 위한 반복문을 작성 - index의 row 요소의 개수만큼 반복
        number1++; 
    }
    return number1; // row의 개수만큼 숫자가 반환됨
}

var rowCount = getRowCount();
console.log("row class의 개수는 " + rowCount + "개 입니다."); // row의 요소는 총 5개(class만 찾고 하위 요소들의 개수까지는 찾지 않음), 문제 해결!

/* 7주차 수업 풀이 때 작성 */

function getRows(){
    var rowEls = document.getElementsByClassName('row');
    return rowEls.length;
}

// 멀리 돌아가지 않고 이런식으로 간단히 값을 반환받을 수 있다!!

var rowCount2 = getRows();
console.log(rowCount2);

var msg = `row class의 개수는 ${rowCount2}개 입니다`;
console.log(msg);

/* 7주차 수업 풀이 때 작성 */



/*
Quest 5.
1. 1 초 마다 'hello' 라는 문자열이 console 에 출력되도록 작성합니다.
2. 전역범위에 count 변수를 생성하여 매 출력시 console 에 몇 번의 출력이 되고있는지 번호가 함께 출력되도록 작성합니다.
3. 10 번의 출력 후 해당 기능이 실행되지 않도록 작성합니다.
*/
// Answer 5.

var count = 0; // 전역범위에 출력될 변수 생성, 반복문을 돌리기 위해 값을 0으로 초기화

var timer = setInterval(function(){ // 타이머 함수
    if(count < 10){            
        console.log(count);
        count++; // count(숫자)를 출력하고 1을 더해줌
    }
    else{
        clearInterval(timer); // count가 10보다 작지 않으면 타이머를 멈춤
    }
}, 1000);

// 10번 출력되므로 출력되는 값은 0~9. 문제 해결!


/* 7주차 수업 풀이 때 작성 */

var count2 = 0;

function setCount(){
    count++;
    console.log(count2);

    if(count2 >= 10){
        clearInterval(timer2);
    }
}

var timer2 = setInterval(setCount, 1000);
//이런식으로 함수를 따로 만들어서 받아올 수 있다!!

/* 7주차 수업 풀이 때 작성 */



/*
Quest 6.
1. id 가 'scroll' 인 요소에 'scroll' 이라는 class 를 추가합니다.
2. 1(순서) 요소의 위치를 x : 400px, y : 0px 로 좌표이동합니다.
*/
// Answer 6.

var idScroll = document.getElementById('scroll'); // scroll id를 가진 요소를 찾고
idScroll.classList.add("scroll"); // scroll class를 추가
console.log(idScroll);
idScroll.scrollTo(400,0); // x 400px, y 0px위치로 좌표 이동, 문제 해결!

/* 7주차 수업 풀이 때 작성 */

var scrollEl = document.getElementById('scroll');
scrollEl.classList.add('scroll');

setTimeout(function(){
    scrollEl.scrollTo(400,0);
},2000)

// 최초에 문서를 로드했을 때 스크롤 발생이 되지 않을 수 있음.
// 2초 후 지연 시킴


/* 7주차 수업 풀이 때 작성 */





/*
Quest 7.
1. id 가 'article' 인 요소를 찾습니다.
2. 1(순서) 요소의 자식 중 첫번째 요소(.row)에 'red' 라는 class 를 추가합니다.
3. 1(순서) 요소의 자식 중 세번째 요소(.row)를 삭제합니다.
*/
// Answer 7.

var article = document.getElementById('article'); // article id를 가진 요소를 찾고
article.children[0].classList.add('red'); // 첫번째 요소에 red class 추가 = 첫번째 class의 이름이 "row red"가 됨
article.children[2].classList.remove('row'); // 세번째 요소를 삭제 - class의 이름인 row를 없앰, class는 그대로 남아있음 
console.log(article);

/* 7주차 수업 풀이 때 작성 */

var articleEl = document.getElementById('article');
/*
articleEl.firstElementChild.classList.add('pink');
articleEl.removeChild(articleEl.lastElementChild);
*/

var r_Els = articleEl.getElementsByClassName('row');
console.log(r_Els);
r_Els[0].classList.add('red');
r_Els[1].remove();
//articleEl.removeChild(rowEls[2]);


/* 7주차 수업 풀이 때 작성 */





/*
Quest 8.
1. enterName 이라는 함수를 선언하고 아래와 같이 정의합니다.
2. '이름을 입력해주세요.' 라는 문구와 입력창이 포함된 다이얼로그창을 출력합니다.
3. 사용자가 다이얼로그창의 취소를 클릭한 경우(null), 아래와 같이 console 에 출력되도록 작성합니다.
----------
문자열)
입력이 취소되었습니다.
----------
4. 사용자가 다이얼로그창에 문자를 입력하지 않고 확인을 클릭할 경우(string), 아래와 같은 문구의 경고창을 띄웁니다.
----------
문자열)
이름을 정확히 입력해주세요.
----------
5. 4(순서) 경우에서 경고창을 확인하면 1(순서) 함수를 다시 호출합니다.
6. 사용자가 문자 단어 하나라도 입력하고 확인을 클릭한 경우(string), 입력된 사항을 body(화면)의 마지막 부분에 출력합니다.
7. enterName 함수를 호출합니다.
*/
// Answer 8.

//var namePrompt = prompt('이름을 입력해주세요.'); // 메세지와 input이 있는 다이얼로그창 선언


/*

function enterName(){
    if(namePrompt === null){ // 입력을 하지 않고 cancle(취소) 버튼을 클릭했으면
        console.log('입력이 취소되었습니다'); // 메세지 출력
    }
    else if(namePrompt == ''){ // 기입된 내용이 없다면(문자를 입력하지 않고 확인 클릭)
        alert('이름을 제대로 입력해주세요.'); // 메세지 출력
        namePrompt = prompt('이름을 입력해주세요.'); // 재호출시 뭔가 적혀있지 않으면 경고창만 뜨기 때문에 다시 초기화
        enterName(); // 경고창 확인 후 함수 재호출

    } 
    else if (typeof namePrompt === 'string'){ // 사용자가 뭔갈 입력하고 확인을 클릭한 경우
        document.write(namePrompt); // 입력된 문자열을 body 맨 마지막에 출력
    }
}

*/

//enterName(); // 제대로 되는지 확인, 문제 해결!

/* 7주차 수업 풀이 때 작성 */

function enterName2(){
    var n_name = prompt('이름을 입력해 주세요');
    console.log(n_name);
    // 취소 = null

    if(n_name === null){
        console.log('입력 취소댐');
        return; // 함수를 종료
    }

    if(n_name === ''){
        alert('이름을 정확히 입력해주세요');
        enterName2();
    } else {
        // 이름이 제대로 입력되었을 때.
        document.write(n_name); // body 마지막 부분에 출력.
    }

}

enterName2();


/* 7주차 수업 풀이 때 작성 */
