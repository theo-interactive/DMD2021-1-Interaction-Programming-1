/*
문제 풀이.
*/

/*
Quest 1.
1. 문서의 title을 '학번_이름' 으로 변경합니다.
*/
// Answer 1.

document.title = "22061075_우은영";        // 문서의 타이틀을 "22061075_우은영"로 변경



/*
Quest 2.
1. id 가 'title' 인 요소에 'Hello World' 문자열이 포함되도록 작성합니다.
*/
// Answer 2.

var titleEl = document.getElementById("title");
console.log(titleEl);
titleEl.innerHTML = 'Hello World';            //innerHTML를 이용해 'Hello World' 추가
console.log(titleEl.innerHTML);    // Hello World



/*
Quest 3.
1. class 가 'title' 인 요소들에 '안녕하세요.' 문자열이 포함되도록 작성합니다.
*/
// Answer 3.

var classEl = document.getElementsByClassName("title");
console.log(classEl);
classEl[0].innerHTML = "안녕하세요";         // innerHTML를 이용해 class 가 'title' 인 요소들에 '안녕하세요.' 추가
classEl[1].innerHTML = "안녕하세요";
classEl[2].innerHTML = "안녕하세요";
console.log(classEl[0].innerHTML);   //안녕하세요
console.log(classEl[1].innerHTML);   //안녕하세요
console.log(classEl[2].innerHTML);   //안녕하세요


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
    var rowEl = document.getElementsByClassName("row");
    return rowEl.length;      //rowEl의 개수 반환
}

var rowCount = getRowCount();
console.log(rowCount);      // 5개 확인
console.log("row class의 개수는" + rowCount + "개 입니다.");  // row class의 개수는 5개 입니다.


/*
Quest 5.
1. 1 초 마다 'hello' 라는 문자열이 console 에 출력되도록 작성합니다.
2. 전역범위에 count 변수를 생성하여 매 출력시 console 에 몇 번의 출력이 되고있는지 번호가 함께 출력되도록 작성합니다.
3. 10 번의 출력 후 해당 기능이 실행되지 않도록 작성합니다.
*/
// Answer 5.

var count = 0;
var timer = setInterval(function(){
    console.log('hello');
    console.log(count + "번 출력");
    count++;
    if (count > 10){
        clearInterval(timer);
    }
}, 1000);





/*
Quest 6.
1. id 가 'scroll' 인 요소에 'scroll' 이라는 class 를 추가합니다.
2. 1(순서) 요소의 위치를 x : 400px, y : 0px 로 좌표이동합니다.
*/
// Answer 6.

var scrollEl = document.getElementById("scroll"); //id 가 'scroll' 인 요소를 찾고,
// console.log(scrollEl);
scrollEl.classList.add("class");      // class 를 추가
console.log(scrollEl); 
scrollEl.scrollTo(400, 0);


/*
Quest 7.
1. id 가 'article' 인 요소를 찾습니다.
2. 1(순서) 요소의 자식 중 첫번째 요소(.row)에 'red' 라는 class 를 추가합니다.
3. 1(순서) 요소의 자식 중 세번째 요소(.row)를 삭제합니다.
*/
// Answer 7.

var articleEl = document.getElementById("article");
console.log(articleEl);
articleEl.children[0].classList.add('red');      // 첫번쨰 요소에 'red' 라는 class 를 추가
console.log(articleEl.children[0]);
articleEl.children[2].classList.remove('row');       // 세번째 요소에 'row' 라는 class 를 삭제
console.log(articleEl.children[2]);



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

var name = prompt('이름을 입력해주세요.');

function enterName(){
    if(name === 'null'){
        console.log("입력이 취소되었습니다.");
    }else if(name === ''){
        alert("이름을 정확히 입력해주세요.");
        name = prompt('이름을 입력해주세요.');
        enterName();              // 이걸 써주지 않으면 다시 떴을때 취소를 눌러도 "입력이 취소되었습니다." 가 뜨지 않았음
    }else{
        document.write(name);
    }
}

enterName();      //enterName 함수를 호출    


