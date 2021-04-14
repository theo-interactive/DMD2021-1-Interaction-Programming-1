/*
BOM
브라우저의 객체 속성.
Browser Object Modal
*/

// Navigator 객체.
// 브라우저의 정보
// console.log(window.navigator);
// console.log(navigator);
// console.log(navigator.appName);
// console.log(navigator.appVersion);
// console.log(navigator.userAgent);
// 사용자가 어떤 플랫폼, OS, 브라우저 환경 에서 접속했는지 파악할 수 있다.
// PC, Mobile 중 어디로 접속했는지 체크하거나 할 수 있다.

// Screen 객체
// 화면의 정보
// console.log(window.screen);
// console.log(screen);
// console.log(screen.width);
// console.log(screen.height);
// console.log(screen.availWidth);
// console.log(screen.availHeight);
// console.log(screen.orientation.angle); // 화면의 각도.

// 모바일의 각도.
// 90 angle - Landscape view (풍경화)
// 0 angle - Portrait view (인물화)

// History 객체
// (브라우저를 새로 열고 난 후) 방문이력 정보
// console.log(window.history);
// console.log(history);
// console.log(history.length); // 현재까지 방문한 이력의 개수.
// history.back(); // 뒤로 가기 기능
// history.forward(); // 앞으로 가기 기능
// history.go(-1); // 현재 보고있는 페이지를 기준으로 이동.
// history.go(1);

// Location 객체
// URL 주소 정보
// console.log(window.location);
// console.log(location);
// search
// protocol
// origin
// hash
// pathname
// ----
// location.reload(); 새로고침
// location.replace("http://naver.com"); 주소 변경(대체) - 현재 보고있던 마지막 방문이력이 바뀜.
// location.assign("http://naver.com"); 주소 변경 - 방문이력이 추가됨.
// location.href = "http://google.com";