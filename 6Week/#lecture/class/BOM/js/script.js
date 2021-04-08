/*
BOM
브라우저의 객체 속성.
Browser Object Modal

브라우저가 가지고 있는 최상위 객체.(브라우저가 실행되면 생성되는 내장 객체)

window - 브라우저 화면에 대한 객체.
navigator - 데스크탑, 모바일의 환경에 대한 객체
screen - 해상도 등의 모니터 화면에 대한 객체.
hisotry - 문서의 브라우저 방문 기록에 대한 객체.
location - 문서의 경로에 대한 객체. (http://~~~)

*/
// console.log(window);
// console.log(document); // DOM - Document Object Model
// console.log(window.innerWidth, window.innerHeight); // 브라우저의 화면 사이즈.(가로너비, 세로높이 px)
/*
window.addEventListener("resize", function() {
    // 리사이즈 이벤트.
    //console.log("resize");
    console.log(window.innerWidth, window.innerHeight);
});
*/
// console.log(window.screenTop, window.screenLeft); // 모니터 화면에서 브라우저의 위치.
// console.log(window.pageXOffset, window.pageYOffset); // 문서 내부의 스크롤 위치.(문서가 길어져서 스크롤이 가능한 경우 확인)

// console.log(window.location);
// console.log(location);
// URL 의 객체를 반환.

// window.alert("경고창입니다."); // 시스템 경고창이 출력.
// alert("경고창 2");

// window.prompt("이름을 입력해주세요.");
// var name = prompt("이름을 입력해주세요."); // 시스템 다이얼로그 창을 출력
// (메시지 + 입력가능한 인풋, 확인 / 취소)
// 취소를 누르게 되면 null 값이 반환.
// 확인을 누르게 되면 입력한 문자열 값이 반환.
// console.log(name);
/*
//window.confirm("확인되었습니다.");
var isComplete = confirm("입력을 완료하셨나요?"); // 메시지 + 확인 / 취소 다이얼로그 창을 출력 
// true / false 의 값을 반환.
console.log(isComplete);
if(isComplete){ // 확인인 경우. true
    alert("확인되었습니다.");
}
if(!isComplete){ // 취소인 경우. false
    alert("다시 입력해주세요.");
}
*/
// window 객체의 메서드 중 하나. 문서를 해당 좌표로 스크롤 이동.
// window.scrollTo(x, y); //숫자로 입력.
// window.scrollTo(0, 0); // 문서의 최상단으로 이동.
// window.scrollTo(0, 500); // x: 0px, y: 500px 의 좌표로 이동

/*
window.setInterval();
window.clearInterval();

window.setTimeout();
window.clearTimeout();
*/
// setInterval();
// 주기적으로 반복되는 타이머 생성.
// setInterval(function() {
//     console.log("interval-1");
// }, 1000); // 1초마다 코드 실행.
// setInterval(callback(handler), time); milliseconds - 1000/1 초(ms)
/*
var i = 0;
function loop() {
    console.log("interval-2");
    // clearInterval(timer); // 타이머가 발생되면 초기화.
    if(i === 10){
        clearInterval(timer); // 타이머가 발생되면 초기화.
    }
    i++;
}
var time = 500;
*/
// var timer = setInterval(loop, time); // 1초마다 loop 함수 호출
// 타이머를 제거.
// clearInterval(timer); // timer 변수의 Interval 을 초기화.(제거)

// setTimeout(callback(handler), time); // 한번만 실행되는 타이머.
// clearTimeout(timer);
// clearInterval(timer); // setTimeout 으로 실행한 타이머도 초기화 가능.
// var timer2 = setTimeout(loop, time);
/*
var _timer;
i = 0;
function setLoop(){
    console.log("loop");
    if(i < 10){
        setTime();
    }
    i++;
}
function setTime() {
    _timer = setTimeout(setLoop, 1000);
}
setTime();
*/

// 새로운 내용의 브라우저 창 열기.
//window.open("http://www.naver.com", "naver");
// window.open(URL 주소, 이름, 스펙, 방문이력을 대체할지?(true, false));
//window.open("http://google.com", "_blank", "top=500,left=500,width=1000,height=500");

// Specs.
// top - 브라우저의 스크린  Y 좌표(px)
// left - 브라우저의 스크린 X 좌표(px)
// width - 브라우저의 가로폭 너비(px)
// height - 브라우저의 세로 높이(px)
// titlebar - 브라우저가 가지고 있는 제목 표시줄의 여부 yes no 1 0
// menubar - 메뉴 표시의 여부
// scrollbar - 스크롤바가 노출될 지 여부
// toolbar - 도구모음 표시의 여부
// location - 주소 표시줄의 여부
// status - 상태 표시줄의 여부
// resizable - 리사이즈의 가능 여부
// fullscreen - 풀스크린의 여부

// window.close();
// 브라우저 창을 닫기.

// 브라우저, 데스크탑, 모바일의 정보 객체
/*
console.log(navigator);
console.log(navigator.appName);
console.log(navigator.appVersion);
console.log(navigator.userAgent); // 어떤 디바이스로 접속했는지 체크할 때 사용.
console.log(navigator.userAgent.match("Mac").length > 0); // Mac 을 사용하고 있군..
console.log(navigator.userAgent.match("Windows") !== null) // Windows 를 사용하고 있군...
*/
// if(navigator.userAgent.match("Mac"))
// 모니터 화면에 대한 정보.
console.log(window.screen);
console.log(screen);
console.log(screen.availTop, screen.availLeft, screen.availWidth, screen.availHeight);
console.log(screen.width, screen.height);


// history.
// 사용자가 방문한 방문 이력 정보를 담고 있는 객체.
// console.log(window.history);
// console.log(history);
/* 방문이력이 이동 되었다면 1 초과(2 이상) */
// console.log(history.length); // 방문 이력에 대한 개수. 최초 문서를 로드할 때, 1 반환.

//** 모바일 웹을 만들 때, 뒤로 가기 버튼을 넣어야 하는지, 빼야하는지 확인할 때.
// if(history.length > 1){
    // 뒤로 가기 버튼 추가.
// }else{
    // 뒤로 가기 버튼 삭제.
// }

//**
// history.back();
// 이전 방문 이력으로 이동.

// history.forward();
// 다음 방문 이력으로 이동. (다음 방문이력이 있을 때에만 동작)

// history.go(-1); 방문 이력을 기준으로 뒤로 가기.
// index 번호에 따라 이동.

// location.
// URL 정보 객체.
// console.log(window.location);
// console.log(location);

// **
// console.log(location.href);
// URL 경로 전체를 문자열로 반환.(get)
// location.href = "http://google.com"; // 해당 URL 경로로 이동.

// *
// location.hash;
// hash 태그를 이용해서 스크롤 이동하거나 할 수 있다.
// spa - single page application (원페이지 사이트)
// 각 섹션별로 about, work, contact.
// URL/#about, URL/#work, URL/#contact
// 주소가 있는 원페이지 사이트를 만들 때, 주로 사용.

// *
// location.reload();
// 문서 새로고침.

// location.host - 호스트네임(포트포함)을 반환(도메인)
// location.hostname - 호스트네임을 반환
// location.port - 포트를 반환
// location.search - URL 매개변수를 반환.
// location.protocol - 프로토콜(http:, https:, file:, ftp:, sftp:, svn:....)을 반환
// location.pathname - 현재 보고있는 페이지의 경로 / - index 페이지, /about - about 페이지

