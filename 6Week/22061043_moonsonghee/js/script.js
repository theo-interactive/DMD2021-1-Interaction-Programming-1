/*
문제 풀이.
*/

/*
Quest 1.
1. 문서의 title을 '학번_이름' 으로 변경합니다.
*/
// Answer 1.
document.title = "22061043_문송희";
//문서 title 변경



/*
Quest 2.
1. id 가 'title' 인 요소에 'Hello World' 문자열이 포함되도록 작성합니다.
*/
// Answer 2.
var titleE1 = document.getElementById("title"); // 변수를 만들어서 title의 element 가져오기
titleE1.innerHTML = 'Hello World'; // innerHTML을 이용해 문자열 포함되도록 작성




/*
Quest 3.
1. class 가 'title' 인 요소들에 '안녕하세요.' 문자열이 포함되도록 작성합니다.
*/
// Answer 3.
// 변수를 만들어서 title의 element 가져오기
var titleE1 = document.getElementsByClassName("title");
// '안녕하세요.' 문자열이 포함되도록 코드 작성
titleE12[0].innerHTML = '안녕하세요';
titleE12[1].innerHTML = '안녕하세요';
titleE12[2].innerHTML = '안녕하세요';





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
// 이 문제는 잘 모르겟습니다....

// 함수 getRowCount() 호출
function getRowCount()
{
    var row = document.getElementsByClassName("row");
    var result = 'row class의 개수는' + row + '개 입니다';
    return row.length;
//??????

}



/*
Quest 5.
1. 1 초 마다 'hello' 라는 문자열이 console 에 출력되도록 작성합니다.
2. 전역범위에 count 변수를 생성하여 매 출력시 console 에 몇 번의 출력이 되고있는지 번호가 함께 출력되도록 작성합니다.
3. 10 번의 출력 후 해당 기능이 실행되지 않도록 작성합니다.
*/
// Answer 5.
var count = 0; //전역범위의 변수 생성

//1초마다 hello 문자열이 출력되는 변수 timer 선언
var timer = setInterval(function()
{
    console.log (count + 'hello');
    count ++;
    if (count >= "10") // 만약 10보다 크다면?
    {
        clearInterval(timer); //timer 중지
    }
},1000);






/*
Quest 6.
1. id 가 'scroll' 인 요소에 'scroll' 이라는 class 를 추가합니다.
2. 1(순서) 요소의 위치를 x : 400px, y : 0px 로 좌표이동합니다.
*/
// Answer 6.
//id 가 'scroll' 인 요소에 'scroll' 이라는 요소를 찾을 변수 scrollE1s 선언
var scrollE1 = document.getElementById('scroll'); //id가 scroll인 요소 선언
scrollE1.classList.add("scroll"); //scroll class 추가
scrollE1.scrollTo( 400, 0); //요소의 위치를 x : 400px, y : 0px 로 좌표이동





/*
Quest 7.
1. id 가 'article' 인 요소를 찾습니다.
2. 1(순서) 요소의 자식 중 첫번째 요소(.row)에 'red' 라는 class 를 추가합니다.
3. 1(순서) 요소의 자식 중 세번째 요소(.row)를 삭제합니다.
*/
// Answer 7.
var articleE1 = document.getElementById("article")// id 가 'article' 인 요소 선언
artical.children[0].classList.add("red"); //요소의 자식 중 첫번째 요소(.row)에 'red' 라는 class 를 추가
artical.children[2].classList.remove("row"); //요소의 자식 중 마지막 요소를 삭제




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

function entername()
{
    var name = prompt('이름을 입력해주세요');
    if (name === null) 
    {
        console.log('입력이 취소되었습니다'); // '입력이 취소되었습니다.' 출력
    }
    else if (name === '')
    {
        alert('이름을 정확히 입력해주세요');
        entername();
    }
    else if (typeof name === 'string')
    {
        document.write(name);
    }
    
}
entername();


