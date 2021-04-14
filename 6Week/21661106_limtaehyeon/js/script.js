/*
문제 풀이.
*/

/*
Quest 1.
1. 문서의 title을 '학번_이름' 으로 변경합니다.
*/
// Answer 1.
document.title = "21661106_임태현";
//도큐먼트속성의 타이틀을 이용해 문서의 title을 바꿔준다.

/*
Quest 2.
1. id 가 'title' 인 요소에 'Hello World' 문자열이 포함되도록 작성합니다.
*/
// Answer 2.
var titleid = document.getElementById("title");
titleid.innerHTML = "Hello World";
// id를 찾을수있는 getElementById를 사용해서 "title" id를 찾는다.
// 다음, innerHTML을 써서 추가한다.

/*
Quest 3.
1. class 가 'title' 인 요소들에 '안녕하세요.' 문자열이 포함되도록 작성합니다.
*/
// Answer 3.
var titleclass = document.getElementsByClassName("title");
// console.log(titleclass);
titleclass[0].innerHTML = "안녕하세요.";
titleclass[1].innerHTML = "안녕하세요.";
titleclass[2].innerHTML = "안녕하세요.";
// "title"인 클래스를 찾기위해 getElementsByClassName를 쓴다.
// 찾은 클래스가 몇개 인지 확인 하기 위해 우선 콘솔에 출력해본다. 3개있다.
// 각각 안녕하세요를 출력하기 위해서 index를 써서 뒤에 붙인다음 innerHTML롤 문자열이 포함될
// 수 있게 만든다.

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
var rowclass = document.getElementsByClassName("row");
// console.log(rowclass.length);
function getRowCount(){
    return rowclass.length;
}
var rowCount = getRowCount();
console.log("row class의 개수는 "+rowCount+"개 입니다.");
// 함수를 선언한뒤, 뒤에쓰인 문자열값이랑 이름이 같은 클래스를 찾는 getElementsByClassName
// 를 쓴다. 다음 안에 그 클래스의 요소를 찾을수 있게 length를 붙여서 확인하고 그 값을 리턴한다. 그리고 변수에 그 함수를 담아서 쓰기 편하게 만든다. 보기좋게 출력한다.


/*
Quest 5.
1. 1 초 마다 'hello' 라는 문자열이 console 에 출력되도록 작성합니다.
2. 전역범위에 count 변수를 생성하여 매 출력시 console 에 몇 번의 출력이 되고있는지 번호가 함께 출력되도록 작성합니다.
3. 10 번의 출력 후 해당 기능이 실행되지 않도록 작성합니다.
*/
// Answer 5.
var count = 1;
var second = 1000;
var hellotime = setInterval(function(){
    console.log(count +" hello");
    count++;
    if(count == 11){
        clearInterval(hellotime);
    }
}, second);
// console.log(hellotime);
// 1부터 10까지 새야하므로 변수 count는 0보다 1로 초기값을 정해준다.
// 1sec 이 1milisec 이므로 그냥 편하게 1000으로 변수를 만들어 담아준다.
// 시간에 따라 출력이 되야하므로 setInterval을 써서 돌려줄 값과, 반복될 시간을 정해준다.
// 돌려줄값은 함수로 만들어 복잡한 조건문들이 들어갈수있게 한다.
// count는 현재 1초마다 계속 count자기 자신과"hello"를 끝도 없이 출력할것이다.
// 우리는 hello가 10번 출력되면 더 이상 반복하지 않아도 되므로 if조건문을 써서 count가 11일경우 즉 10까지반복되면 그 다음부터 중지되게 한다. clearInterval를 쓴다.


/*
Quest 6.
1. id 가 'scroll' 인 요소에 'scroll' 이라는 class 를 추가합니다.
2. 1(순서) 요소의 위치를 x : 400px, y : 0px 로 좌표이동합니다.
*/
// Answer 6.
var scrollid = document.getElementById("scroll");
var scrollclass = scrollid.classList.add("scroll");
scrollid.scrollTo(400,0);
// scroll이라는 id를 찾는다.
// scroll이라는 class를 scroll id에 더 추가한다. 추가하기 위해서 classList.add(추가할항목); 을 쓴다. 그리고 그것을 담고 있는 id scroll의 값을 x는 400 y는 0 움직인다.
// scrollTo를 써서 강제로 옮긴다.

/*
Quest 7.
1. id 가 'article' 인 요소를 찾습니다.
2. 1(순서) 요소의 자식 중 첫번째 요소(.row)에 'red' 라는 class 를 추가합니다.
3. 1(순서) 요소의 자식 중 세번째 요소(.row)를 삭제합니다.
*/
// Answer 7.
var articleId = document.getElementById("article");
// console.log(articleId.children);
articleId.children[0].classList.toggle("red", true);
articleId.children[2].classList.toggle("row", false);
// article이라는 id를 찾는다.
// 찾아진 id는 현재 class3개를 갖고 있다는것을 console.log(articleId.children);로 알아본다. 참고로 children은 문자 그대로 그것이 가지고있는 하위 범주이다.여기선 3개의 클래스를 가지고있다. 
// 첫번째와 세번째요소에 변화가생기므로 index번호에 따라 첫번째는 0 세번쨰는 2이다.
// 또 add와 remove를 사용하면 더 손쉽게 사용할수 있지만, toggle은 둘다 사용가능하므로 여기서는 toggle을 사용해 true일경우 추가 false일경우 삭제이다.
// 첫번째는 red를 추가해야하므로 "red", true 이다.
// 세번째는 row자체를 삭제해야하므로 "row", false로 가능하다.

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
// console.log();
function enterName(){
    // enterName이라는 함수를 만든다.
    var inputName = window.prompt("이름을 입력해주세요.");
    // 다이얼로그 방식으로 만든다. 여기에 둔 이유는 나중에 문자를 입력하지 않고 확인 클릭했을시 다시 1에서 만든 함수를 호출해야하는데, 그러면 여기에는 무언가를 호출해도 보여줄게 없다 왜냐하면 다 조건문이라서 조건이 필요하기 때문이다.그래서 조건문없이도 함수만 출력해도 다이얼로그가 출력될수있게 함수안에 그냥 담는다.
    if(inputName === null){
    // 다이얼로그를 입력했을때 취소버튼을 누를경우 즉, null일 경우 콘솔창에 출력
        console.log("입력이 취소되었습니다.");
    }else if(inputName == ""){
    // 아무것도 입력하지 않고 확인버튼 즉 텅빈 문자열을 입력했을경우
        window.alert("이름을 정확히 입력해주세요.");
    // 경고창을 띄워준다. 경고창은 alert이다. 이것 역시 promt와 마찬가지로 굳이 window.을 쓸필요는 없다. 
        enterName();
    // 함수를 다시 출력한다.
    }else if(typeof inputName === "string"){
    // 아무런 문자를 입력했다면, 그 입력한 문자열을 바디마지막 부분에 둔다.
    // 여기서는 write();안에 inputName을 담는다. 이유는 inputName안에 그 문자열 값이 담겨있기 때문이다.
        document.write(inputName);
    }
};
enterName();
// 함수를 호출하지 않으면 애초에 아무일도 일어나지 않는다. 