/*
문제 풀이.
*/

/*
Quest 1.
1. 문서의 title을 '학번_이름' 으로 변경합니다.
*/

// Answer 1.
document.title = "22061051_박수민"; //title을 학번과 이름으로 바꿔줬습니다.


/*
Quest 2.
1. id 가 'title' 인 요소에 'Hello World' 문자열이 포함되도록 작성합니다.
*/

// Answer 2.
var titleEl = document.getElementById('title'); //변수를 만든다음 'title'입력.
titleEl.innerHTML = 'Hello World'; //변수에 문자열 입력!


/*
Quest 3.
1. class 가 'title' 인 요소들에 '안녕하세요.' 문자열이 포함되도록 작성합니다.
*/

// Answer 3.
var titleEl2 = document.getElementsByClassName('title'); //변수 titleEl2 선언
titleEl2[0].innerHTML = '안녕하세요.';
titleEl2[1].innerHTML = '안녕하세요.';
titleEl2[2].innerHTML = '안녕하세요.';
//내부에 '안녕하세요.' 포함이 되도록 문자열 작성


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
function getRowCount() { //getTowCount 함수 선언!
    var row = document.getElementsByClassName('row');//row를 찾아야되니 변수이름을 row로 했습니다.
    return row.length;//요소의 개수 반환하기 위해 return 사용.
}
var rowCount = getRowCount();//rowCount 변수 선언. 함수 선언으로 적었다가 전부 오류나서 다시보니 변수 선언..
console.log('row class 의 개수는 ' + rowCount +'개입니다.'); //문자열이 포함되게 출력을 해야해서 ''를 사용해 줍니다.



/*
Quest 5.
1. 1 초 마다 'hello' 라는 문자열이 console 에 출력되도록 작성합니다.
2. 전역범위에 count 변수를 생성하여 매 출력시 console 에 몇 번의 출력이 되고있는지 번호가 함께 출력되도록 작성합니다.
3. 10 번의 출력 후 해당 기능이 실행되지 않도록 작성합니다.
*/

// Answer 5.
var count = 0;
var timer = setInterval(function(){
    console.log('hello' + count); //초마다 hello가 같이 입력되어서 출력.
    count++;
    if(count >= 10){//10 번의 출력 후 해당 기능이 실행되지 않도록 작성합니다. = 10보다 작거나 같다.
        clearInterval(timer);//중지.
    }
},1000);



/*
Quest 6.
1. id 가 'scroll' 인 요소에 'scroll' 이라는 class 를 추가합니다.
2. 1(순서) 요소의 위치를 x : 400px, y : 0px 로 좌표이동합니다.
*/

// Answer 6.
var scrollEl = document.getElementById('scroll'); //id를 scroll로.
scrollEl.classList.add('scroll'); //scroll이라는 class 추가.
scrollEl.scrollTo(400, 0); //위치를 문제에 맞게 좌표이동.




/*
Quest 7.
1. id 가 'article' 인 요소를 찾습니다.
2. 1(순서) 요소의 자식 중 첫번째 요소(.row)에 'red' 라는 class 를 추가합니다.
3. 1(순서) 요소의 자식 중 세번째 요소(.row)를 삭제합니다.
*/

// Answer 7.
var articleEl = document.getElementById('article'); //위와 마찬가지로 id를 article로 저장.
articleEl.children[0].classList.add('red'); //첫번째(항상 0부터 시작함)에 red라는 class 추가.
articleEl.children[2].classList.remove('row'); //세번째(0부터 시작했으니 세번째는 2.) 요소 삭제.


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

// function enterName(){ //문제가 길어서 많이 헷갈렸습니다. 우선 enterName함수를 선언합니다.
//     var name = prompt('이름을 입력해주세요.');//'이름을 입력해주세요.' 라는 문구와 입력창이 포함된 다이얼로그창
//     if(name === 'null'){//취소를 클릭한 경우 = null 작성.
//         console.log('입력이 취소되었습니다.');//null은 입력이 취소되었습니다.
//     }else if(typeof name === 'string'){//문자를 입력하지 않고 확인을 클릭 = string 작성.
//         document.write(name);
//     } //이 부분을 다른 친구들 스크립트를 참고해도 잘 모르겠습니다. 문자를 입력하지 않았다는 의미에서 ''로 적은것 같고 뭔가 뒤의 string도 적어야 될것같은데 잘 모르겠습니다.ㅠㅠ
// }
// enterName();//enterName 함수 호출
