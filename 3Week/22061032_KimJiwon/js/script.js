// 1

var a = 29;
var b;
b = a + 2
console.log(b);
var c;
c = (a - 9) / 10
console.log(c);
if (b % c == 1)
{
    console.log("일치합니다.");
}


// 2

var _eng = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm','n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
for (var i = 0; i < 26; i++) {
        console.log(_eng[i]); // _eng의 i를 순서대로 출력
}


// 3

for (var i = 1; i < 51; i++){
    if (i % 2 == 0){ // 2로 나누었을 경우 나머지가 0 이면
        console.log(i + '은 짝수!') // 짝수
    }
    else{
        console.log(i + '은 홀수!') // 그렇지 않으면 홀수
    }
}
