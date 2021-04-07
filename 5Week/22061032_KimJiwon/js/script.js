// Q-1.

var blank = ''; // 문자열을 담기 위한 변수.

function getEven(number1)
{
    for (i = 1; i <= number1; i++) // 변수 i가 매개변수보다 작거나 같을 때까지 반복.
    {
        if (i % 2 === 0) // i의 나머지가 0일 경우(짝수),
        {
            blank += i; // 비어있는 blank에 짝수 i 넣기.
            
        }
        if (i % 2 === 0 && i < number1) // i가 짝수이고 맨 끝 숫자보다 작을 경우,
        {
            
            blank += ", "; // blank에 쉼표와 띄어쓰기 붙이기.
        }
        if (i === number1) // i가 맨 끝 숫자일 경우,
        {
            blank +="."; // 뒤에 . 붙이기.
        }
    }
    
    return blank; // 문자열 blank 반환. 
}

var even1 = getEven(10); // 매개변수가 10일때 함수 호출.
console.log(even1); // 결과값 출력.

// --> 2, 4, 6, 8, 10. 출력.


// Q-2.

var blank = ''; // 문자열 담을 변수

function getStar(number1)
{
    if (typeof number1 !== 'number') // number1의 타입이 숫자가 아닐 때,
    {
        console.log('숫자만 입력 가능합니다.'); // 콘솔창에 '숫자만 입력 가능합니다.' 출력
        return false; // false 반환.
    }
    if (typeof number1 === 'number') // number1의 타입이 숫자일 때,
    {
        for(i = 1; i <= number1; i++) // 1부터 해당하는 숫자까지 반복.(i = 0으로하면 0이 포함되므로 1부터 시작.)
        {
            blank += "*"; // 비어있는 변수에 숫자만큼 * 담기.
        }
        return blank; // 더한 문자열 결과값 반환.
    }
}
var star1 = getStar("text");
console.log(star1); // --> 숫자만 입력 가능합니다. false 출력.
var star2 = getStar(5); 
console.log(star2); // --> ***** 출력.


// Q-3.

var fruit = ['Apple', 'Orange', 'Grape', 'Melon'];

fruit.unshift('Mango'); // 배열.unshift('추가할 원소') -> 배열의 앞쪽에 원소 추가.
// console.log(fruit); // ["Mango", "Apple", "Orange", "Grape", "Melon"] 출력.

fruit.splice(3,0,'Cherry'); // 배열.splice(시작지점, 삭제할 원소의 개수, 추가할 원소)
// console.log(fruit); // ["Mango", "Apple", "Orange", "Cherry", "Grape", "Melon"] 출력.

fruit.reverse(); // 배열.reverse() -> 요소 반대로 정렬

console.log(fruit); 
// --> ["Melon", "Grape", "Cherry", "Orange", "Apple", "Mango"] 출력.



// Q-4.

function getSize() // 함수 선언
{
    var _array = { winWidth : window['innerWidth'], //윈도우 콘텐츠 영역의 넓이값
                    winHeight : window['innerHeight'] } //윈도우 콘텐츠 영역의 높이값
    return _array; // 배열 반환
}

var winSize = getSize(); // 반환값 할당
console.log("문자열 결과값 : 윈도우 콘텐츠의 영역 width : " + winSize.winWidth + "px, height : ", winSize.winHeight + "px 입니다."); //  ** _array.widWidth 사용하니까 에러 뜸.
// --> '문자열 결과값 : 윈도우 콘텐츠의 영역 width : 982px, height :  754px 입니다.' 출력.